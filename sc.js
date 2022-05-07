document.querySelector(".cards").addEventListener("mousemove",function(){
     document.querySelectorAll(".card").forEach(function(elem){
        elem.style.transform = "rotate(6deg)";  
        elem.style.marginLeft = "-20px";
    })
    document.querySelector(".cf").style.marginLeft ="40px";
    })
    document.querySelector(".cards").addEventListener("mouseout",function(){
        document.querySelectorAll(".card").forEach(function(elem){
           elem.style.transform = "rotate(0deg)"; 
        elem.style.marginLeft = "0px";
       })
       })
    var t1 = gsap.timeline();
t1
.to("#secfh",{
        opacity : 1,
        duration : 0.8,
         left : "15vh"
})
.to("#cir",{
        duration:2,
        ease: "Bounce.easeOut",
        top : "38vh"    
})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#secs",
        start: "top 10%",
        // markers: true,
        pin:true,
        scrub: true 
        }  
});

tl.to("#secs h1",{
   top : "-10%",
   opacity:1,
   ease : "Expo.EaseOut",
   
},"s")
tl.to("#secs img",{
    x: "-30vw",
    delay: .1,
    opacity: 1
},"s")
gsap.to("#sectf > h1",{
    // stagger: .3,
   top :"50%",
   opacity:1,
   scrollTrigger:{
    trigger: "#sect",
    start: "10% 10%",
    // markers: true,
    pin:true,
    scrub: true 
   } 
});
gsap.to(".card",{
    stagger: .3,
   opacity: 1,
   ease : "easeInOut",
   delay: 1,
   y: "-20vh",
   scrollTrigger:{
    trigger: "#secfi",
    start: "top top",
    // markers: true,
    pin: true,
    scrub: true 
   } 
});
var get = gsap.timeline({
    scrollTrigger:{
        trigger: "#getin",
        start: "top 30%",
        // markers: true,
        // pin: true,
        // scrub: true 
    }
});
get
.to("#get",{
    delay: 1,
    duration:1,
    y:"120vh",
   opacity: 1,
   ease : "Bounce.easeOut",
})
.to("#get",{
    width: "100vw",
    height: "100vh",
    y:"100vh",
    x:"-5vw",
    backgroundColor: "white",
    borderRadius:"0%"
    
})