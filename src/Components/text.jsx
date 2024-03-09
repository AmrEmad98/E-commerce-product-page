import React from 'react'
import Cart from './Cart'

export default function Text() {
  return (
    <div className='p-10 w-96 text-left'>
        <p className='text-orange-500'>SNEAKER COMPANY</p>
        <h2 className='text-2xl text-balanced'><strong>FALL LIMITED EDITION SNEAKERS</strong></h2>
        <p className='font-extralight text-sm'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rupper outer sole. They'll withstand everything the weather can offer.</p>
        <div className='flex gap-2 h-8 w-16'>
            <h2 className='text-2xl'><strong>$125.00</strong></h2>
            <h3 className='text-orange-500 bg-orange-200 pt-1 justify-between flex'>50%</h3>
        </div>
        <p className='font-extralight'><strike>$250</strike></p>
        <Cart />
    </div>
  )
}
