"use client";

import Avatar from "@/components/Avatar/page";
import LightDarkImage from "@/components/ImageDarkLight/page";
import ThemeToggle from "@/components/ThemeToggle/page";

const ChangeTheme = () => {
  return (
    <>
      <div className="bg-white dark:bg-themeBg px-5 py-5 mt-10 w-[90%] xl:w-[90%] lg:w-[90%] md:w-full mobileView:w-full rounded-2xl">
        <h1 className="text-dark dark:text-white font-['Poppins'] text-xl xs:text-xl xss:text-md mb-5">
          Color Theme
        </h1>
        <ThemeToggle />
      </div>
      {/* <div>
        <Avatar
          path={"/images/checkboxicon.svg"}
          className="block dark:hidden w-10 h-10"
        />
        <Avatar
          path={"/images/greentick.svg"}
          className="hidden dark:block w-10 h-10"
        />
      </div> */}
      {/* <LightDarkImage
        darkclassName="hidden dark:block w-10 h-10"
        lightclassName="block dark:hidden w-10 h-10"
        lightpath={"/images/greentick.svg"}
        darkpath={'/images/checkboxicon.svg'}
      /> */}
    </>
  );
};
export default ChangeTheme;
