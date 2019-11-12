var controller = new ScrollMagic.Controller();
var timelineInit = new TimelineMax();

timelineInit.from(".round", 1, {
  top: 0,
  opacity: 0,
  ease: Power2.easeOut
})
.to(".round", 0.8, {
  width: "20rem"
})
.from(".bcg-parallax img", 2, {
  opacity: 0
})
.from(".title", 1, {
  opacity: 0,
  bottom: "35%"
}, "-=2")
.from("ul", 2, {
  opacity: 0,
  right: "-10%"
}, "-=1.5")

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

    TweenMax.to(".bcg-parallax", 1, {
      transform: `translateX(${-xValue}px) translateY(${-yValue}px)`
    });
    //background.style.transform = `translateX(${-xValue}px) translateY(${-yValue}px)`;

    var percY = (yValue*30/100).toFixed(1)
    var percX = (xValue*30/100).toFixed(1)

    TweenMax.to(".round", 1, {
      transform: `translateX(${-percX}px) translateY(${-percY}px) rotateX(${percY}deg) rotateY(${percX}deg)`
    })

  })
}, false);
