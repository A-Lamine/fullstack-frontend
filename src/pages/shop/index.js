import React from 'react';
import { getProducts } from "../../graphql/queries/products";
import { useQuery } from "@apollo/react-hooks";
import style from "./index.module.scss"
import ProductGrid from '../../components/product/ProductGrid/ProductGrid';

const Index = () => {

    const { loading, error, data } = useQuery(getProducts);
    
    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data);

    return (
        <div className="shop__grid">
            <ProductGrid products={data.getProducts}/>
        </div>
    );
}

export default Index;