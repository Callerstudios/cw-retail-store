import React from "react";

function ProductsStat(props) {
  return (
    <div className="product-stat">
      <div className="top">
        <p>{props.title}</p>
        <hr />
      </div>
      {props.data.map((data)=>
      <div className="products-list">
        <img src={data.imageUrl} alt="product" />
        <span>
          <p>{data.name}</p>
          <p>{data.quantity}</p>
        </span>
      </div>
      )}
    </div>
  );
}

export default ProductsStat;
