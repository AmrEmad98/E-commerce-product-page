import React from 'react';


const Navbar = () => {
    const links = [
        "Collection",
        "Men",
        "Women",
        "About",
        "Contact"
    ]
    return(
        <div className="flex justify-between top-0 w-[100vw] fixed left-0 px-6">
            <div className='left-0'>
                <h2 className='black text-3xl font-semibold text-blue-950'>Sneakers</h2>
            </div>
            <div className='flex justify-between'>
                {links.map((link)=><a className='p-2 text-black hover:border-2 hover:border-transparent hover:border-b-orange-500 ' style={{cursor: 'pointer'}}>{link}</a>)}
            </div>
            <div className='pt-3 flex'>
                <svg width="22" height="20" style= {{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                <img
                    className='h-7 w-10 pl-3'
                    src=".\images\image-avatar.png"
                    alt="avatar"
                    style={{ cursor: 'pointer' }}/>
            </div>
        </div>
    )
}
export default Navbar;