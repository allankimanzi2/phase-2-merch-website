import React,{useState} from 'react'
import Swal from 'sweetalert2'

export default function UpdateProduct({product,onChange, setOnchange }) {
  const [name, setName] = useState()
  const[description, setDescription] = useState()
  const[image_url, setImageUrl] = useState()
  const [price, setPrice] = useState()

  console.log(product)

  function productSubmit(event){
    event.preventDefault()

    fetch(`http://localhost:3000/Tshirts/${product.id}`,{
      method: 'PATCH',
      headers: {"Content-Type":"application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        image_url: image_url,
        price: price,
        is_inCart:false})
    })
    .then(resp => resp.json())
    .then(data => {
      setOnchange(!onChange)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product Updated Successfully!",
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
    setName("")
    setPrice("")
    setDescription("")
    setImageUrl("")
  }
  return (
    <div className='container mt-5'>
      <h3>UPDATE</h3>
      <div>
        <form onSubmit={productSubmit}>
        <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" value={name || product.name} onChange={e=>setName(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" value={description || product.description}  onChange={e=>setDescription(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Image url</label>
                <input type="url" value={image_url || product.image_url}  onChange={e=>setImageUrl(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" value={price || product.price}  onChange={e=>setPrice(e.target.value)} className="form-control" required />
            </div>
            <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  )
}