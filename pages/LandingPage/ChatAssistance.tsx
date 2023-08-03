import {
  LeftToRightAnimate,
  RightToLeftAnimate,
} from "@/components/Animation/page";
import Avatar from "@/components/Avatar/page";

const ChatAssistance = () => {
  return (
    <>
      <section className="bg-light-lightBackground dark:bg-gradient-to-b from-gradientLeft to-gradientRight px-16 xs:px-8 py-10 xs:py-2 ">
        <div className="grid grid-cols-5 gap-4 xs:grid-cols-1">
          <LeftToRightAnimate className="col-span-3 pt-20 lg:col-span-3 md:col-span-3 sm:col-span-3 xs:pt-10">
            <h1 className="text-black dark:text-white font-['Poppins'] font-semibold text-5xl xl:leading-tight lg:leading-tight md:leading-tight sm:leading-tight leading-tight xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-4xl xss:text-3xl">
              Welcome to our <br />
              present chat assistant
            </h1>
            <p className="text-black dark:text-white text-lg mt-5 font-light font-['Poppins'] lg:text-lg sm:text-base xs:text-sm">
              Welcome to our state-of-the-art chat assistant! We are delighted
              to have you here. Our present chat assistant is equipped with
              cutting-edge technology to offer you prompt and informative
              responses. Whether you need assistance, have questions, or simply
              want to engage in a conversation, our chat assistant is here to
              ensure a seamless and enjoyable experience. Feel free to explore
              and ask anything you desire, as we embark on an exciting journey
              of knowledge and discovery together!
            </p>
          </LeftToRightAnimate>
          <RightToLeftAnimate className="col-span-2 flex items-center justify-center max-h-[500px] lg:col-span-2 md:col-span-2 sm:col-span-2 xs:max-h-[300px] xss:max-h-[250px]">
            <Avatar
              path={"images/assistantrobot.svg"}
              className="h-full w-full"
            />
          </RightToLeftAnimate>
        </div>
      </section>
    </>
  );
};
export default ChatAssistance;
