var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function firstpageanim(){
  var tl = gsap.timeline()
  tl.from(".navbar",{
    y:'-10',
    opacity:0,
    duration:1.5,
    ease:Expo.easeInOut
  })
  .to("#boundingelem",{
  y:0,
  ease:Expo.easeInOut,
  duration:2,
  delay:-1,
  stagger:.2
  })
  .from(".herofooter",{
    y:-10,
    opacity:0,
    duration:1.5,
    delay:-1,
    ease:Expo.easeInOut
  })
}

function circlechaptakro(){
  clearTimeout(timeout);
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove",function(dets){
  var xdiff = dets.clientX - xprev;
  var ydiff = dets.clientX - yprev;
  xprev = dets.clientX;
  yprev = dets.clientY;
    xscale = gsap.utils.clamp(.8,1.2,xdiff);
    yscale = gsap.utils.clamp(.8,1.2,ydiff);
    circlefollow(xscale,yscale);

    timeout = setTimeout(function () {
      document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    },100);
  });
}


function circlefollow(xscale,yscale){
    window.addEventListener("mousemove",(dets)=>{
     document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}

circlechaptakro();
circlefollow();
firstpageanim();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate=0;
  var diffrow= 0;
  elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });
elem.addEventListener("mousemove",function (dets) {
var diff = dets.clientY - elem.getBoundingClientRect().top;
diffrow = dets.clientX - rotate;
rotate = dets.clientX;
gsap.to(elem.querySelector("img"), {
  opacity: 1,
  ease: Power3,
  top:diff,
  left:dets.clientX,
  rotate:gsap.utils.clamp(-20,20,diffrow * 0.5)
});
});
});


// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

// document.querySelectorAll(".elem").forEach(function (elem) {
//   var rotate = 0;
//   var diffrot = 0;
//   elem.addEventListener("mouseleave", function (dets) {
//     gsap.to(elem.querySelector("img"), {
//       opacity: 0,
//       ease: Power3,
//       duration: 0.5,
//     });
//   });
//   elem.addEventListener("mousemove", function (dets) {
//     var diff = dets.clientY - elem.getBoundingClientRect().top;
//     diffrot = dets.clientX - rotate;
//     rotate = dets.clientX;
//     gsap.to(elem.querySelector("img"), {
//       opacity: 1,
//       ease: Power3,
//       top: diff,
//       left: dets.clientX,
//       rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//     });
//   });
// });