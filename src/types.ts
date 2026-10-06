// 共享数据类型

export interface FovConfig {
  /** 中心 J2000 赤经（度） */
  centerRa: number;
  /** 中心 J2000 赤纬（度） */
  centerDec: number;
  /** 视场角半径（度），按球面角距定义 */
  radiusDeg: number;
}

export interface SiteState {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  height: number;
}

export interface SavedFov {
  uuid: string;
  name: string;
  createdAt: number;
  fov: FovConfig;
  siteId: string;
  /** 观测时间 UTC ISO 字符串 */
  timeUtcIso: string;
  note?: string;
}

export interface Annotation {
  uuid: string;
  createdAt: number;
  /** 批注锚点 J2000 赤经赤纬（度），坐标绑定，不绑像素 */
  ra: number;
  dec: number;
  text: string;
  color: string;
}

/** 角距尺端点：引用内置目标，同时固化其 J2000 坐标，目标日后移动也不改变已存测量 */
export interface MeasurementEndpoint {
  /** 内置目标 id（星表恒星或日月行星） */
  targetId: string;
  name: string;
  designation: string;
  /** 建档时端点的 J2000 赤经赤纬（度），角距与短弧都按此计算 */
  ra: number;
  dec: number;
  kind: 'star' | 'sun' | 'moon' | 'planet';
}

export interface Measurement {
  uuid: string;
  createdAt: number;
  /** 起点 → 终点（方向仅用于图上标注，不影响角距） */
  from: MeasurementEndpoint;
  to: MeasurementEndpoint;
  /** 两端点的真实球面角距（度，haversine，短大圆弧） */
  separationDeg: number;
  /** 建档时的视场：测量记录随当前视场一起保存 */
  fov: FovConfig;
  color: string;
}
