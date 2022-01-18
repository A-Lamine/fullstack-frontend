import React from "react";
import Link from "next/link";

import style from "./ProductCard.module.scss"

const ProductCard = (props) => {
  
  return (
    <div className={style.product__card}>
      <Link href={`/shop/${props.product.id}`}>
        <a>
          <img className={style.img} src={props.product.img}/>
          <h1 className={style.h1}>{props.product.title}</h1>
          <p className={style.p}>{props.product.type}</p>
          <p className={style.p}>
            {props.product.price} $
          </p>
          </a>
      </Link>

    </div>
  );
};

export default ProductCard;
