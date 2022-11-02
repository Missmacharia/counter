import React from 'react'
import { useEffect } from 'react'
const Increment = ({setCount}) => {
    // const handleIncrementClick=()=>{
    //     setCount(prev=>prev+1)
    // }
    let interval;
    const handleIncrementClick=(()=>{
       interval= setInterval(()=>{
            setCount((prev)=>prev +1)
        },1000)
    })
    useEffect(()=>{
        handleIncrementClick()
        return()=>clearInterval(interval)
    },[] )
  return (
    <div>
      {/* <button count={count} >Increase</button> */}
    </div>
  )
}

export default Increment
