import Button from "@/components/Button/page";

const SocialAuth = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-7 xxs:grid-cols-1 xxs:gap-0">
      <div>
        <Button
          className={
            "bg-[#343734] flex items-center justify-center font-bold dark:bg-black text-white dark:text-white w-full p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl dark:m-[-1px] dark:border-1 dark:border-black"
          }
          text="Sign in with google"
        />
      </div>
      <div className="xxs:mt-3">
        <Button
          className={
            "bg-[#343734] flex items-center justify-center font-bold dark:bg-black text-white dark:text-white w-full p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl dark:m-[-1px] dark:border-1 dark:border-black"
          }
          text="Sign in with facebook"
        />
      </div>
    </div>
  );
};
export default SocialAuth;
