'use client'
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button/page";
import { UserContext } from "../context";
import { subscriptionService } from "../helper/services/subscriptionService";
import { SESSION_TOKEN } from "../common/constant";
import { getCook } from "../helper/cookies_setup";

interface CheckoutFormProps {
  isLoading?: boolean;
  stripe: any;
  elements: any;
  isSecretKey: any;
  setIsLoading?: any;
  selectedCard?: any;
}
const PaymentWithSavedCard: FC<CheckoutFormProps> = ({
  stripe,
  elements,
  isSecretKey,
  selectedCard,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const contextMode: any = UserContext();
  const router = useRouter();
  const handleBooking = async () => {
    let session_token = getCook(SESSION_TOKEN);
    setIsLoading(true);
    if (isSecretKey) {
      const paymentRes = await stripe.confirmCardPayment(`${isSecretKey}`, {
        payment_method: `${selectedCard}`,
        return_url: "https://aichatbot-web.vercel.app/subscription",
      });
      if (paymentRes.paymentIntent?.status === "succeeded") {
        setIsLoading(false);
        const response = await subscriptionService(
          {
            subscriptionType: contextMode.subscriptionType,
            amount: contextMode.subscriptionAmount,
            cardType: "Debit",
            paymentStatus: paymentRes.paymentIntent?.status,
            paymentId: paymentRes.paymentIntent.id,
          },
          session_token
        );
        if (response.code == 200) {
          window.location.href="/subscription";
        }
      }
    }
  };
  return (
    <>
      <form action="/api/checkout_sessions" method="POST">
        <div className="stripe">
          {selectedCard && (
            <div className="mt-5 border border-black dark:border-white pb-1 rounded-xl mt-3 xxxs:w-full">
              <Button
                className={
                  "bg-black dark:bg-white flex items-center justify-center font-bold text-white dark:text-black font-['Poppins'] border border-black dark:border-white w-full p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl dark:m-[-1px] dark:border-1"
                }
                text="PAY NOW"
                onClick={() => {
                  handleBooking();
                }}
                isLoading={isLoading}
                disabled={isLoading}
              />
            </div>
          )}{" "}
        </div>
      </form>
    </>
  );
};

export default PaymentWithSavedCard;
