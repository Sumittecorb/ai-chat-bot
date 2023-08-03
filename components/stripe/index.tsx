'use client'
import { loadStripe } from "@stripe/stripe-js";
import { FC, useContext } from "react";
import CheckoutForm from "./addCard";
import { ElementsConsumer, Elements } from "@stripe/react-stripe-js";
import { UserContext } from "../context";
const secret: any =
  "pk_test_51NNrKrSFPGceK1Mz303vBJkaxMgq3LGX6p2fbRo0PnycSIoiUsSgVwjTCBGJFY4BJrzH6YfKZev0mz3J1U8DgrhB00v55q5jkZ";

const stripePromise = loadStripe(secret);
interface StripConnectionProps {
  cards: any;
  setCards: any;
  setMode: any;
  setAddCard: any;
  cardMode: string;
}
const StripConnection: FC<StripConnectionProps> = ({
  cardMode,
  cards,
  setAddCard,
  setCards,
  setMode,
}) => {
  let userData: any = UserContext();

  let customerId = userData?.userData?.stripeId;
  // console.log(options={{ clientSecret:customerId }})
  return (
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({ elements, stripe }) => (
          <CheckoutForm
            setCards={setCards}
            cards={cards}
            elements={elements}
            stripe={stripe}
            setMode={setMode}
            setAddCard={setAddCard}
            cardMode={cardMode}
            customerId={customerId}
          />
        )}
      </ElementsConsumer>
    </Elements>
  );
};

export default StripConnection;
