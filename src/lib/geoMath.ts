// 球面几何工具：所有角距离一律按球面公式计算，
// 投影图上的像素距离只用于交互容差，不充当实际角距。

export const DEG = Math.PI / 180;
export const RAD = 180 / Math.PI;
export const HOUR2DEG = 15;

/** 夹取到 [-1, 1]，防止浮点误差导致 acos 越界 */
function clamp1(x: number): number {
  return Math.max(-1, Math.min(1, x));
}

/**
 * 两点球心角（haversine 公式），输入/输出均为角度。
 * 适用于任意两点，包括跨赤经零点、近极区。
 */
export function angularSeparation(lon1: number, lat1: number, lon2: number, lat2: number): number {
  const dlat = (lat2 - lat1) * DEG;
  // 经度差先归算到 [-180, 180)，保证跨零点时取最短弧
  let dlon = ((lon2 - lon1 + 540) % 360 - 180) * DEG;
  const s1 = Math.sin(dlat / 2);
  const s2 = Math.sin(dlon / 2);
  const a = s1 * s1 + Math.cos(lat1 * DEG) * Math.cos(lat2 * DEG) * s2 * s2;
  return 2 * Math.asin(clamp1(Math.sqrt(a))) * RAD;
}

/** 余弦定律版本（点积），输入单位向量分量对应的角度 */
export function sepCos(lon1: number, lat1: number, lon2: number, lat2: number): number {
  return Math.sin(lat1 * DEG) * Math.sin(lat2 * DEG) +
    Math.cos(lat1 * DEG) * Math.cos(lat2 * DEG) *
    Math.cos(((lon2 - lon1 + 540) % 360 - 180) * DEG);
}

/**
 * 以 (lon0,lat0) 为中心、按初始方位角 bearing（自北顺时针，度）
 * 沿大圆弧走 distance（度），返回 (lon,lat)。
 */
export function destinationPoint(lon0: number, lat0: number, bearing: number, distance: number): [number, number] {
  const δ = distance * DEG;
  const θ = bearing * DEG;
  const φ1 = lat0 * DEG;
  const λ1 = lon0 * DEG;
  const sinφ2 = Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ);
  const φ2 = Math.asin(clamp1(sinφ2));
  const y = Math.sin(θ) * Math.sin(δ) * Math.cos(φ1);
  const x = Math.cos(δ) - Math.sin(φ1) * sinφ2;
  const λ2 = λ1 + Math.atan2(y, x);
  // 归一化到 [0,360)
  const lon = ((λ2 * RAD) % 360 + 360) % 360;
  return [lon, φ2 * RAD];
}

/** 单位球上 (lon,lat) -> 笛卡尔 */
export function lonLatToVec(lon: number, lat: number): [number, number, number] {
  const φ = lat * DEG, λ = lon * DEG;
  return [Math.cos(φ) * Math.cos(λ), Math.cos(φ) * Math.sin(λ), Math.sin(φ)];
}

/** 笛卡尔单位向量 -> (lon,lat) */
export function vecToLonLat(x: number, y: number, z: number): [number, number] {
  const r = Math.hypot(x, y, z) || 1;
  x /= r; y /= r; z /= r;
  return [((Math.atan2(y, x) * RAD) % 360 + 360) % 360, Math.asin(clamp1(z)) * RAD];
}

/**
 * 两点间的【短大圆弧】采样（slerp 球面线性插值）。
 * 直接在单位向量上插值，t∈[0,1] 沿角距最短的大圆走，
 * 跨赤经零点、跨极点、近对跖点都成立——不依赖经度连续性，
 * 因此不会出现沿赤道横贯 360° 的长弧。
 *
 * @param n 中间采样数（结果 n+1 个点）
 */
