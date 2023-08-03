import {
  LeftToRightAnimate,
  RightToLeftAnimate,
} from "@/components/Animation/page";
import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";

const Introduction = () => {
  return (
    <>
      <section className="bg-light-lightBackground dark:bg-gradient-to-br from-gradientLeft to-gradientRight px-16 xs:px-8 py-10 xs:py-2">
        <div className="grid grid-cols-5 gap-4 xs:grid-cols-1">
          <LeftToRightAnimate className="col-span-3 pt-20 lg:col-span-3 md:col-span-3 sm:col-span-3 xs:pt-10">
            <h1 className="text-black dark:text-white text-5xl font-['Poppins'] font-semibold xl:leading-tight lg:leading-tight md:leading-tight sm:leading-tight xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-4xl xss:text-3xl ">
              Introduction to <br />
              Bot AI
            </h1>
            <p className="text-black dark:text-white text-lg mt-5 font-light font-['Poppins'] lg:text-lg sm:text-base xs:text-sm">
              Bot AI, or Artificial Intelligence Chatbot, represents a
              breakthrough in conversational agents. By leveraging sophisticated
              algorithms and NLP, these intelligent bots simulate human-like
              conversations, providing users with natural language interactions.
              From automating customer support to serving as virtual assistants,
              Bot AI finds applications in various industries, transforming how
              businesses engage with their customers and streamline processes.
              As technology evolves, the potential for Bot AI to revolutionize
              our daily lives and create more connected experiences continues to
              grow, promising a future where AI-driven conversations become an
              integral part of our digital interactions.
            </p>
            <div className="flex items-center justify-start mt-5 xxxs:flex-wrap">
              <div className="border border-black dark:border-white pb-1 rounded-xl mr-5 mt-3 xxxs:w-full xxxs:mr-0">
                <Button
                  className={
                    "bg-black dark:bg-white flex items-center justify-center text-white dark:text-black border border-black dark:border-white w-48 p-3 rounded-tl-lg rounded-tr-lg rounded-xl xxs:w-40 xxxs:w-full dark:m-[-1px] dark:border-1"
                  }
                  text="Try NOW"
                />
              </div>
              <div className="border border-black dark:border-white pb-1 rounded-xl mr-5 mt-3 xxxs:w-full xxxs:mr-0">
                <Button
                  className={
                    "bg-white dark:bg-black flex items-center justify-center text-black dark:text-white border border-black dark:border-white w-48 p-3 rounded-tl-lg rounded-tr-lg rounded-xl xxs:w-40 xxxs:w-full dark:m-[-1px] dark:border-1"
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
