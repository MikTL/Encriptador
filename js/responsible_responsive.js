const d=document,
  w=window

export default function responsiveMedia(id, mq) {
  let breakpoint = w.matchMedia(mq)
  function responsive(e) {
    if (e.matches) {
      d.getElementById(id).innerHTML = `<img src="./assets/munieco.png" alt="imagen de muñeco">`
    }else{
      d.getElementById(id).innerHTML =""
    }
  }
  breakpoint.addEventListener("change", responsive)
  responsive(breakpoint)
}
