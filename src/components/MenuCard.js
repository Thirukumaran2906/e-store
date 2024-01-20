import React from 'react';
import "./menuCard.css";

const MenuCard = ({ item, itrArray }) => {

  const addToCart = (index, itr) => {
    let cartArray = JSON.parse(localStorage.getItem('mycart')) || [];
    const indexVal = Number(index);
    let itemExists = false;
    if (cartArray.length >= 1) {
      for (let i = 0; i < cartArray.length; i++)
      {
        if (cartArray[i].id === indexVal) {
          cartArray[i].Total += cartArray[i].price;
          cartArray[i].quantity++;
          itemExists = true;
          break;
        }
      }
    }
    if (!itemExists)
    {
      const newItem = itr.find((item) => item.id === indexVal);
      if(newItem){
        cartArray.push({ ...newItem, quantity: 1, Total: newItem.price });
      }
    }
    localStorage.setItem('mycart', JSON.stringify(cartArray));
    console.log(cartArray);
  };
  return (
    <div className="outer">
      <div className="imgbox">
        <img src={item.image} alt="img Not available" />
      </div>
      <div className="con">
        <h1>{item.name}</h1>
        <h3>Price: {item.price}</h3>
        <button className="cart-btn-add" onClick={() => addToCart(item.id, itrArray)}>Add</button>
      </div>
    </div>
  );
};

export default MenuCard;
