import React, {useContext} from 'react';
import { useRouter } from "next/router";
import CartContext from "../../../context/CartContext"; 
import { getProduct } from "../../../graphql/queries/products";
import { useQuery } from "@apollo/react-hooks";
import style from './id.module.scss';
const Index = () => {
    const router = useRouter();
    const { addItem } = useContext(CartContext);
 
        
    

    const { loading, error, data } = useQuery(getProduct, {
        variables: {
            id: router.query.id
        }
    });

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data.getProduct.id);

    return (
        <div className={style.container}>
            <img className={style.img} src={data.getProduct.img}/>
            <h1 className={style.h1}>{data.getProduct.title}</h1>
            <p className={style.p1}> {data.getProduct.description} </p>
            <p className={style.p}>{data.getProduct.price} $ </p>
            <button className="btn btn-black" onClick={()=>addItem(data.getProduct)}>Ajouter au panier</button>
        </div>
        
    );
}

export default Index;