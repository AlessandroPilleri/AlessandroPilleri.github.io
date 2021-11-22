$(document).on('mousemove', function(e){
    $('#cursor').css({
       left:  e.pageX,
       top:   e.pageY,
       transform: "translate(-50%, -50%)"
    });
});

$('a').mouseover(() => {
    gsap.to('#cursor', {
        width: "80px",
        height: "80px",
        "border-radius": "80px",
        duration: 0.2
    })
})

$('a').mouseleave(() => {
    gsap.to('#cursor', {
        width: "30px",
        height: "30px",
        "border-radius": "30px",
        duration: 0.2
    })
})