function deepCopyCyclic(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (map.has(obj)) return map.get(obj);
  
  const copy = Array.isArray(obj) ? [] : {};
  map.set(obj, copy);
  
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopyCyclic(obj[key], map);
    }
  }
  return copy;
}