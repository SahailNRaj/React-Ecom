import React from "react";

const ProductItem = props => {
  const { product } = props;
  return (
    <div className=" column is-half ">
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
              <span className="tag bg-secondary text-white rounded-pill">Rs. {product.price}</span>
            </b>
            <div>{product.shortDesc}</div>

            {product.stock > 0 ? (
              <small>{product.stock + " Available"}</small>
            ) : (
              <small className="has-text-danger">Out Of Stock</small>
            )}
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined bg-warning text-white rounded-2 is-pulled-right rounded-pill"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1
                  })
                }
              >
                Add to Cart
              </button>
              
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
