import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The lean startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={5}
                    />

                    <Product
                        id="49538097"
                        title="Smart Watch"
                        price={39.99}
                        image="https://www.powerplanetonline.com/cdnassets/smartwatch_nut_i_02_negro_ad_l.jpg"
                        rating={5}
                    />


                </div>

                <div className="home__row">
                    <Product
                        id="49538096"
                        title="Makup"
                        price={49.99}
                        image="https://images.squarespace-cdn.com/content/v1/56a63542ab28105c117b2523/1588255414969-QVANHBKI0TWF8SSZG09D/ke17ZwdGBToddI8pDm48kF5pq4fg5OoXBOdPlxqaVFN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hReLB75oIvKxcDxwlnLXabMojf2uFuMwIGpx4XuSRH7KUyeN4ZMlKXexPjFMosmBw/OFB_EyeShadowPalet_II_ML097_v2.jpg"
                        rating={4}
                    />
                    <Product
                        id="49538096"
                        title="Versache Sunglasses "
                        price={99.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61ONc37GgfL._AC_UL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="49538096"
                        title="Tablet"
                        price={49.99}
                        image="https://img.global.news.samsung.com/global/wp-content/uploads/2017/02/Galaxy-Tab-S3-press-release_main_1.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="49538096"
                        title="Samsung Laptop"
                        price={989.99}
                        image="https://i.gadgets360cdn.com/large/samsung_notebook_9_pen_2019_1544682963605.jpg"
                        rating={4}
                    />
                </div>

            </div>
        </div>


    );
}

export default Home;
