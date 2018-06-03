let defalutCity = '深圳'
try {
  if (localStorage.city) {
    defalutCity = localStorage.city
  }
} catch (e) {
  console.log('浏览器不兼容localStrage属性')
}

export default {
  city: defalutCity
}
