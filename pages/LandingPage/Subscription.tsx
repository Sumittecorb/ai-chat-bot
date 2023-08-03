import {
  LeftToRightAnimate,
  RightToLeftAnimate,
} from "@/components/Animation/page";
import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";
import SubscriptionType from "../Subscription/SubscriptionType";

const SubscriptionSec = () => {
  return (
    <>
      <section className="bg-light-lightBackground dark:bg-gradient-to-r from-gradientLeft to-gradientRight px-16 xs:px-8 py-10 xs:py-2">
        <div className="grid grid-cols-5 gap-4 xs:grid-cols-1">
          <LeftToRightAnimate className="col-span-3 pt-20 lg:col-span-3 md:col-span-3 sm:col-span-3 xs:pt-10">
            <h1 className="subscriptionHeading relative textblack dark:text-white text-5xl font-['Poppins'] w-fit font-semibold xl:leading-tight lg:leading-tight md:leading-tight sm:leading-tight leading-tight xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-4xl xss:text-3xl ">
              Subscription
            </h1>
            <p className="textblack dark:text-white text-2xl mt-5 font-light font-['Poppins'] lg:text-xl md:text-xl sm:text-lg xs:text-xl xxs:text-lg xxxs:text-base">
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
            <SubscriptionType />
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
