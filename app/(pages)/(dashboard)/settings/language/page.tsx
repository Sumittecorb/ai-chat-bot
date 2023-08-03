"use client";

import { DarkImage, LightImage } from "@/components/Images/page";

const ChangeLanguage = () => {
  return (
    <div className="bg-white dark:bg-themeBg px-5 py-5 mt-10 w-[90%] xl:w-[90%] lg:w-[90%] md:w-full mobileView:w-full rounded-2xl">
      <h1 className="text-black dark:text-white font-['Poppins'] text-xl xs:text-xl xss:text-md mb-5">
        Change Language
      </h1>
      <div className="flex items-center w-full py-3">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <h1 className="text-black dark:text-white font-['Poppins'] text-lg xs:text-lg xss:text-md mr-3">
            English
          </h1>
          <div className="relative">
            <input type="checkbox" id="toggleB" className="sr-only peer" />
            <img
              src={DarkImage.darkToggle}
              className="h-12 w-20 peer-checked:hidden"
            />
            <img
              src={LightImage.whiteToggle}
              className="hidden h-12 w-20 peer-checked:block"
            />
          </div>
          <h1 className="text-black dark:text-white font-['Poppins'] text-lg xs:text-lg xss:text-md ml-3">
            Hindi
          </h1>
        </label>
      </div>
    </div>
  );
};
export default ChangeLanguage;
