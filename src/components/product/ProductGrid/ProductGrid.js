import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import style from './ProductGrid.module.scss'
const ProductGrid = (props) => {
    return (
        <div className={style.container}>
            <div className={style.shop__grid}>
                {
                    props.products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default ProductGrid;
