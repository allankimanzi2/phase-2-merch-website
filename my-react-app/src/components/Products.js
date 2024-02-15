import React,{useEffect, useState} from 'react'
import Product from './Product'

export default function Products() {
  const [products,setProducts] = useState([])
  const [onChange, setOnchange] = useState(false)

  useEffect(() =>{
    fetch("http://localhost:3000/Tshirts")
    .then(resp => resp.json())
    .then(data =>{
      setProducts(data)
    })
  },[onChange])
  return (
    
    <div className='container ms-5' >
       <h2 className="text-center mt-5">Top Selling Products</h2>
       {products.length<1 && <p className='alert alert-warning'>Oops! Sorry, there are no products to display at the moment.</p>}
       <hr></hr>
       <div className='container row'>
        {products && products.map((product)=>(
          <Product key={product.id} onChange={onChange} setOnchange={setOnchange} product={product}/>
        ))}
       </div>
    </div>
  )
}
