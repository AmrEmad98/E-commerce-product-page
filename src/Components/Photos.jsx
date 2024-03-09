import React, { useState } from 'react'
import ThumbnailImage from './ThumbnailImage'

  

const Photos = ()=> {
    const img = ["./images/image-product-1-thumbnail.jpg",
                 "./images/image-product-2-thumbnail.jpg",
                 "./images/image-product-3-thumbnail.jpg",
                 "./images/image-product-4-thumbnail.jpg"]

    const [selectedImage, setSelectedImage] = useState("./images/image-product-1.jpg");

    const handleClick = (image) => {
    // Update the state to the clicked image
    console.log(image)
    setSelectedImage(image);
    };

    return(
        <div>
        <img className='p-2 h-64 w-72 rounded-3xl' src={selectedImage} alt="shoes" />
        <div className='w-72 flex'>
            {img.map((img,i)=><ThumbnailImage handleClick={handleClick} source={img} style={"w-[25%] h-[25%] p-2 rounded-2xl cursor-pointer"} />)}
        </div>
        </div>
    )
}
export default Photos