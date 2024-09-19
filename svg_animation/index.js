var initialPath=`M 10 100 Q 500 100 990 100`
var finalPath=`M 10 100 Q 500 100 990 100`
var string=document.querySelector('#string')

string.addEventListener("mouseenter",function(dets){
    //dets: uss pot pr kya kya ghtnae hui uski info--- dets dega
    console.log(dets);
})
string.addEventListener("mouseleave",function(){
    console.log("leaved");
})
//cursor ki movement se line move hogi
string.addEventListener("mousemove",function(dets){
    path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`      //y-axis se move hoga acc to dets
    console.log(dets.y);
    gsap.to("svg path",{
        attr:{d:path},  //path ko store kiya d naam k attribute m
        //line rassi bngyi, lekin point pr nhi aarhi vapis
        duration:0,  //fast movement
        ease:"power3.out"
    })
})
// jaise cursor choda tb vapis kaise aaegi?
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},  //same path pr vapis aajaegi
        duration:0.5,
        ease:"elastic.out(1,0.2)"
    })
})

