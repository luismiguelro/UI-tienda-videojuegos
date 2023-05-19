import React from 'react'

const Card = (props) => {
  // lo que se recibe
  const{img,title,category,price}=props;
  return (
    <div className='bg-[#362c29]/50 p-6 rounded-2xl flex flex-col gap-2 lg:w-auto'>
        <img className='w-52 h-52 object-cover rounded-2xl' src={img} alt={title} />
        <h1 className='text-xl text-white font-bold'>{title}</h1>
        <span className='text-gray-400 font-bold'>{category}</span>
        <div className='flex items-center gap-4'>
            <h5 className='text-3xl text-[#E58D27]'>${price}</h5>
            <button  className='bg-[#E58D27] text-black font-bold rounded-full w-full p-3 hover:bg-[#985d19] hover:-translate-y-1 transition-all duration-200'> Buy
            </button>
        </div>
    </div>
  )
}

export default Card