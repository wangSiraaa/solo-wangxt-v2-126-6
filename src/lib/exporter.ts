// 导出工具：SVG（矢量、含坐标系与时间基准文字）、PNG（栅格化）、JSON（数据）。
// 不依赖任何网络；SVG 序列化自当前文档节点，另补头部说明文字。

import {
  buildProjection,
  belowHorizonObject,
  FOV_DISC_PX,
  graticuleObject,
  horizonLineObject,
  sphericalCircle,
  VIEW_SIZE,
  type ProjectionKind
} from './projections';
import type { SkyModel, SkyTarget } from './computeSky';
import type { FovConfig, SiteState, Annotation, Measurement } from '../types';
import { formatDec, formatRA, greatCircleArc, lineStringObject } from './geoMath';

export interface ExportMeta {
  projectionLabel: string;
  site: SiteState;
  timeUtcIso: string;
  fov: FovConfig;
  julianDay: number;
  gmstHours: number;
  horizonClip: boolean;
  magLimit: number;
}

function fmtTime(iso: string): string {
  return iso.replace('.000Z', 'Z').replace('T', ' ');
}

/** 生成独立的 SVG 字符串（可直接保存/印刷），含完整图注 */
export function buildStandaloneSvg(
  kind: ProjectionKind,
  sky: SkyModel,
  visibleTargets: SkyTarget[],
  annotations: Annotation[],
  meta: ExportMeta,
  measurements: Measurement[] = []
): string {
  const built = buildProjection(kind, meta.fov.centerRa, meta.fov.centerDec, meta.fov.radiusDeg);
  const C = VIEW_SIZE / 2;
  const pad = 30;
  const headerH = 70;
  const measureLines = measurements.length;
  const footerH = 92 + measureLines * 17;
  const W = VIEW_SIZE + pad * 2;
  const H = VIEW_SIZE + pad * 2 + headerH + footerH;
  const x0 = pad;
  const y0 = headerH;

  const grat = built.path(graticuleObject());
  const step = meta.fov.radiusDeg <= 20 ? 5 : meta.fov.radiusDeg <= 45 ? 10 : 20;
  const rings: string[] = [];
  for (let r = step; r < meta.fov.radiusDeg; r += step) {
    rings.push(built.path(sphericalCircle(meta.fov.centerRa, meta.fov.centerDec, r)));
  }
  const fovPath = built.path(sphericalCircle(meta.fov.centerRa, meta.fov.centerDec, meta.fov.radiusDeg));
  const horizon = built.path(horizonLineObject(sky.horizon.nadirRa, sky.horizon.nadirDec));
  const below = built.path(belowHorizonObject(sky.horizon.nadirRa, sky.horizon.nadirDec));

  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const starEls = visibleTargets
    .map((t) => {
      const p = built.projection([t.ra, t.dec]);
      if (!p) return '';
      const rad = Math.max(1.6, Math.min(7, 6.2 - t.mag * 0.9));
      if (t.kind === 'star') {
        return `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${rad.toFixed(1)}" fill="#fff" opacity="${
          !t.aboveHorizon ? 0.35 : 1
        }"/>`;
      }
      if (t.kind === 'planet') {
        return `<rect x="${(p[0] - rad).toFixed(1)}" y="${(p[1] - rad).toFixed(1)}" width="${(rad * 2).toFixed(1)}" height="${(
          rad * 2
        ).toFixed(1)}" fill="#9ecbff"/>`;
      }
      return `<polygon points="${p[0].toFixed(1)},${(p[1] - rad).toFixed(1)} ${(p[0] + rad).toFixed(1)},${p[1].toFixed(
        1
      )} ${p[0].toFixed(1)},${(p[1] + rad).toFixed(1)} ${(p[0] - rad).toFixed(1)},${p[1].toFixed(1)}" fill="${
        t.kind === 'sun' ? '#ffd27d' : '#dfe6f2'
      }"/>`;
    })
    .join('');

  const labelEls = visibleTargets
    .filter((t) => t.kind !== 'star' || t.mag <= 1.6)
    .map((t) => {
      const p = built.projection([t.ra, t.dec]);
      if (!p) return '';
      return `<text x="${(p[0] + 7).toFixed(1)}" y="${(p[1] + 3).toFixed(1)}" font-size="10.5" fill="#cfe0ff">${esc(
        t.name
      )}</text>`;
    })
    .join('');

  const annoEls = annotations
    .map((a) => {
      const p = built.projection([a.ra, a.dec]);
      if (!p) return '';
      return `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="5" fill="none" stroke="${
        a.color
      }" stroke-width="1.6"/><text x="${(p[0] + 8).toFixed(1)}" y="${(p[1] + 4).toFixed(1)}" font-size="11" fill="${
        a.color
      }">${esc(a.text)}</text>`;
    })
    .join('');

  // 球面角距尺：短大圆弧（密集 slerp 采样，交投影球面裁切）、端点、角距
  const measureEls = measurements
    .map((m) => {
      const arc = greatCircleArc(m.from.ra, m.from.dec, m.to.ra, m.to.dec, 160);
      const d = built.path(lineStringObject(arc));
      const fp = built.projection([m.from.ra, m.from.dec]);
      const tp = built.projection([m.to.ra, m.to.dec]);
      const mid = arc[Math.floor(arc.length / 2)];
      const mp = built.projection([mid[0], mid[1]]);
      const parts: string[] = [];
      if (d) parts.push(`<path d="${d}" fill="none" stroke="${m.color}" stroke-width="2" stroke-dasharray="7 4" stroke-linecap="round"/>`);
      if (fp) parts.push(`<circle cx="${fp[0].toFixed(1)}" cy="${fp[1].toFixed(1)}" r="4.5" fill="none" stroke="${m.color}" stroke-width="2"/>`);
      if (tp) parts.push(`<polygon points="${tp[0].toFixed(1)},${(tp[1] - 5).toFixed(1)} ${(tp[0] + 5).toFixed(1)},${tp[1].toFixed(1)} ${tp[0].toFixed(1)},${(tp[1] + 5).toFixed(1)} ${(tp[0] - 5).toFixed(1)},${tp[1].toFixed(1)}" fill="none" stroke="${m.color}" stroke-width="2"/>`);
      if (mp) parts.push(`<rect x="${(mp[0] - 34).toFixed(1)}" y="${(mp[1] - 20).toFixed(1)}" width="68" height="15" rx="3" fill="#070a14" opacity="0.85" stroke="${m.color}" stroke-width="0.7"/><text x="${mp[0].toFixed(1)}" y="${(mp[1] - 9).toFixed(1)}" font-size="11" font-weight="bold" text-anchor="middle" fill="${m.color}">${m.separationDeg.toFixed(3)}°</text>`);
      return parts.join('');
    })
    .join('');

  // 图注中的测量条目：端点、坐标系、角距（单条）
  const measureCaptionOne = (m: Measurement): string =>
    `${esc(m.from.name)}（RA ${formatRA(m.from.ra)} Dec ${formatDec(m.from.dec)}）→ ${esc(m.to.name)}（RA ${formatRA(
      m.to.ra
    )} Dec ${formatDec(m.to.dec)}）＝ ${m.separationDeg.toFixed(4)}°；J2000.0 平赤道坐标，短大圆弧 haversine 计算，不随投影/缩放改变。建档视场 RA ${formatRA(
      m.fov.centerRa
    )} / ${formatDec(m.fov.centerDec)}，r ${m.fov.radiusDeg.toFixed(1)}°`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="sans-serif">
<rect width="${W}" height="${H}" fill="#070a14"/>
<text x="${x0}" y="28" font-size="20" font-weight="bold" fill="#eaf1ff">本地星图 · ${esc(meta.projectionLabel)}</text>
<text x="${x0}" y="52" font-size="12" fill="#9fb4d8">
坐标系：J2000.0 平赤道/平春分点（赤经、赤纬）；视场中心 ${formatRA(meta.fov.centerRa)} / ${formatDec(meta.fov.centerDec)}，
球面角半径 ${meta.fov.radiusDeg.toFixed(1)}°；同心虚线环为等角距参考环（${kind === 'stereographic' ? '立体投影下变形放大' : '等距方位投影下等距'}）。
</text>
<g transform="translate(${x0},${y0})">
<circle cx="${C}" cy="${C}" r="${FOV_DISC_PX}" fill="#0b1020" stroke="#3b4a6b" stroke-width="1.5"/>
<clipPath id="expdisc"><circle cx="${C}" cy="${C}" r="${FOV_DISC_PX}"/></clipPath>
<g clip-path="url(#expdisc)">
<path d="${grat}" fill="none" stroke="#27406a" stroke-width="0.6"/>
${rings.map((d) => `<path d="${d}" fill="none" stroke="#3d6ea5" stroke-width="0.7" stroke-dasharray="2 3"/>`).join('\n')}
<path d="${below}" fill="#5a1f24" opacity="0.35"/>
<path d="${horizon}" fill="none" stroke="#ff5d5d" stroke-width="1.6"/>
<path d="${fovPath}" fill="none" stroke="#57e389" stroke-width="1.4"/>
${starEls}
${labelEls}
${annoEls}
${measureEls}
</g>
</g>
<g transform="translate(${x0},${y0 + VIEW_SIZE + 26})" font-size="11.5" fill="#9fb4d8">
<text x="0" y="0">时间基准：${fmtTime(meta.timeUtcIso)}（UTC）；儒略日 JD = ${meta.julianDay.toFixed(5)}（力学时 TT）；格林威治视恒星时 ${meta.gmstHours.toFixed(4)} h</text>
<text x="0" y="18">观测位置：${esc(meta.site.name)}（纬度 ${meta.site.latitude.toFixed(4)}°，经度 ${meta.site.longitude.toFixed(4)}°，海拔 ${meta.site.height} m）</text>
<text x="0" y="36">筛选：星等 ≤ ${meta.magLimit}（仅恒星）；地平线裁切：${meta.horizonClip ? '开启（仅地平以上）' : '关闭（地平以下目标半透明显示）'}。地平坐标由 astronomy-engine Rotation_EQJ_HOR 转换，无大气折射改正。</text>
<text x="0" y="54">角距均按球面（haversine）计算；图上像素距离不作为实际角距。太阳系天体坐标为含光行差的 J2000 视位置。星表为 J2000 近似值，仅供科普制图。</text>
${measurements
  .map(
    (m, i) =>
      `<text x="0" y="${72 + i * 17}" fill="#b6f0c9">角距尺 ${i + 1}：${measureCaptionOne(m)}</text>`
  )
  .join('\n')}
</g>
</svg>`;
}

export function downloadText(filename: string, text: string, mime: string) {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function downloadPngFromSvg(svg: string, filename: string, scale = 2) {
  const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  const img = new Image();
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error('SVG 栅格化失败'));
    img.src = url;
  });
  const m = svg.match(/width="(\d+)"\s+height="(\d+)"/);
  const w = m ? Number(m[1]) : VIEW_SIZE;
  const h = m ? Number(m[2]) : VIEW_SIZE;
  const canvas = document.createElement('canvas');
  canvas.width = w * scale;
  canvas.height = h * scale;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#070a14';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  URL.revokeObjectURL(url);
  canvas.toBlob((blob) => {
    if (!blob) return;
    const pu = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = pu;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(pu), 1000);
  }, 'image/png');
}

export function buildExportJson(
  sky: SkyModel,
  visibleTargets: SkyTarget[],
  annotations: Annotation[],
  meta: ExportMeta,
  measurements: Measurement[] = []
): string {
  return JSON.stringify(
    {
      tool: 'local-starchart',
      coordinateSystem: 'J2000.0 mean equator & equinox (ICRS-aligned catalog approximations)',
      timeStandard: { utc: meta.timeUtcIso, julianDayTT: meta.julianDay, gmstHours: meta.gmstHours },
      observer: meta.site,
      fieldOfView: {
        centerRA_J2000_deg: meta.fov.centerRa,
        centerDec_J2000_deg: meta.fov.centerDec,
        angularRadius_deg: meta.fov.radiusDeg
      },
      filters: { magnitudeLimitStars: meta.magLimit, horizonClip: meta.horizonClip },
      targets: visibleTargets.map((t) => ({
        id: t.id,
        name: t.name,
        designation: t.designation,
        kind: t.kind,
        ra_J2000_deg: Number(t.ra.toFixed(5)),
        dec_J2000_deg: Number(t.dec.toFixed(5)),
        magnitude: t.mag,
        azimuth_deg: Number(t.az.toFixed(3)),
        altitude_deg: Number(t.alt.toFixed(3)),
        angularSeparationFromCenter_deg: Number(t.sepFromCenter.toFixed(3))
      })),
      annotations,
      angularMeasurements: measurements.map((m) => ({
        uuid: m.uuid,
        createdAt: new Date(m.createdAt).toISOString(),
        coordinateSystem: 'J2000.0 mean equator & equinox',
        method: 'haversine great-circle separation (short arc)',
        from: {
          targetId: m.from.targetId,
          name: m.from.name,
          designation: m.from.designation,
          ra_J2000_deg: Number(m.from.ra.toFixed(6)),
          dec_J2000_deg: Number(m.from.dec.toFixed(6))
        },
        to: {
          targetId: m.to.targetId,
          name: m.to.name,
          designation: m.to.designation,
          ra_J2000_deg: Number(m.to.ra.toFixed(6)),
          dec_J2000_deg: Number(m.to.dec.toFixed(6))
        },
        angularSeparation_deg: Number(m.separationDeg.toFixed(6)),
        fieldOfViewAtCreation: {
          centerRA_J2000_deg: m.fov.centerRa,
          centerDec_J2000_deg: m.fov.centerDec,
          angularRadius_deg: m.fov.radiusDeg
        }
      }))
    },
    null,
    2
  );
}
