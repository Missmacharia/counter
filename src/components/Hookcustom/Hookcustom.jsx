import React, { useState } from 'react'
import { useEffect } from 'react'

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
