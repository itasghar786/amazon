import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";


function Checkout() {

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2019/PRIME_WARDROBE/WINTER_3/ILM/DT_ILM_1x._CB454119460_.jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">
                        Your shopping basket </h2>

                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />


            </div>
        </div>
    );
}


export default Checkout;
