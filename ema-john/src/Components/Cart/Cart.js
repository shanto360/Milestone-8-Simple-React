import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   const { price, shipping } = cart;
  //   console.log(cart);

  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  //   const tex = (total * 10) / 100;
  const tex = parseFloat((total * 0.1).toFixed(2));

  const grandTotal = total + shipping + tex;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>selected item: {quantity}</p>
      <p>Total price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tex}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
