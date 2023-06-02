export function shallowClone(obj) {
  return Object.fromEntries(Object.entries(obj))
}
export default {
  shallowClone,
}
