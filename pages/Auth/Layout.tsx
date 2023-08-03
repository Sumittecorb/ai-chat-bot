import Avatar from "@/components/Avatar/page";
import { DarkImage, LightImage } from "@/components/Images/page";
import { useTheme } from "next-themes";
import React from "react";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <section className="bg-light-lightBackground dark:bg-gradient-to-tr from-gradientLeft to-gradientRight h-full w-full min-h-screen">
      <div className="grid grid-cols-5 gap-4 mobile:grid-cols-1 mobile:gap-0">
        <div className="col-span-2 mobile:col-span-5 mobile:h-96 xxs:h-60">
        <Avatar path={(theme === "light" ? DarkImage.darkAuth : LightImage.whiteAuth)}
          className="h-full w-full object-none mobile:object-none xxs:object-cover" />
        </div>
        <div className="col-span-3 px-40 xl:px-40 lg:px-20 md:px-16 mobile:px-5 mobile:py-5">
          <h1 className="text-black dark:text-white text-2xl mt-24 mb-4 mobile:mt-5 leading-8 font-['Poppins'] font-medium tablet:text-lg mobile:text-xl xxxs:text-sm xxxs:leading-5">
            Please enter your mobile number to <br /> login into your account
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
};
export default AuthLayout;
