import React from 'react'
import "./Product.css";


function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">

                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <p>star</p>
                </div>
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                alt=""
            />

            <button>Add to Basket</button>



        </div>
    )
}

export default Product;
