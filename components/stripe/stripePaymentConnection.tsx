'use client'
import { loadStripe } from "@stripe/stripe-js";
import { FC, useContext } from "react";
import PaymentWithSavedCard from "./checkOutwithSavedCard";
import { ElementsConsumer, Elements } from "@stripe/react-stripe-js";
import { UserContext } from "../context";
const secret: any =
  "pk_test_51NNrKrSFPGceK1Mz303vBJkaxMgq3LGX6p2fbRo0PnycSIoiUsSgVwjTCBGJFY4BJrzH6YfKZev0mz3J1U8DgrhB00v55q5jkZ";

const stripePromise = loadStripe(secret);
interface StripConnectionProps {
  cards: any;
  setCards: any;
  selectedCard: any;
  setAddCard: any;
  clientSecret: any;
}
const StripPaymentConnection: FC<StripConnectionProps> = ({
  cards,
  setAddCard,
  clientSecret,
  selectedCard,
}) => {
  const contextMode: any = UserContext();
  let customerId = contextMode;
  console.log(clientSecret)
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <ElementsConsumer>
        {({ elements, stripe }) => (
          <PaymentWithSavedCard
            elements={elements}
            stripe={stripe}
            isSecretKey={clientSecret}
            selectedCard={selectedCard}
          />
        )}
      </ElementsConsumer>
    </Elements>
  );
};

export default StripPaymentConnection;
