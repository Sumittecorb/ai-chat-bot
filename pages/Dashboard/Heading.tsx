import Avatar from "@/components/Avatar/page";
import React from "react";

const DashboardHeading = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) => {
  return (
    <section  >
      <div className="flex items-center justify-between mobileView:mt-5 ">
        <h1 className=" text-black dark:text-white  text-3xl xs:text-3xl xss:text-xl font-['Poppins'] font-semibold xl:leading-tight lg:leading-tight md:leading-tight sm:leading-tight leading-tight">
          {heading}
        </h1>
        <Avatar
          path={"/images/notification.svg"}
          className="w-[50px] xss:w-[35px]"
        />
      </div>
      {children}
    </section>
  );
};
export default DashboardHeading;
