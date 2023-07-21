import {
  LeftToRightAnimate,
  RightToLeftAnimate,
} from "@/components/Animation/page";
import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";

const SubscriptionSec = () => {
  return (
    <>
      <section className="bg-light-lightBackground dark:bg-gradient-to-r from-[#202708] to-[#171717] px-16 xs:px-8 py-10 xs:py-2">
        <div className="grid grid-cols-5 gap-4 xs:grid-cols-1">
          <LeftToRightAnimate className="col-span-3 pt-20 lg:col-span-3 md:col-span-3 sm:col-span-3 xs:pt-10">
            <h1 className="subscriptionHeading textblack dark:text-white text-5xl font-['Poppins'] w-fit font-semibold xl:leading-tight lg:leading-tight md:leading-tight sm:leading-tight leading-tight xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-4xl xss:text-3xl ">
              Subscription
            </h1>
            <p className="textblack dark:text-white text-2xl mt-5 font-light font-['Poppins'] lg:text-[22px] md:text-xl sm:text-lg xs:text-[20px] xxs:text-[18px] xxxs:text-[16px]">
              Get unlimited chat with our ai bot and get your all our soluitions
              without any issue
            </p>
            <ul className="textblack dark:text-white list-none">
              <li className="mt-3 flex items-center justify-start font-['Poppins']">
                <img src="images/greentick.svg" className="mr-3" />
                VIT exclusive channel
              </li>
              <li className="mt-3 flex items-center justify-start font-['Poppins']">
                <img src="images/greentick.svg" className="mr-3" />
                Unlimited Message
              </li>
              <li className="mt-3 flex items-center justify-start font-['Poppins']">
                <img src="images/greentick.svg" className="mr-3" />
                Voice Chat Available
              </li>
              <li className="mt-3 flex items-center justify-start font-['Poppins']">
                <img src="images/greentick.svg" className="mr-3" />
                Become Pro
              </li>
            </ul>
            <div className="mt-5 flex items-center justify-start flex-wrap font-['Poppins']">
              <div className="mt-3 w-[116px] xxxs:w-[45%] font-['Poppins'] mr-3 rounded-xl p-[0.1rem] text-black dark:text-white bg-gradient-to-b from-[#ffffff] to-black dark:bg-black dark:border-1 dark:border-white">
                <div className="bg-white dark:bg-gradient-to-b from-[#242222] to-black dark:border-1 dark:border-black rounded-xl p-3">
                  <p className="pl-4 mb-1 uppercase">Day</p>
                  <h3 className="flex">
                    <div className="bg-blackrupee dark:bg-whiterupee bg-no-repeat bg-center w-[20px]"></div>
                    800.00
                  </h3>
                </div>
              </div>
              <div className="mt-3 w-[116px] xxxs:w-[45%] font-['Poppins'] mr-3 rounded-xl p-[0.1rem] text-black dark:text-white bg-gradient-to-b from-[#ffffff] to-black dark:bg-black dark:border-1 dark:border-white">
                <div className="bg-white dark:bg-gradient-to-b from-[#242222] to-black dark:border-1 dark:border-black rounded-xl p-3">
                  <p className="pl-4 mb-1 uppercase">Monthly</p>
                  <h3 className="flex">
                    <div className="bg-blackrupee dark:bg-whiterupee bg-no-repeat bg-center w-[20px]"></div>
                    1600.00
                  </h3>
                </div>
              </div>
              <div className="mt-3 w-[116px] xxxs:w-[45%] font-['Poppins'] mr-3 rounded-xl p-[0.1rem] text-black dark:text-white bg-gradient-to-b from-[#ffffff] to-black dark:bg-black dark:border-1 dark:border-white">
                <div className="bg-white dark:bg-gradient-to-b from-[#242222] to-black dark:border-1 dark:border-black rounded-xl p-3">
                  <p className="pl-4 mb-1 uppercase">Weekly</p>
                  <h3 className="flex">
                    <div className="bg-blackrupee dark:bg-whiterupee bg-no-repeat bg-center w-[20px]"></div>
                    800.00
                  </h3>
                </div>
              </div>
              <div className="mt-3 w-[116px] xxxs:w-[45%] font-['Poppins'] mr-3 rounded-xl p-[0.1rem] text-black dark:text-white bg-gradient-to-b from-[#ffffff] to-black dark:bg-black dark:border-1 dark:border-white">
                <div className="bg-white dark:bg-gradient-to-b from-[#242222] to-black dark:border-1 dark:border-black rounded-xl p-3">
                  <p className="pl-4 mb-1 uppercase">Yearly</p>
                  <h3 className="flex">
                    <div className="bg-blackrupee dark:bg-whiterupee bg-no-repeat bg-center w-[20px]"></div>
                    1600.00
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start mt-5 xxxs:flex-wrap">
              <div className="border border-black dark:border-white pb-1 rounded-xl mr-5 mt-3 xxxs:w-full xxxs:mr-0">
                <Button
                  className={
                    "bg-black dark:bg-white flex items-center justify-center text-white dark:text-black border border-black dark:border-white w-48 p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl xxs:w-40 xxxs:w-full dark:m-[-1px] dark:border-1 "
                  }
                  text="Buy Now"
                />
              </div>
            </div>
          </LeftToRightAnimate>
          <RightToLeftAnimate className="col-span-2 flex items-center justify-center max-h-[500px] lg:col-span-2 md:col-span-2 sm:col-span-2 xs:max-h-[300px] xss:max-h-[250px]">
            <Avatar
              path={"images/subcriptionimage.svg"}
              className="h-full w-full"
            />
          </RightToLeftAnimate>
        </div>
      </section>
    </>
  );
};
export default SubscriptionSec;
