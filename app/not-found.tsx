"use client";
import Avatar from "@/components/Avatar/page";
import { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
    <main className="bg-gradient-to-t from-[#202708] to-[#171717] px-12 mobileView:px-6 py-10 md:min-h-screen md:w-full md:float-right h-[100%] mobileView:pt-14 mobileView:w-full mobileView:min-h-screen">
      <section>
        <div className="flex items-center justify-center h-[80vh]">
          <Avatar path={"/images/oops.svg"} className="w-[350px] xss:w-full" />
        </div>
      </section>
    </main>
  );
};
export default NotFoundPage;
