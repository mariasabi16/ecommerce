import React from 'react'

const Sort = (props) => {
  return (
    
    <div className='flex flex-col'>
        <button className='bg-green-500 hover:bg-violet-700 text-white font-bold py-2 px-4' onClick={e=>props.allProducts()}>
            All Products
        </button>
        <button className='bg-green-500 hover:bg-violet-700 text-white font-bold py-2 px-4' onClick={e=>props.clothes()}>
            Clothes
        </button>
        <button className='bg-green-500 hover:bg-violet-700 text-white font-bold py-2 px-4' onClick={e=>props.toys()}>
            Toys
        </button>
        <button className='bg-green-500 hover:bg-violet-700 text-white font-bold py-2 px-4' onClick={e=>props.electronics()}>
            Electronics
        </button>
    </div>
  )
}

export default Sort