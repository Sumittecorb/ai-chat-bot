"use client";
import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";
import { LightImage } from "@/components/Images/page";
import { Routes } from "@/components/Routes";
import { SESSION_TOKEN } from "@/components/common/constant";
import { deletCookies } from "@/components/helper/cookies_setup";
import { logoutService } from "@/components/helper/services/authServices";
import DashboardHeading from "@/pages/Dashboard/Heading";
import { useState } from "react";

const Logout = () => {
  const [isLoading, setLoading] = useState(false);
  const onSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    let loginRes: any = await logoutService();
    if (loginRes.code == 200) {
      deletCookies(SESSION_TOKEN, loginRes.data.token);
      window.location.href = Routes.home.href;
      setLoading(false);
    }
  };
  return (
    <DashboardHeading heading="Logout">
      <div className="bg-white dark:bg-logoutBg dark:border-2 dark:border-logoutBg text-black px-5 py-5 mt-20 w-96 xss:w-full m-auto rounded-2xl">
        <div className="flex items-center justify-center">
          <Avatar path={LightImage.whiteLoginIcon} className="w-24" />
        </div>
        <h1 className="text-2xl leading-7 text-center font-['Poppins'] xss:text-xl">
          Are you sure,
          <br /> you want to logout
        </h1>
        <div className="flex items-center justify-center xxxs:justify-center">
          <div className="border border-black dark:border-btnBorder pb-1 rounded-xl mr-5 mt-3 xxxs:w-24">
            <Button
              className={
                "bg-black dark:bg-white flex items-center justify-center text-white dark:text-black border border-btnBorder w-36 p-3 rounded-tl-lg rounded-tr-lg rounded-xl xxs:w-36 xxxs:w-24 dark:m-[-1px] dark:border-1 dark:border-black"
              }
              text="CANCEL"
            />
          </div>
          <div className="border border-black dark:border-btnBorder pb-1 rounded-xl mt-3 xxxs:w-24">
            <Button
              className={
                "bg-white dark:bg-black flex items-center justify-center text-black dark:text-white border border-btnBorder w-36 p-3 rounded-tl-lg rounded-tr-lg rounded-xl xxs:w-36 xxxs:w-24 dark:m-[-1px] dark:border-1 dark:border-black"
              }
              text="LOG OUT"
              onClick={onSubmit}
              isLoading={isLoading}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </DashboardHeading>
  );
};
export default Logout;
