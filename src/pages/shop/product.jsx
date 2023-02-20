import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b> {productName} </b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemsAmount > 0 && <div> ({cartItemsAmount}) </div>}
      </button>
    </div>
  );
};
