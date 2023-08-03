"use client";
import Avatar from "@/components/Avatar/page";
import { DarkImage, LightImage } from "@/components/Images/page";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
const ItemWrapper = ({
  name,
  darkImgPath,
  imgPath,
  status,
  push,
}: {
  name?: string;
  darkImgPath: string;
  imgPath: string;
  status?: boolean;
  push?: any;
}) => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <button
      onClick={push}
      className={` ${status && "bg-[#b9bcb56b] dark:bg-[#3c3d3b]"
        } w-full pl-5 pr-2 flex items-center justify-between mb-5 h-12 text-black dark:text-white font-['Poppins'] lg:w-full md:min-w-[260px] xs:min-w-[260px] whitespace-nowrap`}
    >
      <div className="flex items-center">
        {theme === "light" && (
          <img src={darkImgPath} className="mr-3" />
        )}
        {theme === "dark" && (

          <img src={imgPath} className="mr-3" />
        )}{" "}
        <span>{name}</span>
      </div>
      {theme === "light" && (
        <img src={DarkImage.darkLeftArrow} className="mr-3" />
      )}
      {theme === "dark" && (
        <img src={LightImage.whiteLeftArrow} />
      )}{" "}
    </button>
  );
};
const SettingSideNavBar = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname();
  const { push } = useRouter();
  console.log("pathname", pathname);

  return (
    <div className="w-[275px] mr-10 lg:w-[275px] md:w-full xs:w-full">
      <div className="bg-white dark:bg-[#232323] pt-4 pb-0 mt-10 rounded-xl lg:block md:flex md:items-center md:overflow-auto xs:flex xs:items-center xs:overflow-auto">
        <ItemWrapper
          name="Add Payment"
          imgPath={LightImage.whiteAddPayment}
          darkImgPath={DarkImage.darkAddPay}
          status={"/settings/payment" === pathname}
          push={() => push("/settings/payment")}
        />
        <ItemWrapper
          name="Payment History"
          imgPath={LightImage.whitePaymentHistory}
          darkImgPath={DarkImage.darkPayment}
          status={"/settings/payment-history" === pathname}
          push={() => push("/settings/payment-history")}
        />
        <ItemWrapper
          name="Changes Languages"
          imgPath={LightImage.whiteLanguage}
          darkImgPath={DarkImage.darkLang}
          status={"/settings/language" === pathname}
          push={() => push("/settings/language")}
        />
        <ItemWrapper
          name="Color Theme"
          imgPath={LightImage.whitecolorTheme}
          darkImgPath={DarkImage.darkTheme}
          status={"/settings/theme" === pathname}
          push={() => push("/settings/theme")}
        />
        <ItemWrapper
          name="Edit Profile"
          imgPath={LightImage.whiteEditProfile}
          darkImgPath={DarkImage.darkProfile}
          status={"/settings/profile" === pathname}
          push={() => push("/settings/profile")}
        />
      </div>
    </div>
  );
};
export default SettingSideNavBar;
