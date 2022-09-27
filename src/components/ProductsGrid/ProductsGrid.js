import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const ProductsGrid = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        getApiData();
    }, [])

    const getApiData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const listOfProducts = await response.json()

        setProducts(listOfProducts);
    } 

    return (
        <div className="products-grid">
            <div className="products-grid_header">
                <div>Product name</div>                    
                <div>
                    <label for="category-select">Category</label>
                    <select id="category-select">
                        <option value=""></option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                </div>                    
            </div>
            <div className="products-grid_body" id="products-items-container">
            {products && products.map((product) => {             
                return <Product
                        title={product.title}
                        category={product.category}
                        price={product.price}
                        priceVat={product.price}
                        key={product.id}
                        />     
            })}  
            </div>
        </div>
    );
};

export default ProductsGrid;