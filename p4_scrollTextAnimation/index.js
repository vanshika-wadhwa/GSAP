window.addEventListener("clicked", function(dets){  //wheel : scroll event
    console.log(dets.deltaY)   //deltaY: scrolling speed note krta h up scroll-->+ve val, down scroll--> -ve value

    if(dets.deltaY>0){
        console.log("up scrolling")
        gsap.to(".marque",{
            tranform:'traslate(-200%)',  //hlka sa piche gya text
            duration:4,
            ease:"none",
            repeat:-1
        })

        gsap.to(".marque i",{
            rotate:180
        })
    }
    else{
        gsap.to(".marque",{
            tranform:'traslate(0%)',  //hlka sa piche gya text+ move hua
            duration:2,
            delay:1,
            repeat:-1,
            ease:"none"
        })
        
        gsap.to(".marque i",{
            rotate:0
        })
    }
})
