import React from 'react'

const Products = ({sortedProducts}) => {
  return (
    <div className='flex flex-row gap-3 space-x-3 text-xl'>
        {sortedProducts.map((product)=>(
            <div className='flex flex-col w-64 p-2 m-2 text-white bg-blue-900'>
                <div>
                {
                    product.name
                }
                </div>
                <div>
                {
                    product.price
                }
                </div>
            </div>
        )
        )
        }
    </div>
  )
}

export default Products