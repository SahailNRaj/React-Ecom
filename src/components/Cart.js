import React, { Fragment } from "react";
import withContext from "../withContext";
import CartItem from "./CartItem";

const Cart = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
    <Fragment>
      <div className="hero bg-info">
        <div className="hero-body container">
          <h4 className="title text-white">My Cart</h4>
        </div>
      </div>
      <br />
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline">
            {cartKeys.map(key => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
              <button
                  className="button is-success rounded-pill"
                  onClick={props.context.checkout}
                >
                  Checkout
                </button>{"  "}
                <button
                  onClick={props.context.clearCart}
                  className="button is-danger rounded-pill"
                >
                  Clear cart
                </button>
              
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title text-success">Hey there add something to your cart!</div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default withContext(Cart);
