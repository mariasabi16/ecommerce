import React, { useState } from 'react'
import Sort from './Sort'
import Products from './Products'
const Mainbody = () => {
    const products =[{name:'Nike T-shirt',type:'Clothes',price:'$100'},{name:'Baggy Jeans',type:'Clothes',price:'$150'},{name:'Lego',type:'Toys',price:'$500'},{name:'Action Figure',type:'Toys',price:'$300'},{name:'X-Box 360',type:'Electronics',price:'$250'},{name:'Airpod',type:'Electronics',price:'$120'}]
    const [sortedProducts,setSortedProducts] = useState([...products])
    function allProducts(){
        setSortedProducts ([...products])
        console.log(sortedProducts)
    }
    function clothes(){
        setSortedProducts (products.filter((product)=>product.type==='Clothes'))
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
        <Sort allProducts={allProducts}  clothes={clothes} toys={toys} electronics={electronics}/>
        <Products sortedProducts={sortedProducts}/>
    </div>
  )
}

export default Mainbody