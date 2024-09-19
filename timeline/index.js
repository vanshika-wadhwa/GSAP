//sare boxes ko 1 k baad 1 chlana h: ist vale ka (duration+delay)time calculate kreke second vale ko uska dena hoga time

//hectic: to calculate time asynchrouns

gsap.to("#box",{
    x:600,
    rotate:360,
    duration:1.5,
    delay:1

})
gsap.to("#box1",{
    x:600,
    // rotate:360,
    duration:1.5,
    delay:2.5,  
    backgroundColor:"yellow",
})
gsap.to("#box2",{
    x:600,
    // rotate:360,
    duration:1.5,
    delay:4,  
    scale:0.5,
    borderRadius:"50%"
})

//timeline: synchronous  apne aap chle sb 

var tl=gsap.timeline()
//boxes animate
tl.to("#box",{
    x:600,
    rotate:360,
    duration:1.5,
    delay:1
})
tl.to("#box1",{
    x:600,
    duration:1.5
})
tl.to("#box2",{
    x:600,
    duration:1.5
})

// navbar animate
//var tl=gsap.timeline()
tl.from('h2',{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    
})
tl.from('h4',{
    y:-20,
    opacity:0,
    duration:1,
    // delay:0.5,
    stagger:-0.3
})
//upr k aaya
tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.5
})