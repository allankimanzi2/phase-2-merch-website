import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ViewProductPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [onChange, setOnChange] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/Tshirts/${id}`)
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Failed to fetch product');
        }
        return resp.json();
      })
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id, onChange]);

  return (
    <div id="Viewproductpage" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button type="button" onClick={toggleDarkMode} className="mode-toggle-btn btn btn-primary">
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <div className='container row'>
        <div className='col-md-6'>
          <img src={product.image_url} className='img-fluid' alt="loading" />
        </div>
        <div className='col-md-6'>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>PRICE: KSH &nbsp;{product.price}</p>
          <h3>Reviews</h3>
          <ul>
            {Array.isArray(product.reviews) ? (
              product.reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))
            ) : (
              <li>{product.reviews}</li>
            )}
          </ul>
          <button type="button" className="btn btn-info m-1">
            <Link id='update-link' to={`/products/${product.id}`}>
              Update
            </Link>
          </button>
          <button type="button" className="btn btn-info m-1">
            <Link id='review-link' to={`/reviews/${product.id}`}>
              Review
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
