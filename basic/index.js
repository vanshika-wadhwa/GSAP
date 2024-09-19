gsap.to("#box",{
    x:1000,
    duration:2,  //2sec tk chlega
    delay:1,   //1sec k baad chlna strt hoga
    rotate:360,
    //css: items written in camel-Case
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:0.5
})
gsap.to("#box2", {
    x:500,
    y:500,
    delay:3
})

gsap.from("#box", {
    x:1000,
    duration:2,  //2sec tk chlega
    
    rotate:360
    
})

gsap.to("h1",{
    color:"red",
    duration:1,
    delay:2
})
gsap.from("h1",{
    opacity:0,
    y:30,           //niche se uth kr aaega + visible hoga
    duration:1,
    delay:2,
    stagger:-1    //1-1 krke chize dikhaega jo 1 naam k honge
})

gsap.to('#box1',{
    x:120,
    duration:2,
    delay:1,
    //scale:10,
    borderRadius:"10vw",
    repeat:-1,  //
    yoyo:true,    //vapis laega  f-i

})

//timeline