"use client";

import { useRouter } from "next/navigation";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { deletCookies, getCook } from "../helper/cookies_setup";
import { SESSION_TOKEN } from "../common/constant";
import { profileService } from "../helper/services/profileService";

const useUserContext = createContext({});
const CheckUser: FC<{
  children: any;
}> = ({ children }) => {
  const [userData, setUserData] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean[]>();
  const [subscriptionAmount, setSubscriptionAmount] = useState(0);
  const [subscriptionType, setType] = useState("");

  const [type, setSubscriptionType] = useState(0);

  const router = useRouter();
  let session_token = getCook(SESSION_TOKEN);

  useEffect(() => {
    if (session_token) {
      getProfile();
    }
  }, [session_token]);
  const getProfile = async () => {
    const res: any = await profileService(session_token);
    if (res.code == 200) {
      setUserData(res.data);
      setSubscriptionType(res.data.subscriptionType);
      setType(res.data.subscriptionType);
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
      }}
    >
      {children}
    </useUserContext.Provider>
  );
};
export const UserContext = () => useContext(useUserContext);

export default CheckUser;
