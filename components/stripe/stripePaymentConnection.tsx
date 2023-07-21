import { loadStripe } from "@stripe/stripe-js";
import { FC } from "react";
import PaymentWithSavedCard from "./checkOutwithSavedCard";
import { ElementsConsumer, Elements } from "@stripe/react-stripe-js";
import { STRIPE_KEY } from "../helper/ApiUrls";
const secret: any =STRIPE_KEY
const stripePromise = loadStripe(secret);
interface StripConnectionProps {
  cards: any;
  setCards: any;
  selectedCard: any;
  setAddCard: any;
  clientSecret: any;
}
const StripPaymentConnection: FC<StripConnectionProps> = ({

  clientSecret,
  selectedCard,
}) => {
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
