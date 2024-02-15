import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Product({product,onChange, setOnchange}) {
const [insidecart, setInsideCart] = useState(false)
const checkAdd = insidecart ? "btn btn-danger" : "btn btn-success"


  function deleteProduct(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success"
        });
        fetch(`http://localhost:3000/Tshirts/${product.id}`,{
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setOnchange(!onChange)
    })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your product is safe :)",
          icon: "error"
        });
      }
    });
  }

  function handleCart(){
    fetch(`http://localhost:3000/Tshirts/${product.id}`,{
    method: 'PATCH',
    headers: {"Content-Type":"application/json" },
    body: JSON.stringify({
      is_inCart:!insidecart})
  })
  .then(resp => resp.json())
  .then(data =>{
    setOnchange(!onChange)
    setInsideCart(!insidecart)
  })
  if(product.is_inCart === true){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product removed from cart.",
      showConfirmButton: false,
      timer: 1500
    });
  }else if(product.is_inCart === false){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product added to cart.",
      showConfirmButton: false,
      timer: 1500
    });
  }
  
  }

  return (
    <div className=' ui card col-md-3 mb-3 ' key={product.id}>
      <Link to={`viewproduct/${product.id}`}>
         <img src={product.image_url} alt="Loading" className="img-fluid"/>
      </Link>
     
      <div className='card-body'>
      <h5 className="card-title">{product.name}</h5>
       <p className="card-text">{product.description}</p>
       <p className="card-text">Kshs &nbsp;{product.price}</p>
       <div className='d-grid gap-2'>
          <button type="button" className={checkAdd} onClick={() => handleCart()} >{product.is_inCart ? "Remove From Cart" : "Add To Cart"}</button>
          
              
          
          <button type="button" onClick={()=> deleteProduct()} className="btn btn-danger m-1">Delete Item</button>
       </div>
      
      
      </div>
    </div>
  )
}
