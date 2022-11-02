import React from 'react'
import { useEffect } from 'react'
const Increment = ({count, setCount}) => {
    // const handleIncrementClick=()=>{
    //     setCount(prev=>prev+1)
    // }
    useEffect(()=>{
        setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
    });
  return (
    <div>
      <button count={count} >Increase</button>
    </div>
  )
}

export default Increment
