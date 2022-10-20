import React from "react";

const CartItem = props => {
  const { cartItem, cartKey } = props;
  const { product, amount } = cartItem;
  return (
    <div className=" column is-half">
      <div className="box shadow-sm p-3 mb-5 bg-body rounded">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={product.image}
                alt="product"
              />
            </figure>
          </div>
          <div className="media-content ">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag text-white bg-secondary rounded-pill">Rs. {product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            <small>{`${amount} in cart`}</small>
          </div>
          <div
            className="media-right"
            onClick={() => props.removeFromCart(cartKey)}
          >
            <span className="delete is-large"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
