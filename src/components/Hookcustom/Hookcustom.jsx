import React, { useState } from 'react'
import { useEffect } from 'react'

// const Hookcustom = (ini) => {
//     // const [count]=useCounter()
//   return (
//     let interval;
//     const handleDecrement = () => {
//       interval = setInterval(() => {
//         setCountDecrease((prev) => prev - 1);
//       }, 1000);
//     };
  
//     useEffect(() => {
//       console.log('from decrement');
//       handleDecrement()
//   return ()=>clearInterval(interval)
//     }, [count]);
// //     return(
// //   )
// }

// export default Hookcustom


export default function useC (opper){

    const [count,setCount] = useState(0)

    useEffect(()=>{
        let intv = setInterval(()=>{
            if(opper == '+'){
                setCount(count+1)
            }else{
                setCount(count-1)
            }
        },1000)
        return (()=>{
            clearInterval(intv)
        })
    })

return count
}