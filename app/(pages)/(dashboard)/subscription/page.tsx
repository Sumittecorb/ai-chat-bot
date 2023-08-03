"use client";
import {
  LeftToRightAnimate,
  RightToLeftAnimate,
} from "@/components/Animation/page";
import Avatar from "@/components/Avatar/page";
import DashboardHeading from "@/pages/Dashboard/Heading";
import SubscriptionType from "@/pages/Subscription/SubscriptionType";

const Subscription = () => {
  return (
    <DashboardHeading heading="Subscription">
      <div className="grid grid-cols-5 gap-4 xs:grid-cols-1 mt-8">
        <LeftToRightAnimate className="col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-3">
          <p className="text-black dark:text-white text-2xl mt-5 font-light font-['Poppins'] lg:text-xl md:text-xl sm:text-lg xs:text-xl xxs:text-lg xxxs:text-base">
            Get unlimited chat with our ai bot and get your all our soluitions
            without any issue
          </p>
          <ul className="text-black dark:text-white list-none">
            <li className="mt-3 flex items-center justify-start font-['Poppins']">
              <img src="images/greentick.svg" className="mr-3" />
              VIP exclusive channel
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
        </LeftToRightAnimate>
        <RightToLeftAnimate className="col-span-2 flex items-center justify-center max-h-[500px] xl:max-w-[250px] lg:col-span-2 md:col-span-2 sm:col-span-2 xs:max-h-[300px] xss:max-h-[250px]">
          <Avatar
            path={"images/subcriptionimage.svg"}
            className="h-full w-full"
          />
        </RightToLeftAnimate>
      </div>
 
      <SubscriptionType />
    </DashboardHeading>
  );
};
export default Subscription;
