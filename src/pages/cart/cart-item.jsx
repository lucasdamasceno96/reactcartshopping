import React, { useContext } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { ShopContext } from "../../context/Shop-context";
export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p> {productName} </p>
        <p> ${price} </p>
        <div className="countHandler">
          <button className="btnMinus" onClick={() => removeFromCart(id)}>
            <AiOutlineMinusCircle className="minusBtn" />
          </button>
          <input value={cartItems[id]} />
          <button onClick={() => addToCart(id)}>
            <AiOutlinePlusCircle className="plusBtn" />
          </button>
        </div>
      </div>
    </div>
  );
};
