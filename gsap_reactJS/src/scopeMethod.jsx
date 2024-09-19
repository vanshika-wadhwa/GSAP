//------------------------------------scope concept-----------------------------------------------------
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from'gsap'

const App = () => {

// useGSAP(()=>{
//   gsap.from(".box",{
//     rotate:720,
//     duration:1,
//     scale:0,
//     opacity:0,
//     delay:0.5
//   })
// },{scope:".container"})    //1 way of scope


//2nd way of scope: useref ki help se
const containerRef=useRef()
useGSAP(()=>{
  gsap.from(".box",{
    rotate:720,
    duration:1,
    scale:0,
    opacity:0,
    delay:0.5
  })
},{scope:containerRef})


  return (
    <main>
     
      {/* <div className="container">   ist way: direct container k box pr gsap lgega*/}  
      <div ref={containerRef} className="container">  {/*2nd way: ref b dena hoga */}
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="kuchtoh">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>

  )
}

export default App


