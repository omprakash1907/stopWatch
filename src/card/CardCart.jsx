import React from 'react'
import img1 from './assets/images/whisky-jack-daniels-no7-tennessee-whiskey-1000ml-original-D_NQ_NP_727521-MLB20808519053_072016-F.jpg'
import img2 from './assets/images/rum-old-monk2.jpg'
import img3 from './assets/images/photo-1534221905680-192a9a88ac81.jpg'
import img4 from './assets/images/RoyalChallengeBlendedWhisky_700x.webp'
import './assets/css/card.css'

function CardCart() {
    const product = [
        {
            name: "Jack Daniel’s ",
            price: "$64",
            dis: "Whisky 750ML",
            Image : img1
        },
        {
            name: "Old Monk",
            price: "$21",
            dis: "Rum 750ML",
            Image : img2
        },
        {
            name: "Red Label ",
            price: "$37",
            dis: "Scotch Whisky 750ML",
            Image : img3
        },
        {
            name: "Royal Challenge ",
            price: "$23",
            dis: "Whisky 750ML",
            Image : img4
        }
    ]

    return (
        <div>
            <div className="container position-absolute  translate-middle  top-50 start-50">
                <h1 className='text-center mb-5 title'>Liquore Shop</h1>
                <div className="row">
                    {
                        product && product.map((item) => {
                            return (
                                <div class="col-3">
                                    <div class="card"   style={{width: "15rem"}}>
                                        <img src={item.Image} class="card-img-top cart-img" alt="..." style={{height: "18rem"}}/>
                                            <div class="card-body" id="cart">
                                                <h5 class="card-title fs-3">{item.name}</h5>
                                                <h3 class="card-price">{item.price}</h3>
                                                <p class="card-text">{item.dis}</p>
                                                <a href="#" class="btn bg-black text-white add-btn w-100 " >Add</a>
                                            </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CardCart
