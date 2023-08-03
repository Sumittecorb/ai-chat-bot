"use client";

import { useRouter } from "next/navigation";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { deletCookies, getCook } from "../helper/cookies_setup";
import { SESSION_TOKEN } from "../common/constant";
import { profileService } from "../helper/services/profileService";
import { useTheme } from "next-themes";
import useDarkMode from "@/utils/useDarkMode";

const useUserContext = createContext({});
const CheckUser: FC<{
  children: any;
}> = ({ children }) => {
  const [userData, setUserData] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean[]>();
  const [subscriptionAmount, setSubscriptionAmount] = useState(0);
  const [subscriptionType, setType] = useState("");
  const [type, setSubscriptionType] = useState("");
  const [isSubscription, setIsSubscription] = useState(false);

  const router = useRouter();
  let session_token = getCook(SESSION_TOKEN);

  useEffect(() => {
    if (session_token) {
      getProfile(session_token);
    }
  }, [session_token]);
  const getProfile = async (session_token: any) => {
    const res: any = await profileService(session_token);
    if (res.code == 200) {
      let current_date =
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate();
      setUserData(res.data);
      setType(res.data.subscriptionType);
      if (res.data.subscriptionEndDate && new Date(res.data.subscriptionEndDate)< new Date(current_date)) {
        setSubscriptionType("Expire");
        setIsSubscription(false);
      } else {
        setSubscriptionType(res.data.subscriptionType);
        setIsSubscription(res.data.subscription);
      }
    } else if (res.response.data.code == 401) {
      deletCookies(SESSION_TOKEN);
      router.replace("/");
    }
  };

  return (
    <useUserContext.Provider
      value={{
        setUserData,
        userData,
        isLoading,
        setSubscriptionAmount,
        subscriptionType,
        setSubscriptionType,
        subscriptionAmount,
        type,
        setType,
        isSubscription,
        setIsSubscription,
      }}
    >
      {children}
    </useUserContext.Provider>
  );
};
export const UserContext = () => useContext(useUserContext);

export default CheckUser;
