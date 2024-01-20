import React from 'react';
import './PastOrders.css';

const PastOrders = () => {
  const pastOrders = JSON.parse(localStorage.getItem('pastOrders')) || [];
  const filteredOrders = [];

  for (let i = pastOrders.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      filteredOrders.push(pastOrders[i]);
    }
  }

  return (
    <div className="past-orders-container">
      <h2>Past Orders</h2>
      {filteredOrders.length === 0 ? (
        <div className="no-orders-message">
          <p>No past orders available</p>
        </div>
      ) : (
        <ul className='PastList'>
          {filteredOrders.map((order) => (
            <li key={order.id} className="order-item">
              <p>Id:  {order.orderId}</p>
              <p>Date: {order.date}</p>
              <p>Time: {order.time}</p>
              <p>Total Rate: {order.totalRate}</p>
              <p>Total Quantity: {order.totalQuantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PastOrders;
