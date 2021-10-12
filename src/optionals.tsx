export function Optionals() {
  //Tracks the mouse - this can be used to draw
  let mousePos = document.documentElement;
  mousePos.addEventListener("mousemove", e => {
    mousePos.style.setProperty('--mouse-x', e.clientX + "px");
    mousePos.style.setProperty('--mouse-y', e.clientY + "px");
  });
}