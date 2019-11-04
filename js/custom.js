const background = document.querySelector(".bcg-parallax");
const range = 20;

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) // thanks @alice-mx

var timeout;
document.addEventListener('mousemove', function ({x, y}) {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  timeout = window.requestAnimationFrame(function () {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    background.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
  })
}, false);
