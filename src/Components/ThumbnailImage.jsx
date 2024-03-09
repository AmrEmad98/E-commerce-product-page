import React, { useState } from 'react'

const images = ["./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg"];
  
export default function ThumbnailImage({source,style,handleClick}) {

  return (
    <img onClick={()=>handleClick(source)} src={source} alt="shoes" className={style} />
    )
}
