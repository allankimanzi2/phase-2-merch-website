import React, { useEffect, useState } from 'react';

export default function ViewCart() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [products, setProducts] = useState([]);
  const [onChange, setOnChange] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/Tshirts")
      .then(resp => resp.json())
      .then(data => {
        const filteredProducts = data.filter((product) => product.is_inCart === true);
        setProducts(filteredProducts);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [onChange]);

  let totalPrice = products.reduce((acc, obj) => acc + Number(obj.price), 0);
  let VAT = Number(0.25) * totalPrice;
  let taxedPrice = VAT + totalPrice;

  return (
    <div id="ViewCart" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button type="button" onClick={toggleDarkMode} className="mode-toggle-btn btn btn-primary">
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <div className='container ms-5'>
        <h2 className="text-center mt-5">Your Cart</h2>
        {products.length > 0 ? (
          <>
            <hr />
            <div className='container row'>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>
                        <h3>{product.name}</h3>
                        <img className='img-fluid' src={product.image_url} alt='loading image' width={150} />
                      </td>
                      <td>KShs &nbsp;{product.price}</td>
                      <td>1</td>
                      <td>Kshs &nbsp;{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className='alert alert-warning'>Your cart is empty.</p>
        )}
        <div className="card" width={18}>
          <div className="card-header">
            Your Total
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Sub-total: KSh {totalPrice}</li>
            <li className="list-group-item">VAT = 16% </li>
            <li className="list-group-item">Total Price= Kshs {taxedPrice}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
