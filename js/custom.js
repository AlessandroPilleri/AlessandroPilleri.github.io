var controller = new ScrollMagic.Controller();

var animation = true;
var mousemovement = false;
var sectionOpened = false;

var timelineInit = new TimelineMax({onComplete: function() {
  animation = false;
  mousemovement = true;
}});
var timelineOpen = new TimelineMax({onComplete: function() {
  animation = false;
}});
var timelineChange = new TimelineMax({onComplete: function() {
  animation = false;
}});
var timelineReset = new TimelineMax({onComplete: function() {
  animation = false;
  mousemovement = true;
}});

// Site opening
timelineInit.to(".round", 1, {
  top: "50%",
  opacity: 1,
  ease: Power2.easeOut
})
.from(".round", 0.8, {
  width: "0rem"
})
.from(".round2", 0.8, {
  opacity: 0,
  width: "0rem"
}, "-=0.8")
.from(".bcg-parallax img", 2, {
  opacity: 0
})
.from(".round2", 0.5, {
  height: "0rem",
  top: "70%"
}, "-=2")
.from(".title", 1, {
  opacity: 0,
  top: "55%"
}, "-=2")
.from("ul", 2, {
  opacity: 0
}, "-=1.5")


// Site transitions
document.getElementById("home").addEventListener("click", () => {

  if (animation != true && sectionOpened == true) {
    sectionOpened = false;
    document.getElementsByClassName("round")[0].style.top = "15%";
    document.getElementsByClassName("round")[0].style.left = "25%";
    document.getElementsByClassName("round")[0].style.transform = "rotate(0, 0)";
    mousemovement = false;
    animation = true;
    timelineReset.to(".section", 1, {
      opacity: 0,
      display: "none"
    })
    .to(".round", 1, {
      width: "20rem",
      left: "50%"
    }, "-=1")
    .to(".round2", 1, {
      width: "20rem",
      opacity: 1
    }, "-=1")
    .to(".round", 1.5, {
      height: "20rem",
      top: "50%",
      ease: Power2.easeOut
    })
    .to(".round2", 1.5, {
      top: "50%",
      height: "20rem"
    }, "-=1.5")
    .to(".title", 1, {
      opacity: 1,
      top: "50%"
    }, "-=0.5")
  }
})

document.getElementById("about").addEventListener("click", () => {

  if (animation != true) {
    if (sectionOpened == false) {
      sectionOpened = true;
      mousemovement = false;
      document.getElementsByClassName("round")[0].style.transform = "translate(-45%, -50%)";
      document.getElementsByClassName("round")[0].style.transform = "rotate(0, 0)";
      animation = true;
      timelineOpen.to(".title", 1, {
        opacity: 0,
        top: "55%"
      })
      .to(".round", 1.2, {
        height: "0rem",
        top: "15%",
        ease: Power2.easeOut
      }, "-=1")
      .to(".round2", 1, {
        top: "80%",
        height: "0rem"
      }, "-=1.2")
      .to(".round2", 1, {
        width: "0rem",
        opacity: 0
      })
      .to(".round", 1, {
        width: "50rem",
        left: "25%"
      }, "-=1")
      .to(".about", 1, {
        opacity: 1,
        display: "block"
      }, "-=1")
      .from(".progress-value", 1.5, {
        width: "0%"
      }, "-=0.5")
    } else {
      timelineChange.to(".section", 1, {
        opacity: 0,
        display: "none"
      })
      .to(".round", 1, {
        opacity: 0,
        width: 0
      }, "-=1")
      .to(".round", 1, {
        opacity: 1,
        width: "50rem"
      })
      .to(".about", 1, {
        opacity: 1,
        display: "block"
      }, "-=1")
      .from(".progress-value", 1.5, {
        width: "0%"
      }, "-=0.5")
    }
  }
})

document.getElementById("projects").addEventListener("click", () => {

  if (animation != true) {
    if (sectionOpened == false) {
      sectionOpened = true;
      mousemovement = false;
      document.getElementsByClassName("round")[0].style.transform = "translate(-45%, -50%)";
      document.getElementsByClassName("round")[0].style.transform = "rotate(0, 0)";
      animation = true;
      timelineOpen.to(".title", 1, {
        opacity: 0,
        top: "55%"
      })
      .to(".round", 1.2, {
        height: "0rem",
        top: "15%",
        ease: Power2.easeOut
      }, "-=1")
      .to(".round2", 1, {
        top: "80%",
        height: "0rem"
      }, "-=1.2")
      .to(".round2", 1, {
        width: "0rem",
        opacity: 0
      })
      .to(".round", 1, {
        width: "50rem",
        left: "25%"
      }, "-=1")
      .to(".projects", 1, {
        opacity: 1,
        display: "block"
      }, "-=1")
    } else {
      timelineChange.to(".section", 1, {
        opacity: 0,
        display: "none"
      })
      .to(".round", 1, {
        opacity: 0,
        width: 0
      }, "-=1")
      .to(".round", 1, {
        opacity: 1,
        width: "50rem"
      })
      .to(".projects", 1, {
        opacity: 1,
        display: "block"
      }, "-=1")
    }
  }
})

document.getElementById("contact").addEventListener("click", () => {

  if (animation != true) {
    if (sectionOpened == false) {
      sectionOpened = true;
      mousemovement = false;
      document.getElementsByClassName("round")[0].style.transform = "translate(-45%, -50%)";
      document.getElementsByClassName("round")[0].style.transform = "rotate(0, 0)";
      animation = true;
      timelineOpen.to(".title", 1, {
        opacity: 0,
        top: "55%"
      })
      .to(".round", 1.2, {
        height: "0rem",
        top: "15%",
        ease: Power2.easeOut
      }, "-=1")
      .to(".round2", 1, {
        top: "80%",
        height: "0rem"
      }, "-=1.2")
      .to(".round2", 1, {
        width: "0rem",
        opacity: 0
      })
      .to(".round", 1, {
        width: "50rem",
        left: "25%"
      }, "-=1")
      .to(".contact", 1, {
        opacity: 1,
        display: "block"
      }, "-=1")
    } else {
      timelineChange.to(".section", 1, {
        opacity: 0,
        display: "none"
      })
      .to(".round", 1, {
        opacity: 0,
        width: 0
      }, "-=1")
      .to(".round", 1, {
        opacity: 1,
        width: "50rem"
      })
      .to(".contact", 1, {
        opacity: 1,
        display: "block"
      }, "-=1")
    }
  }
})


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
  })
}, false);
