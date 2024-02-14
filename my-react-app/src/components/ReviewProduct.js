import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function ReviewProduct({product,onChange, setOnchange}) {
 
  const [addedReview, setAddedReview] = useState([])

  function reviewProduct(event){
    event.preventDefault()
    
    fetch(`http://localhost:3001/Tshirts/${product.id}`,{
      method: 'PATCH',
      headers: {"Content-Type":"application/json" },
      body: JSON.stringify({
        reviews:addedReview})
    })
    .then(resp => resp.json())
    .then(data => {
      setOnchange(!onChange)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Review Added Successfully!",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'We have an error reaching our servers!',
        
      })
    })
    setAddedReview("")
  }
  

  return (
    <div className='container mt-5'>
      <h3>ADD YOUR REVIEW</h3>
      <div>
        <form onSubmit={reviewProduct}>
        <div className="mb-3">
                <label className="form-label">Your Review</label>
                <input type="text" value={addedReview } onChange={e=>setAddedReview(e.target.value)} className="form-control" required />
            </div>
            <button type="submit" className="btn btn-success">Add Review</button>
        </form>
      </div>
    </div>
  )
}
