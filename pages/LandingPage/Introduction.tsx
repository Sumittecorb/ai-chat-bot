import {
  LeftToRightAnimate,
  RightToLeftAnimate,
} from "@/components/Animation/page";
import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";

const Introduction = () => {
  return (
    <>
      <section className="bg-light-lightBackground dark:bg-gradient-to-br from-[#202708] to-[#171717] px-16 xs:px-8 py-10 xs:py-2">
        <div className="grid grid-cols-5 gap-4 xs:grid-cols-1">
          <LeftToRightAnimate className="col-span-3 pt-20 lg:col-span-3 md:col-span-3 sm:col-span-3 xs:pt-10">
            <h1 className="text-black dark:text-white text-5xl font-['Poppins'] font-semibold xl:leading-tight lg:leading-tight md:leading-tight sm:leading-tight xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-4xl xss:text-3xl ">
              Introduction <br />
              Boat Ai
            </h1>
            <p className="text-black dark:text-white text-lg mt-5 font-light font-['Poppins'] lg:text-lg sm:text-[16px] xs:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              eveniet corporis repellendus facilis minima consectetur
              cupiditate! Cumque, consectetur? Dolorem reprehenderit provident
              incidunt aperiam deleniti! Excepturi repudiandae placeat eius
              delectus laboriosam! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Incidunt eveniet corporis repellendus facilis
              minima consectetur cupiditate! Cumque, consectetur? Dolorem
              reprehenderit provident incidunt aperiam deleniti! Excepturi
              repudiandae placeat eius delectus laboriosam!
            </p>
            <div className="flex items-center justify-start mt-5 xxxs:flex-wrap">
              <div className="border border-black dark:border-white pb-1 rounded-xl mr-5 mt-3 xxxs:w-full xxxs:mr-0">
                <Button
                  className={
                    "bg-black dark:bg-white flex items-center justify-center text-white dark:text-black border border-black dark:border-white w-48 p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl xxs:w-40 xxxs:w-full dark:m-[-1px] dark:border-1"
                  }
                  text="Try NOW"
                />
              </div>
              <div className="border border-black dark:border-white pb-1 rounded-xl mr-5 mt-3 xxxs:w-full xxxs:mr-0">
                <Button
                  className={
                    "bg-white dark:bg-black flex items-center justify-center text-black dark:text-white border border-black dark:border-white w-48 p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl xxs:w-40 xxxs:w-full dark:m-[-1px] dark:border-1"
                  }
                  text="Start Chat"
                />
              </div>
            </div>
          </LeftToRightAnimate>
          <RightToLeftAnimate className="col-span-2 flex items-center justify-center max-h-[500px] lg:col-span-2 md:col-span-2 sm:col-span-2 xs:max-h-[300px] xss:max-h-[250px]">
            <Avatar
              path={"images/landingimage.svg"}
              className="h-full w-full"
            />
          </RightToLeftAnimate>
        </div>
      </section>
    </>
  );
};
export default Introduction;
