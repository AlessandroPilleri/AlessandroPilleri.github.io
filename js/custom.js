// Rotate background based on mouse motion
const range = 30;
const calcValue = (a, b) => (a/b*range-range/2).toFixed(1)

var timeout;
document.addEventListener('mousemove', function ({x, y}) {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  timeout = window.requestAnimationFrame(function () {
    var yValue = calcValue(y, window.innerHeight);
    var xValue = calcValue(x, window.innerWidth);

    TweenMax.to(".bcg-parallax img", 1.5, {
      transform: `translateX(${-xValue*10}px) translateY(${-yValue*10}px)`
    });
    TweenMax.to(".square", 1, {
      transform: `translateX(-${50+xValue*0.3}%) translateY(-${50+yValue*0.3}%)`
    });
  })
}, false);