export function greatCircleArc(lon1: number, lat1: number, lon2: number, lat2: number, n = 96): Array<[number, number]> {
  const [x1, y1, z1] = lonLatToVec(lon1, lat1);
  const [x2, y2, z2] = lonLatToVec(lon2, lat2);
  let cosω = x1 * x2 + y1 * y2 + z1 * z2;
  cosω = clamp1(cosω);
  // 完全重合：退化为单点（重复返回，调用方按零长弧处理）
  if (cosω > 1 - 1e-12) {
    const p: [number, number] = [((lon1 % 360) + 360) % 360, lat1];
    return Array.from({ length: n + 1 }, () => [p[0], p[1]]);
  }
  const omega = Math.acos(cosω);
  // 短弧所在大圆的切向基轴 v：u2 在垂直于 u1 方向上的单位分量。
  // 近对跖点时 sinω≈0、该分量退化，任取一个与 u1 垂直的稳定方向代替
  // （此时朝哪个方向走 180° 都是合法短弧）。
  let vx: number, vy: number, vz: number;
  const sinOmega = Math.sin(omega);
  if (sinOmega > 1e-9) {
    vx = (x2 - cosω * x1) / sinOmega;
    vy = (y2 - cosω * y1) / sinOmega;
    vz = (z2 - cosω * z1) / sinOmega;
  } else {
    // 构造垂直于 u1 的向量：u1 × 参考轴
    const refAxis = Math.abs(z1) < 0.9 ? [0, 0, 1] : [1, 0, 0];
    vx = y1 * refAxis[2] - z1 * refAxis[1];
    vy = z1 * refAxis[0] - x1 * refAxis[2];
    vz = x1 * refAxis[1] - y1 * refAxis[0];
    const m = Math.hypot(vx, vy, vz) || 1;
    vx /= m; vy /= m; vz /= m;
  }
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    // p(t) = cos(tΩ)·u1 + sin(tΩ)·v —— 沿 u1→u2 的短大圆弧
    const a = Math.cos(t * omega);
    const b = Math.sin(t * omega);
    const x = a * x1 + b * vx;
    const y = a * y1 + b * vy;
    const z = a * z1 + b * vz;
    pts.push(vecToLonLat(x, y, z));
  }
  return pts;
}

/** GeoJSON LineString 对象（度数坐标对） */
export function lineStringObject(coords: Array<[number, number]>): object {
  return { type: 'LineString', coordinates: coords };
}

/**
 * 生成以 (centerLon,centerLat) 为中心、角半径 radiusDeg（度）的视场边界。
 * 沿大圆弧等角采样，跨赤经零点时由投影的球面裁剪（clipAngle）处理，
 * 不会被连成横贯整张图的直线。
 */
export function fovBoundary(centerLon: number, centerLat: number, radiusDeg: number, n = 128): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= n; i++) {
    pts.push(destinationPoint(centerLon, centerLat, (360 * i) / n, radiusDeg));
  }
  return pts;
}

/** 赤经格式化：度 -> HH:MM:SS */
export function formatRA(deg: number): string {
  let d = ((deg % 360) + 360) % 360;
  const h = d / 15;
  const hh = Math.floor(h);
  const mm = Math.floor((h - hh) * 60);
  const ss = Math.round((((h - hh) * 60 - mm) * 60));
  return `${String(hh).padStart(2, '0')}h${String(mm).padStart(2, '0')}m${String(ss % 60).padStart(2, '0')}s`;
}

/** 赤纬格式化：±DD:MM:SS */
export function formatDec(deg: number): string {
  const sign = deg < 0 ? '−' : '+';
  let d = Math.abs(deg);
  const dd = Math.floor(d);
  const mm = Math.floor((d - dd) * 60);
  const ss = Math.round((((d - dd) * 60 - mm) * 60));
  return `${sign}${String(dd).padStart(2, '0')}°${String(mm).padStart(2, '0')}′${String(ss % 60).padStart(2, '0')}″`;
}

/** 方位角转中文方位名 */
export function azCompass(az: number): string {
  const names = ['北', '东北', '东', '东南', '南', '西南', '西', '西北'];
  return names[Math.round((((az % 360) + 360) % 360) / 45) % 8];
}
