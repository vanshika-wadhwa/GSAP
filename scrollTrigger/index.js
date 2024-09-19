// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360,
    
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360,

// })
// gsap.from("#page3 #box",{
//     scale:0,
//     // delay:1,
//     duration:1,
//     rotate:360,
//     // scrollTrigger:"#page2 #box"

//     scrollTrigger:{
//         trigger:"#page2 #box",  //kha se krna h
//         scroller:"body",
//         markers:true,   //scroller strt, end aaega
//         start:"top 60%",   //strt/end ki position fix: jaise hi match hue animation strt


//     }
// })


gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        scrub:3
    }
})
gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 10%",
        scrub:true,
        
    }
})