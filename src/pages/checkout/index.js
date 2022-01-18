import React, { useContext } from 'react';
import TitlePage from '../../components/UI/Title/TitlePage';
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../services/stripe.service";
import CartContext from "../../context/CartContext";
import ProductCard from '../../components/product/ProductCard/ProductCard';
import style from './Panier.module.scss'


const stripePromise = loadStripe(process.env.PUBLISH_KEY);

const Index = () => {

  const { cart } = useContext(CartContext);

  const handleConfirmation = async () => {
    let total = 0;
    const result = cart.map((item) => total += item.price)
    try {
      const stripe = await stripePromise;
      const response = await stripeService.createSession({
        lamine: "Adel",
        totalPrice: total
      });
      await stripe.redirectToCheckout({
        sessionId: response.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TitlePage title="Panier" />
      <div className={style.container}>
        <div className={style.shop__grid}>
          {
            cart.map((product, i) => (
              <ProductCard product={product} key={product.id + i} />
            ))
          }
        </div>

        <div className={style.container1}>
          <div className={style.center}>
            <button className="btn btn-black" onClick={handleConfirmation}>Payer</button>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Index;