var main=document.querySelector("#main")
var cursor=document.querySelector("#cursor")
var image=document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
    console.log("event performed")
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,  //cursor ki movement strt hui
        duration:1,
        ease:"back.out", //smoothness improvement
        

    })
})
image.addEventListener("mouseenter", function(dets){
    console.log("cursor andr aaya")
    cursor.innerHTML="view more"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"blue"

    })
})
image.addEventListener("mouseleave", function(dets){
    console.log("cursor dur")
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"

    })
})