import React from 'react';

const ProductCard = ({ product }) => (
    <div>
        <div class="col-4">
            <div class="card">
                {/* <img src="assets/image/${product.img}" class="card-img-top cart-img" alt="..." style="height: 18rem"/> */}
                <div class="card-body" id="cart">
                    <h5 class="card-title">{product.name}</h5>
                    <h3 class="card-price">{product.price}</h3>
                    <p class="card-text">{product.dis}</p>
                    <p class="card-text d-none">{product.qty}</p>
                    <a href="#" class="btn btn-primary add-btn" >Add</a>
                </div>
            </div>
        </div>
    </div>
);

const ProductList = ({ products }) => (
    <div>
        {products.map((product, index) => (
            <ProductCard key={index} product={product} />
        ))}
    </div>
);

const CardCart = () => {
    const products = [
        { id: 1, name: 'Product 1', dis: 'Description 1', price: 19.99 },
        { id: 2, name: 'Product 2', dis: 'Description 2', price: 29.99 },
        { id: 3, name: 'Product 3', dis: 'Description 3', price: 39.99 },
    ];

    return (
        <div>
            <div className="container d-flex align-items-center justify-content-between ">
            <h1>Product List</h1>
                <ProductList products={products} />
            </div>

        </div>
    );
};

export default CardCart;
