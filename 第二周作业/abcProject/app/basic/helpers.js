/**
 *将数字货币转换成千分位货币的形式
 */

 export const format_currency = (value) => {
  value = parseFloat(value).toFixed(2).toString()

  const [i, f] = value.split(".")
  return i
      .split("")
      .reverse()
      .map( (x, i) => (i + 1) % 3 === 0 ? "," + x : x)
      .reverse()
      .join("") + "." + f

}
