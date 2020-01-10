export function isExist(value) {
  if (typeof value === 'undefined' || value === null) return false
  else return true
}

export function isNotExist(value) {
  return !isExist(value)
}
