import React from 'react';

const Product = ({title, category, price, priceVat}) => { 
    return (
        <div className="product_item">
            <span className="product_name">${title}</span>
            <span className="product_category">${category}</span>                        
            <span className="product_price">${price}</span>
            <span className="product_price-vat product_price">${priceVat = (price * 0.2) + price}</span>
        </div>
    );
};

export default Product;