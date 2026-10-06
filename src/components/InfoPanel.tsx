// 选中目标信息面板：同时给出 J2000 赤道坐标、本地地平坐标、
// 与视场中心的真实球面角距（明确不是图上像素距离）。
// 另列球面角距尺测量记录：端点、J2000 坐标、球面角距。

import type { SkyTarget } from '../lib/computeSky';
import type { Measurement } from '../types';
import { azCompass, formatDec, formatRA } from '../lib/geoMath';

interface InfoPanelProps {
  target: SkyTarget | null;
  centerAlt: number;
  centerAz: number;
  gmstHours: number;
  julianDay: number;
  measurements: Measurement[];
  /** 把当前选中目标设为角距尺起点/终点 */
  onSetMeasureEndpoint: (which: 'from' | 'to') => void;
  /** 载入某条测量建档时的视场（测量值本身不变） */
  onGoToMeasurementFov: (m: Measurement) => void;
  onDeleteMeasurement: (uuid: string) => void;
}

const KIND_NAME: Record<SkyTarget['kind'], string> = {
  star: '恒星（星表 J2000.0）',
  sun: '太阳（动态视位置）',
  moon: '月球（动态视位置）',
  planet: '行星（动态视位置）'
};

export default function InfoPanel({
  target,
  centerAlt,
  centerAz,
  gmstHours,
  julianDay,
  measurements,
  onSetMeasureEndpoint,
  onGoToMeasurementFov,
  onDeleteMeasurement
}: InfoPanelProps) {
  return (
    <div className="info-panel">
      {target ? (
        <>
          <div className="info-head">
            <span className="info-name">{target.name}</span>
            <span className="info-desig">{target.designation}</span>
            <span className="info-kind">{KIND_NAME[target.kind]}</span>
          </div>
          <div className="ruler-quick">
            <button className="btn btn-mini" onClick={() => onSetMeasureEndpoint('from')}>
              设为角距尺起点 ○
            </button>
            <button className="btn btn-mini" onClick={() => onSetMeasureEndpoint('to')}>
              设为角距尺终点 ◇
            </button>
          </div>
          <div className="info-grid">
            <div>
              <label>赤经 RA (J2000)</label>
              <strong>{formatRA(target.ra)}</strong>
              <span className="sub">{target.ra.toFixed(4)}°</span>
            </div>
            <div>
              <label>赤纬 Dec (J2000)</label>
              <strong>{formatDec(target.dec)}</strong>
              <span className="sub">{target.dec.toFixed(4)}°</span>
            </div>
            <div>
              <label>方位角 A（北=0 顺时针）</label>
              <strong>{target.az.toFixed(2)}°</strong>
              <span className="sub">{azCompass(target.az)}方</span>
            </div>
            <div>
              <label>地平高度 h</label>
              <strong className={target.alt >= 0 ? 'up' : 'down'}>{target.alt.toFixed(2)}°</strong>
              <span className="sub">{target.alt >= 0 ? '地平以上' : '地平以下'}</span>
            </div>
            <div>
              <label>视星等</label>
              <strong>{target.mag.toFixed(2)}</strong>
              {target.kind === 'moon' && target.phaseFraction !== undefined && (
                <span className="sub">月相照亮 {(target.phaseFraction * 100).toFixed(0)}%</span>
              )}
            </div>
            <div>
              <label>距视场中心（球面角距）</label>
              <strong>{target.sepFromCenter.toFixed(3)}°</strong>
              <span className="sub">haversine 计算，非图上像素距离</span>
            </div>
          </div>
        </>
      ) : (
        <div className="info-empty">
          点击球面视图或右侧任一投影图中的星点，即可在三种视图中定位同一目标。
          <ul>
            <li>圆形＝恒星，方形＝行星，菱形＝太阳/月球</li>
            <li>绿色圆＝视场边界，红色线＝地平圈，蓝色虚线＝等角距参考环</li>
          </ul>
        </div>
      )}

      {measurements.length > 0 && (
        <div className="ruler-records">
          <div className="ruler-records-head">球面角距尺记录（J2000 坐标 · haversine 短大圆弧 · 与投影/缩放无关）</div>
          <table>
            <thead>
              <tr>
                <th>起点（○）</th>
                <th>终点（◇）</th>
                <th className="num">角距</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {measurements.map((m) => (
                <tr key={m.uuid}>
                  <td title={`RA ${formatRA(m.from.ra)}  Dec ${formatDec(m.from.dec)}`}>
                    <span className="dot" style={{ background: m.color }} />
                    {m.from.name}
                    <span className="sub-coord">
                      {formatRA(m.from.ra)} / {formatDec(m.from.dec)}
                    </span>
                  </td>
                  <td title={`RA ${formatRA(m.to.ra)}  Dec ${formatDec(m.to.dec)}`}>
                    {m.to.name}
                    <span className="sub-coord">
                      {formatRA(m.to.ra)} / {formatDec(m.to.dec)}
                    </span>
                  </td>
                  <td className="num ruler-sep">{m.separationDeg.toFixed(4)}°</td>
                  <td className="num">
                    <button className="link-btn" onClick={() => onGoToMeasurementFov(m)} title="载入建档视场（角距不变）">
                      视场
                    </button>
                    <button className="x-btn" onClick={() => onDeleteMeasurement(m.uuid)} title="只删除此测量记录">
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="info-meta">
        视场中心：高度 {centerAlt.toFixed(2)}°，方位 {centerAz.toFixed(2)}°（{azCompass(centerAz)}）· GMST {gmstHours.toFixed(4)} h · JD(TT) {julianDay.toFixed(4)}
      </div>
    </div>
  );
}
