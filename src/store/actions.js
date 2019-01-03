export const changeCity = function (ctx, city) {
  console.log(city)
  ctx.commit('changeCity', city)
}
