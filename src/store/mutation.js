export default {
  changeCity (state, city) {
    // 3. mutation改变state
    state.city = city
    // 使用localStorage，让本机记忆所选内容。同时也要考虑兼容性，防止报错
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
