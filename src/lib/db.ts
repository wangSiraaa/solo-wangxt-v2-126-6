// IndexedDB 本地持久化：保存视场配置、天球坐标锚定的批注，以及球面角距尺测量记录。
// 三类数据分属独立对象库：删除测量记录不会删除视场、目标或普通批注。
// 无后端；所有数据仅存于浏览器。Promise 风格的极简封装。

import type { Annotation, Measurement, SavedFov } from '../types';

const DB_NAME = 'local-starchart';
const DB_VERSION = 2;
const STORE_FOVS = 'fovs';
const STORE_ANNOTATIONS = 'annotations';
const STORE_MEASUREMENTS = 'measurements';

let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_FOVS)) {
        db.createObjectStore(STORE_FOVS, { keyPath: 'uuid' });
      }
      if (!db.objectStoreNames.contains(STORE_ANNOTATIONS)) {
        db.createObjectStore(STORE_ANNOTATIONS, { keyPath: 'uuid' });
      }
      // v2：球面角距尺测量记录（独立对象库）
      if (!db.objectStoreNames.contains(STORE_MEASUREMENTS)) {
        db.createObjectStore(STORE_MEASUREMENTS, { keyPath: 'uuid' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

function tx<T>(storeName: string, mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(storeName, mode);
        const req = fn(t.objectStore(storeName));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      })
  );
}

export async function putFov(fov: SavedFov): Promise<void> {
  await tx(STORE_FOVS, 'readwrite', (s) => s.put(fov));
}

export async function getAllFovs(): Promise<SavedFov[]> {
  const all = await tx<SavedFov[]>(STORE_FOVS, 'readonly', (s) => s.getAll());
  return all.sort((a, b) => b.createdAt - a.createdAt);
}

export async function deleteFov(uuid: string): Promise<void> {
  await tx(STORE_FOVS, 'readwrite', (s) => s.delete(uuid));
}

export async function putAnnotation(a: Annotation): Promise<void> {
  await tx(STORE_ANNOTATIONS, 'readwrite', (s) => s.put(a));
}

export async function getAllAnnotations(): Promise<Annotation[]> {
  const all = await tx<Annotation[]>(STORE_ANNOTATIONS, 'readonly', (s) => s.getAll());
  return all.sort((a, b) => a.createdAt - b.createdAt);
}

export async function deleteAnnotation(uuid: string): Promise<void> {
  await tx(STORE_ANNOTATIONS, 'readwrite', (s) => s.delete(uuid));
}

export async function putMeasurement(m: Measurement): Promise<void> {
  await tx(STORE_MEASUREMENTS, 'readwrite', (s) => s.put(m));
}

export async function getAllMeasurements(): Promise<Measurement[]> {
  const all = await tx<Measurement[]>(STORE_MEASUREMENTS, 'readonly', (s) => s.getAll());
  return all.sort((a, b) => a.createdAt - b.createdAt);
}

export async function deleteMeasurement(uuid: string): Promise<void> {
  await tx(STORE_MEASUREMENTS, 'readwrite', (s) => s.delete(uuid));
}
