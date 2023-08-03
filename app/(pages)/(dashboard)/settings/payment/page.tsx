"use client";

import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";
import { ImagePath } from "@/components/Images/page";
import Input from "@/components/Input/page";
import StripConnection from "@/components/stripe";
import CardList from "@/pages/Dashboard/Setting/paymentMethod/cardList";
import { useState } from "react";

const Payment = () => {
  const [isAdded, selected] = useState(false);
  const [cardList, setList] = useState([]);
  const [cardMode, setMode] = useState("");

  const handleNewCard = () => {
    selected(true);
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

          <CardList cardList={cardList} setList={setList} />
          <div className="my-10 flex items-center justify-center">
            {!isAdded && (
              <a
                href="#"
                className="text black dark:text-white"
                onClick={() => handleNewCard()}
              >
                + Add New Card
              </a>
            )}{" "}
            {isAdded && (
              <div className="bg-white dark:bg-themeBg px-5 py-5 mt-10 w-[90%] xl:w-[90%] lg:w-[90%] md:w-full mobileView:w-full rounded-2xl">
                <h1 className="text-black dark:text-white font-['Poppins'] text-xl xs:text-xl xss:text-md mb-5">
                  Add Payment
                </h1>
                <StripConnection
                  cards={cardList}
                  setMode={setMode}
                  setCards={setList}
                  setAddCard={selected}
                  cardMode={cardMode}

                />
              </div>
            )}
          </div>
          {/* <div className="mt-5 border border-black dark:border-white pb-1 rounded-xl mt-3 xxxs:w-full">
            <Button
              className={
                "bg-black dark:bg-white flex items-center justify-center font-bold text-white dark:text-black font-['Poppins'] border border-black dark:border-white w-full p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl dark:m-[-1px] dark:border-1"
              }
              text="PAY NOW"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Payment;
