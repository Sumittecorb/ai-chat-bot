"use client";

import Button from "@/components/Button/page";
import { SESSION_TOKEN } from "@/components/common/constant";
import { UserContext } from "@/components/context";
import { getCook } from "@/components/helper/cookies_setup";
import { paymentListService } from "@/components/helper/services/paymentService";
import { SkeletonPaymentCard } from "@/components/skeltonCard/paymentHistoryCard";
import { useEffect, useState } from "react";

const PaymentHistory = () => {
  const [isLoading, setLoading] = useState(true);
  const [Payment_history, setPaymentHistory] = useState([]);

  let skeletonCards = Array(1).fill(0);
  const session_token = getCook(SESSION_TOKEN);
  let userData: any = UserContext();

  useEffect(() => {
    let customerId = userData?.userData?.stripeId;
    paymentHistory(customerId);
  }, [userData]);

  const paymentHistory = async (customerId: string) => {
    const response = await paymentListService(customerId, session_token);
    if (response.code == 200) {
      setLoading(false);
      setPaymentHistory(response.data);
    }
  };
  return (
    <>
      {isLoading ? (
        skeletonCards.map((index: number) => (
          <SkeletonPaymentCard key={index} />
        ))
      ) : (
        <div className="bg-white dark:bg-themeBg px-5 py-5 mt-10 w-[90%] xl:w-[90%] lg:w-[90%] md:w-full mobileView:w-full rounded-2xl">
          <h1 className="text-black dark:text-white font-['Poppins'] text-xl xs:text-xl xss:text-md mb-5">
            Payment History
          </h1>
          <div className="py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal whitespace-nowrap">
                <thead className="bg-lightBorder dark:bg-inputbg">
                  <tr>
                    <th className="px-5 py-3 text-left text-md font-semibold text-black dark:text-white  tracking-wider">
                      Invoice Id
                    </th>
                    <th className="px-5 py-3 text-left text-md font-semibold text-black dark:text-white tracking-wider">
                      Amount
                    </th>
                    <th className="px-5 py-3 text-left text-md font-semibold text-black dark:text-white tracking-wider">
                      Mode
                    </th>
                    <th className="px-5 py-3 text-left text-md font-semibold text-black dark:text-white tracking-wider">
                      Date
                    </th>
                    <th className="px-5 py-3 text-left text-md font-semibold text-black dark:text-white tracking-wider">
                      Sub.. Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Payment_history.map((data, index) => {
                    let { paymentId, amount, cardType, subscriptionType, subscriptionStartDate } = data;
                    return (
                      <tr>
                        <td className="px-5 py-5 text-md text-black dark:text-white ">
                          #{paymentId}
                        </td>
                        <td className="px-5 py-5 text-md text-black dark:text-white ">
                          {amount}
                        </td>
                        <td className="px-5 py-5 text-md text-black dark:text-white ">
                          {cardType}
                        </td>
                        <td className="px-5 py-5 text-md text-black dark:text-white ">
                          {subscriptionStartDate}
                        </td>
                        <td className="px-5 py-5 text-md text-black dark:text-white ">
                          {subscriptionType}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <Button
              className={
                "bg-inputbg flex items-center justify-center w-28 px-5 py-2 font-bold dark:bg-white text-white dark:text-black font-['Poppins'] border border-white dark:border-1 dark:border-inputbg"
              }
              text="More"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default PaymentHistory;
