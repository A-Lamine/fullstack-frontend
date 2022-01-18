import React from "react";
//import styles from "./Product.module.scss";

const Productcart = (props) => {
    return (
        <div className="product_card">
            {props.title}
            {props.price}
            {props.id}

            {props.onChange}



        </div>
    );
};

export default Productcart;