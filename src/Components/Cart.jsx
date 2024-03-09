import React, { useState } from 'react'
import CartIcon from './cartIcon'

export default function Cart(Counter) {
    const [counter, setCounter] = useState(0)
    return (
    <div className='flex gap-2'>
        <div className='flex gap-2'>
            <button onClick={()=>{setCounter(counter -1)}} disabled ={counter==0} className='bg-orange-200 text-orange-500'>-</button>
            <p className='pt-2'>{counter}</p>
            <button onClick={()=>setCounter(counter +1)} className='bg-orange-200 text-orange-500'>+</button>
        </div>
        <div><button className='flex bg-orange-600 text-white'
                     onClick={()=>setCounter(0)}
        >
            <CartIcon />
            Add to cart</button></div>
    </div>
  )
}
