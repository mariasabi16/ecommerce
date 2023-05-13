import React, { useState } from 'react'
import Sort from './Sort'
import Products from './Products'
const Mainbody = () => {
    const products =[{name:'Adidas T-shirt',type:'Cloths',price:'$100'},{name:'Denim Jeans',type:'Cloths',price:'$150'},{name:'Lego',type:'Toys',price:'$500'},{name:'Action Figure',type:'Toys',price:'$300'},{name:'X-Box 360',type:'Electronics',price:'$250'},{name:'PS-5',type:'Electronics',price:'$200'}]
    const [sortedProducts,setSortedProducts] = useState([...products])
    function allProducts(){
        setSortedProducts ([...products])
        console.log(sortedProducts)
    }
    function cloths(){
        setSortedProducts (products.filter((product)=>product.type==='Cloths'))
        console.log(sortedProducts)
    }
    function toys(){
        setSortedProducts (products.filter((product)=>product.type==='Toys'))
        console.log(sortedProducts)
    }
    function electronics(){
        setSortedProducts (products.filter((product)=>product.type==='Electronics'))
        console.log(sortedProducts)
    }
  return (
    <div className='flex flex-row'>
        <Sort allProducts={allProducts}  cloths={cloths} toys={toys} electronics={electronics}/>
        <Products sortedProducts={sortedProducts}/>
    </div>
  )
}

export default Mainbody