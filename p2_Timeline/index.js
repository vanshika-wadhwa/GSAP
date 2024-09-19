//timeline menu bar pr click hone k baad chle  timeline rukki---> paused:true
var menu=document.querySelector("#nav i")
var close=document.querySelector("#full i")

var tl=gsap.timeline({paused:true})

tl.to("#full",{
    right:"0",  //right se aagya
    duration:0.5
})
tl.from("#full h4",{
    x:150,
    duration:0.6,
    stagger:0.2,
    opacity:0

})

tl.from("#full i",{
    opacity:0
})

tl.pause()  //timing paused

menu.addEventListener("click", function(){
    console.log("navbar aaya")
    tl.play()
})
close.addEventListener("click", function(){
    console.log("navbar gaya")
    tl.reverse()
})