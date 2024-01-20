import React, { useState, useEffect } from 'react';
import './cart.css';
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import OrderPlaced from './OrderPlaced';

const Cart = () => {
  const [cartArray, setCartArray] = useState([]);
  const [TotalRate, setTotalRate] = useState(0);
  const [TotalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('mycart')) || [];
    setCartArray(storedCart);
  
    let initialTotalRate = 0;
    let initialTotalQuantity = 0;
  
    storedCart.forEach((item) => {
      initialTotalRate += item.Total || 0; // Ensure item.Total is defined
      initialTotalQuantity += item.quantity || 0; // Ensure item.quantity is defined
    });
  
    setTotalRate(initialTotalRate);
    setTotalQuantity(initialTotalQuantity);
  }, []);
  

  const updateQuantity = (id, value) => {
    const updatedCart = cartArray.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + value;

        if (newQuantity > 0) {
          item.quantity = newQuantity;
          item.Total = item.quantity * item.price;
        } 
        else {
          return null;
        }
      }
      return item;
    });

    const filteredCart = updatedCart.filter((item) => item !== null);
    let updatedTotalRate = 0;
    let updatedTotalQuantity = 0;
    
    filteredCart.forEach((item) => {
      updatedTotalRate += item.Total;
      updatedTotalQuantity += item.quantity;
    });

    setCartArray(filteredCart);
    localStorage.setItem('mycart', JSON.stringify(filteredCart));
    setTotalRate(updatedTotalRate);
    setTotalQuantity(updatedTotalQuantity);
  };

  const ItemCard =({ item })=>{
    const [count, setCount] = useState(item.quantity);

    const handleIncrement = ()=> {
      setCount(count + 1);
      updateQuantity(item.id, 1);
    };

    const handleDecrement = ()=> {
      if (count > 0) {
        setCount(count - 1);
        updateQuantity(item.id, -1);
      }
    };

    return (
      <div className='cart-product'>
        <div className='cart-image'>
          <img src={item.image} alt='not found' />
        </div>
        <div className='cart-details'>
          <div className='quantity-display'>
            <button className='up' onClick={handleIncrement}><GoTriangleUp className='icon'/></button>
            <h1 className='quantity' id='quantity'>{count}</h1>
            <button className='up' onClick={handleDecrement}><GoTriangleDown className='icon'/></button>
          </div>
          <div className='amount-box'>
            <h1 className='amount' id='amount'>{item.Total}</h1>
          </div>
        </div>
      </div>
    );
  };

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
  };

  return (
    <div>
      {!isOrderPlaced ? (
        <div>
          <div className='Main-Cart'>
            {cartArray.length === 0 ? (
              <p className='empty-cart-message'>Nothing in cart - Add some items</p>
            ) : (
              <div className='display-cart' id='display-cart'>
                {cartArray.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
          {cartArray.length > 0 && (
            <div className='place-order'>
              <div className='Main-Order'>
                <h3>Total Price: {TotalRate}</h3>
                <h3>Total Quantity: {TotalQuantity}</h3>
                <button className='Order-btn' onClick={handlePlaceOrder}>Place Order</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <OrderPlaced TotalQuantity={TotalQuantity} totalRate={TotalRate} />
      )}
    </div>
  );
};

export default Cart;
