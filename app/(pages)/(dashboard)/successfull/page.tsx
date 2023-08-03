"use client";
import Avatar from "@/components/Avatar/page";

const Successfull = () => {
    return (
        <>
            <div className="bg-successBg dark:bg-white text-white dark:text-black font-['Poppins'] dark:border-2 dark:border-logoutBg px-5 xxs:px-3 py-10 text-center mt-20 w-[372px] xss:w-full m-auto rounded-2xl">
                <div className="flex items-center justify-center">
                    <Avatar path={"/images/settingIcons/successful.svg"} className="w-[70px]" />
                </div>
                <h1 className="text-2xl leading-7 text-center xss:text-xl mt-5">
                    Payment Successfull
                </h1>
                <p className="xxs:text-sm">We have Completed your payment</p>
                <p className="mt-3">Transaction Number: 12345678</p>
            </div>
        </>
    );
};
export default Successfull;
