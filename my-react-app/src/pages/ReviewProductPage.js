import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewProduct from '../components/ReviewProduct';

export default function ReviewProductPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [product, setProduct] = useState(null); // Changed from an array to an object or null
  const [onChange, setOnChange] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/Tshirts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id, onChange]);

  return (
    <div id="ReviewProductPage" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button type="button" onClick={toggleDarkMode} className="mode-toggle-btn btn btn-primary">
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <div className='container row'>
        <div className='col-md-6'>
          <img src={product?.image_url} className='img-fluid' alt="Product" /> {/* Added optional chaining */}
        </div>
        <div className='col-md-6'>
          <h1>{product?.name}</h1> {/* Added optional chaining */}
          <p>{product?.description}</p> {/* Added optional chaining */}
          <p>PRICE: KSH &nbsp;{product?.price}</p> {/* Added optional chaining */}
          <h2>Reviews</h2>
          <ul>
            {Array.isArray(product?.reviews) ? (
              product.reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))
            ) : (
              <li>{product?.reviews}</li>
            )}
          </ul>
          <ReviewProduct product={product} onChange={onChange} setOnChange={setOnChange} />
        </div>
      </div>
    </div>
  );
}
