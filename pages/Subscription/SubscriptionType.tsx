"use client";
import { LeftToRightAnimate } from "@/components/Animation/page";
import Button from "@/components/Button/page";
import { SESSION_TOKEN } from "@/components/common/constant";
import { UserContext } from "@/components/context";
import { getCook } from "@/components/helper/cookies_setup";
import { subscriptionService } from "@/components/helper/services/subscriptionService";
import { useRouter } from "next/navigation";
import React, { FC, Fragment, useContext, useState } from "react";

const SubscriptionType = () => {
  const subscriptionDataType = [
    { id: 1, value: "OneDay", label: "Day", price: "80.00" },
    { id: 2, value: "Weekly", label: "Weekly", price: "500.00" },
    { id: 3, value: "Monthly", label: "Monthly", price: "1500.00" },
    { id: 4, value: "Yearly", label: "Yearly", price: "4200.00" },
  ];
  const [selected_id, setId] = useState(0);
  const contextMode: any = UserContext();
  let session_token = getCook(SESSION_TOKEN);
  const router = useRouter();
  const subscription = (type: any) => {
    setId(type.id);
    contextMode.setSubscriptionAmount(type.price);
    contextMode.setType(type.value);
  };
  const handleClick = async () => {
    if (session_token) {
      if (contextMode.subscriptionType) {
        router.push("/payment");
      }
    } else {
      router.push("/login");
    }
  };
  return (
    <LeftToRightAnimate>
      <div className="mt-5 flex items-center justify-start flex-wrap font-['Poppins']">
        {subscriptionDataType.map((type) => {
          return (
            <div
              onClick={(e) => {
                contextMode.isSubscription
                  ? e.preventDefault()
                  : subscription(type);
              }}
              className="mt-3 w-[116px] xxxs:w-[45%] font-['Poppins'] mr-3 rounded-xl p-[0.1rem] text-black dark:text-white bg-gradient-to-b from-[#ffffff] to-black dark:bg-black dark:border-1 dark:border-black"
            >
              <div
                className={`bg-white dark:bg-black dark:border-1 dark:border-black rounded-xl p-3 cursor-pointer ${(type.id == selected_id || contextMode.type == type.value) &&
                  "bg-gradient-to-b from-[#03ccc9] to-[#96f80d]"
                  }`}
              >
                {contextMode.type == type.value && (
                  <h5 className="text-[8px] text-center bg-[#DC2626] p-[2px] relative bottom-[12px] rounded-b-[5px] text-white">
                    Current Subscription
                  </h5>
                )}{" "}
                <p className="pl-4 mb-1 uppercase">{type.label}</p>
                <h3 className="flex">
                  <div className="bg-whiterupee dark:bg-blackrupee bg-no-repeat bg-center w-5"></div>
                  {type.price}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-start mt-5 xxxs:flex-wrap">
        <div className="border border-black dark:border-white pb-1 rounded-xl mr-5 mt-3 xxxs:w-full xxxs:mr-0">
          <Button
            className={
              "bg-black dark:bg-white flex items-center justify-center text-white dark:text-black border border-white w-48 p-3 rounded-tl-lg rounded-tr-lg rounded-xl xxs:w-40 xxxs:w-full dark:m-[-1px] dark:border-1 dark:border-black"
            }
            disabled={session_token && contextMode.isSubscription}
            text="Buy Now"
            onClick={() => {
              handleClick();
            }}
          />
        </div>
      </div>
    </LeftToRightAnimate>
  );
};
export default SubscriptionType;
