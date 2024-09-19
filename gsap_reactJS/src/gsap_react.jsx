import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from'gsap'

const App = () => {
// useGSAP(()=>{                      //hook
//   //box ki movement hui
//   gsap.to(".box",{
//     duration:1,
//     delay:1,
//     x:500
//   })
// })


//userRef is like a eventlistner 


// const gsapRef=useRef()  //passes the refferences

// useGSAP(()=>{
//   gsap.to(gsapRef.current,{
//     duration:1,
//     delay:1,
//     x:500,
//     rotate:360
//   })


// useGSAP(()=>{
//   //abi dono boxes pr gsap lgi::: agr 1 pr krna ho to
//   gsap.to(".box",{
//     rotate:720,
//     duration:1,
//     delay:1
//   })
// })

const boxRef=useRef()  //1 box ki movement k liye --->useRef 
useGSAP(()=>{
  gsap.from(boxRef.current,{
    rotate:720,
    duration:1,
    delay:1,

  })
})


  return (
    <main>
      {/* 1 element tha to useRef kiya */}
      {/* <div ref={gsapRef} className="box"></div>   */}

      <div className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>

  )
}

export default App
