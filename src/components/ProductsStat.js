import React from "react";

function ProductsStat(props) {
  return (
    <div className="product-stat">
      <div className="top">
        <p>{props.title}</p>
        <hr />
      </div>
      <div className="products-list">
        <img src="" alt="product" />
        <span>
          <p>{props.name}</p>
          <p>{props.quantity}</p>
        </span>
      </div>
    </div>
  );
}

export default ProductsStat;
