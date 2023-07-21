"use client";
import Avatar from "@/components/Avatar/page";

const ErrorPage = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-center h-[80vh]">
          <Avatar path={"/images/oops.svg"} className="w-[350px] xss:w-full" />
        </div>
      </section>
    </>
  );
};
export default ErrorPage;
