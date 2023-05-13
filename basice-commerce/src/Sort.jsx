import React from 'react'

const Sort = (props) => {
  return (
    
    <div className='flex flex-col'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4' onClick={e=>props.allProducts()}>
            All Products
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4' onClick={e=>props.cloths()}>
            Cloths
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4' onClick={e=>props.toys()}>
            Toys
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4' onClick={e=>props.electronics()}>
            Electronics
        </button>
    </div>
  )
}

export default Sort