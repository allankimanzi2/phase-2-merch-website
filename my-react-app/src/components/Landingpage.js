import React from 'react'
import images from '../images/fall-band-t-shirts-4-.jpg'

export default function Landingpage() {
  return (
    <div>
      <div>
        <h1 className="text-center">WELCOME TO BANDWAGON!</h1>
        <h2 className="text-center">YOUR NUMBER ONE STORE FOR THE LATEST BAND TEES & MERCH</h2>
    </div>
    <div className="card text-bg-dark" >
        <img src={images} className="card-img" alt="Loading Banner"/>
    </div>
    </div>
  )
}