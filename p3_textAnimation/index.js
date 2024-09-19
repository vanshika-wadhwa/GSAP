//perfect for left right flow
// function breakTheText() {
//     var h1 = document.querySelector("h1")
//     console.log(h1) // prints shreyians with tag
//     var h1text = h1.textContent
//     console.log(h1text)  // prints without tag


//     //string todna
//     var splittedText = h1text.split("")
//     console.log(splittedText)  //return in array

//     var clutter = ''
//     // splittedText.forEach(function(){
//     //     // console.log("hello")
//     //     clutter=clutter+"hey"  //9 baar hey print hua
//     // })

//     splittedText.forEach(function (e) {  //jiss element pr chlaa vo print hoga-->shreyians
//         clutter += `<span>${e}</span>`  //sare tute hue dikhe
//     })
//     console.log(clutter)

//     h1.innerHTML = clutter   //web pg pr gya content
// }

// gsap.from("h1 span",{
//     y:50,  //ye work ni krega---> tranfrom m work krta h but yha tute hue h elements
//     duration:0.8,
//     delay:0.5,
//     opacity:0,
//     stagger:0.15  //left/right text flow hua
//     // center se flow krwana ho to? ---> span k hr element ko class deni hogi
// })

//modifing for center flow
function breakTheText() {
    var h1 = document.querySelector("h1")
    console.log(h1) // prints shreyians with tag
    var h1text = h1.textContent
    console.log(h1text)  // prints without tag


    //string todna
    var splittedText = h1text.split("")
    console.log(splittedText)  //return in array

    var clutter = ''
    var halfValue=Math.floor(splittedText.length/2)
    splittedText.forEach(function (e,idx) {  //hr element ki class bni with index
        if(idx<halfValue){
            // console.log(idx, e)
            clutter += `<span class='a'>${e}</span>`  //sare tute hue dikhe

        }
        else{
            // console.log("lol", e)
            clutter += `<span class='b'>${e}</span>`  //sare tute hue dikhe

        }
            })
    console.log(clutter)

    h1.innerHTML = clutter   //web pg pr gya content
}
breakTheText()
// ------------------------text breakdown comlete----------------------------------

gsap.from("h1 .a",{ //class k bases pr
    y:50,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:0.15 
    })
gsap.from("h1 .b",{ //class k bases pr
    y:80,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:-0.15 
    })
