import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderPlaced.css';

const OrderPlaced = (props) => {
  const navigate = useNavigate();
  const [isOrderProcessed, setOrderProcessed] = useState(false);
  const orderId = Math.floor(Math.random() * 10000);

  useEffect(() => {
    if (!isOrderProcessed) {
      localStorage.removeItem('mycart');
      const currentDate = new Date();
      const pastOrders = JSON.parse(localStorage.getItem('pastOrders')) || [];
      const newOrder = {
        orderId: orderId,
        date: currentDate.toLocaleDateString(),
        time: currentDate.toLocaleTimeString(),
        totalRate: props.totalRate,
        totalQuantity: props.TotalQuantity,
      };
      pastOrders.push(newOrder);
      localStorage.setItem('pastOrders', JSON.stringify(pastOrders));

      setOrderProcessed(true);

      const redirectTimeout = setTimeout(() => {
        navigate('/');
      }, 10000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [isOrderProcessed, navigate, orderId, props.totalRate, props.TotalQuantity]);

  return (
    <div className='out'>
      <div className="thanks-container">
        <h1 id="order-Id">{orderId}</h1>
        <h3>We got your order for {props.totalRate} of {props.TotalQuantity} quantity</h3>
        <p>Max Waiting Time: 15 min's</p>
        <p>Thanks for ordering!! Redirecting to the home page</p>
      </div>
    </div>
  );
};

export default OrderPlaced;
