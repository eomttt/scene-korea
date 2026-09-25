const positionPrefix = "scene-korea:collection-scroll:v1:";
const restoreKey = "scene-korea:restore-collection-scroll:v1";

function readPosition(search: string) {
  const stored = window.sessionStorage.getItem(`${positionPrefix}${search}`);
  if (stored === null) return null;
  const position = Number(stored);
  return Number.isFinite(position) && position >= 0 ? position : null;
}

export function rememberCollectionScroll(search: string, position: number) {
  try { window.sessionStorage.setItem(`${positionPrefix}${search}`, String(position)); }
  catch { /* Navigation still works when browser storage is unavailable. */ }
}

export function requestCollectionScrollRestore(search: string) {
  try {
    if (readPosition(search) === null) return false;
    window.sessionStorage.setItem(restoreKey, search);
    return true;
  } catch { return false; }
}

export function takeCollectionScrollRestore(search: string) {
  try {
    if (window.sessionStorage.getItem(restoreKey) !== search) return null;
    window.sessionStorage.removeItem(restoreKey);
    return readPosition(search);
  } catch { return null; }
}
