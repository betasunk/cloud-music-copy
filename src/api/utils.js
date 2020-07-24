//防抖函数，短时间内多次触发同一事件，只执行最后一次，或者只执行最开始的一次，中间的不执行。
const debounce = (fn, delay) => {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      clearTimeout(timer)
    }, delay)
  }
}
export { debounce }
