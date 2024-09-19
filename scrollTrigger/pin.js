gsap.to("#page2 h1", {
    transform: "translateX(-100%)", //piche apne aap gya : on the basis of scrolling
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end:"top -100%",
        pin:true,
        scrub:2
    }
})