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

/**
 * 角距尺测量记录（IndexedDB `measurements` 库）。
 * 端点坐标与角距在保存时按 J2000 坐标固化：之后切换投影、
 * 缩放/平移视场都不会改变记录值；图上像素长度从不写入记录。
 */
export interface Measurement {
  uuid: string;
  createdAt: number;
  /** 起点内置目标 id 与 J2000 坐标快照（度） */
  fromId: string;
  fromName: string;
  fromRa: number;
  fromDec: number;
  /** 终点内置目标 id 与 J2000 坐标快照（度） */
  toId: string;
  toName: string;
  toRa: number;
  toDec: number;
  /** 球面角距（度）：短大圆弧，haversine 按 J2000 坐标计算 */
  separationDeg: number;
  /** 保存时的视场快照（测量记录随当前视场存入） */
  fov: FovConfig;
}

/**
 * 当前激活的一条角距尺（由两个内置目标实时派生，用于三视图绘制与导出）。
 * separationDeg 只由两端点 J2000 坐标决定，与投影方式、视场缩放无关。
 */
export interface ActiveRuler {
  fromId: string;
  fromName: string;
  fromRa: number;
  fromDec: number;
  toId: string;
  toName: string;
  toRa: number;
  toDec: number;
  /** 球面角距（度），haversine */
  separationDeg: number;
  /** J2000 短大圆弧采样点 [ra, dec]（度），供投影按各自裁切规则绘制 */
  arc: Array<[number, number]>;
}
