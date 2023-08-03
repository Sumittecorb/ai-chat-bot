'use client'

import Avatar from "@/components/Avatar/page";
import { DarkImage, LightImage } from "@/components/Images/page";
import { useTheme } from "next-themes";
import React from "react";

const DashboardHeading = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) => {

  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <section>
      <div className="flex items-center justify-between mobileView:mt-5 ">
        <h1 className=" text-black dark:text-white  text-3xl xs:text-3xl xss:text-xl font-['Poppins'] font-semibold xl:leading-tight lg:leading-tight md:leading-tight sm:leading-tight leading-tight">
          {heading}
        </h1>
        <Avatar path={(theme === "light" ? DarkImage.darkNoti : LightImage.whiteNoti)}
          className="w-12 xss:w-9" />
      </div>
      {children}
    </section>
  );
};
export default DashboardHeading;
