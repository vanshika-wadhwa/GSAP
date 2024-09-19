//movining a circle on the basis of click

// import React, { useState } from 'react'
// import gsap from 'gsap'
// import {random} from 'gsap/all';
// import { useGSAP } from '@gsap/react';

// const App = () => {
//   const [circle, setCircle] = useState(0)
//   const random=gsap.utils.random(-500,500,10)
  
//   useGSAP(()=>{
//     gsap.to(".circle",{
//       x:circle,
//       duration:1,

//     })
//   },[circle]) //obeject->[circle]----- vo bni dependency===>jb jb circle ki value chnge[setCircle value se] hui  tbtb button click krne pr circle move hua 
//   return (
//     <main>
//       <button onClick={()=>{
//         console.log("hey im clicked")   
//         //i want to generate random values:via gsap utils methods
//         // console.log(random())
//         setCircle(random)  //circle m new value aai
//         // console.log(circle)
//       }}>Animate</button>

//       <div className="circle"></div>    {/*anotherway to move circle -->useRef */}
//     </main>
//   )
// }

// export default App


//moving a box on the basis of click
import React, {useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import {random} from 'gsap/all';
import { useGSAP } from '@gsap/react';

const App = () => {
  const [circle, setCircle] = useState(0)
  const [xValue, setxValue] = useState(0)
  const [yValue, setyValue] = useState(0)
  const [rotateValue, setrotateValue] = useState(0)

  const randomX=gsap.utils.random(-500,500,10)
  const rotateX=gsap.utils.random(-360,360,30)
  const randomY=gsap.utils.random(-200,200,30)
  
  
  const imgRef=useRef()
  
  useGSAP(()=>{
    gsap.to(imgRef.current,{  //js ki chize "" isme ni likhi jaengi, css ki likhi jaengi
      x:xValue,
      y:yValue,
      duration:1,
      rotate:rotateValue,
      
    })
  },[xValue,rotateX, randomY])  //{scope:'main', dependecies:[xValue,rotateX, randomY]}

  return (
    <main>
      <button onClick={()=>{
        setxValue(randomX);  
        setrotateValue(rotateX);        
        setyValue(randomY);
      }}>Animate</button>

      {/* <div ref={boxRef} className="box"></div>    anotherway to move circle -->useRef */}
      <img ref={imgRef} src="https://img.freepik.com/premium-photo/black-white-image-fly-with-black-background_889227-4275.jpg" alt="fly" />
    </main>
  )
}

export default App
