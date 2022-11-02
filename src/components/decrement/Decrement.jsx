import React from 'react'
import { useEffect } from 'react'

const Decrement = ({countDecrease, setCountDecrease}) => {
    // const handleDecrementClick =()=>{
    //     setCountDecrease(prev=>prev-1)
    // }

    useEffect(()=>{
        setInterval(()=>{
            setCountDecrease((prev)=>prev-1)
        },1000)
    });
  return (
    <div>
      <button count = {countDecrease} >Decrease</button>
    </div>
  )
}

export default Decrement
