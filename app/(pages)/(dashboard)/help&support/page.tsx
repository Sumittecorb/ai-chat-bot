"use client";
import Avatar from "@/components/Avatar/page";
import { DarkImage, LightImage } from "@/components/Images/page";
import DashboardHeading from "@/pages/Dashboard/Heading";
import { useTheme } from "next-themes";

const HelpSupport = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <DashboardHeading heading="Help & Support">
      <div className="bg-white dark:bg-themeBg px-3 py-5 mt-10 w-[80%] xl:w-[60%] lg:w-[90%] md:w-full mobileView:w-full rounded-2xl">
        <div className="flex tablet:flex-wrap mobileView:flex-nowrap xs:flex-wrap xxs:flex-wrap">
          <div className="w-full md:w-1/2 px-3 xss:px-0 mb-6 md:mb-3 tablet:w-full mobileView:w-1/2 xs:w-full">
            <label
              className="block text-black dark:text-quesColor text-xl mobileView:text-lg font-semibold mb-2 font-['Poppins'] "
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center bg-white dark:bg-supportBoxBg border-2 dark:border-none border-borderCol text-black dark:text-white p-3 h-12 rounded-xl">
              <Avatar path={(theme === "light" ? DarkImage.darkMail : LightImage.whiteMailIcon)} className="mr-3 w-7" />
              <p className="font-['Poppins']">rishu4403@gmail.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 xss:px-0 mb-6 md:mb-3 tablet:w-full mobileView:w-1/2 xs:w-full">
            <label
              className="block text-black dark:text-quesColor text-xl mobileView:text-lg font-semibold mb-2 font-['Poppins']"
              htmlFor="email"
            >
              Mobile No.
            </label>
            <div className="flex items-center bg-white dark:bg-supportBoxBg border-2 dark:border-none border-borderCol text-black dark:text-white p-3 h-12 rounded-xl">
              <Avatar path={(theme === "light" ? DarkImage.darkMobile : LightImage.whiteMobile)} className="mr-3 w-7" />
              <p className="font-['Poppins']">+91 7817973741</p>
            </div>
          </div>
        </div>
        <h1 className="text-black dark:text-white font-['Poppins'] text-3xl xs:text-3xl xss:text-xl p-3 xss:p-0  mt-5">
          FAQ
        </h1>
        <div className="p-3 xss:p-0 ">
          <h3 className="block text-black dark:text-quesColor text-xl mobileView:text-lg font-bold mb-2">
            Qus.1
          </h3>
          <div className="bg-white dark:bg-supportBoxBg border-2 dark:border-none border-borderCol p-3 rounded-xl">
            <input type="checkbox" id="agree" className="peer hidden" />
            <label
              htmlFor="agree"
              className=" text-black dark:text-white flex items-center justify-between cursor-pointer"
            >
              <span className="truncate font-['Poppins']">
                There are many variation of
              </span>
              <Avatar path={(theme === "light" ? DarkImage.darkDropdown : LightImage.whiteDownArrow)} className="w-6" />
            </label>
            <div className="mt-4 hidden peer-checked:block">
              <p className="pl-3 text-black dark:text-white font-['Poppins']">
                Description.....
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardHeading>
  );
};
export default HelpSupport;
