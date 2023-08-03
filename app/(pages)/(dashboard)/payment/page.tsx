"use client";

import Button from "@/components/Button/page";
import { UserContext } from "@/components/context";
import { customerPaymentIntentService } from "@/components/helper/services/paymentService";
import StripConnection from "@/components/stripe";
import StripPaymentConnection from "@/components/stripe/stripePaymentConnection";
import CardList from "@/pages/Dashboard/Setting/paymentMethod/cardList";
import { useEffect, useState } from "react";

const Payment = () => {
  const [isAdded, selected] = useState(false);
  const [cardList, setList] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState("");
  const [clientSecret, setIsSecretKey] = useState("");
  const [cardMode, setMode] = useState("");

  const contextMode: any = UserContext();

  const handleNewCard = () => {
    selected(true);
  };
  useEffect(() => {
    getPaymentIntendId(selectedCardId);
  }, [selectedCardId]);
  const getPaymentIntendId = async (selectedCardId: any) => {
    console.log(selectedCardId);
    const paymentIntent = await customerPaymentIntentService({
      cardAttachedID: selectedCardId,
      amount: contextMode.subscriptionAmount,
    });
    if (paymentIntent.code == 200) {
      setIsSecretKey(paymentIntent.data.client_secret);
    }
  };
  return (
    <>
      <div className="bg-white dark:bg-themeBg px-5 py-5 mt-10 w-[90%] xl:w-[90%] lg:w-[90%] md:w-full mobileView:w-full rounded-2xl">
        <h1 className="text-black dark:text-white font-['Poppins'] text-xl xs:text-xl xss:text-md mb-5">
          Payment Method  
        </h1>
        {/* <p className="text-black dark:text-[#ffffff63] font-['Poppins'] text-sm">Select Card Type</p> */}
        <div className="mt-3 mb-3">
          {/* <div className="text-black dark:text-white font-['Poppins'] inline-flex flex-wrap">
            <label
              htmlFor="debit"
              className="flex items-center cursor-pointer py-2 px-2"
            >
              <input
                type="radio"
                id="debit"
                value="debit"
                className="hidden peer"
              />
              <Avatar
                path={ImagePath.selectRadio}
                className="w-7 hidden peer-checked:block"
              />
              <Avatar
                path={ImagePath.unSelectRadio}
                className="w-7 block peer-checked:hidden"
              />
              <span className="ml-3">Debit Card</span>
            </label>
            <label
              htmlFor="credit"
              className="flex items-center cursor-pointer py-2 px-2"
            >
              <input
                type="radio"
                id="credit"
                value="credit"
                className="hidden peer"
              />
              <Avatar
                path={ImagePath.selectRadio}
                className="w-7 hidden peer-checked:block"
              />
              <Avatar
                path={ImagePath.unSelectRadio}
                className="w-7 block peer-checked:hidden"
              />
              <span className="ml-3">Credit Card</span>
            </label>
          </div> */}
          <CardList
            cardList={cardList}
            setList={setList}
            selectedCardId={selectedCardId}
            setSelectedCardId={setSelectedCardId}
          />
          <div className="my-10">
            {!isAdded && (
              <a
                href="#"
                className="text black dark:text-white block w-100 text-center"
                onClick={() => handleNewCard()}
              >
                + Add New Card
              </a>
            )}{" "}
            {isAdded && (
              <div className="bg-white dark:bg-themeBg px-5 py-5 mt-10 w-[90%] xl:w-[90%] lg:w-[90%] md:w-full mobileView:w-full rounded-2xl">
                <h1 className="text-black dark:text-white font-['Poppins'] text-xl xs:text-xl xss:text-md mb-5">
                  Add Card
                </h1>
                <StripConnection
                  cards={cardList}
                  setMode={setMode}
                  setCards={setList}
                  setAddCard={selected}
                  cardMode={cardMode}
                />
              </div>
            )}{" "}
            {selectedCardId && clientSecret && !isAdded && (
              <StripPaymentConnection
                cards={cardList}
                selectedCard={selectedCardId}
                setCards={setList}
                setAddCard={selected}
                clientSecret={clientSecret}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
