import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import "./cart.css";

import { ShopContext } from "../../context/Shop-context";
export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: ${totalAmount} </p>
        <button>Continue Shopping </button>
        <button>Checkout</button>
      </div>
    </div>
  );
};
