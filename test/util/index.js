
export function debug(name, obj) {
  console.log(name)
  console.log(obj)
}

export function debugAll(debugData) {
  for (var key in debugData) {
    console.log(key)
    console.log(debugData[key])
  }
}
