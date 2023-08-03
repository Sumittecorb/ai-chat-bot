import Avatar from "../Avatar/page";
import { ListNavigation } from "../LinkButton/page";
import ThemeToggle from "../ThemeToggle/page";

const Header = () => {
  return (
    <>
      <nav className="bg-light-lightBackground dark:bg-gradient-to-tr from-[#202708] to-[#171717] text-black dark:text-white tablet:text-white tablet:dark:text-black h-20 flex items-center justify-between px-16 py-14 xs:px-8 xs:py-5">
        <div>
          <Avatar path={"/images/logoChatBotAI.svg"} className="xs:w-[80px]" />
        </div>
        <div className="flex items-center justify-between">
          <input type="checkbox" id="menuCheckBox" className="peer hidden" />
          <label
            htmlFor="menuCheckBox"
            className="cursor-pointer hidden tablet:block"
          >
            <Avatar path={"/images/menuicon.svg"} className="w-11" />
          </label>
          <ul className="z-10 flex items-center tablet:fixed tablet:w-[190px] tablet:inline-block tablet:bg-black tablet:dark:bg-white tablet:h-[215px] tablet:right-5 tablet:top-[-100%] tablet:peer-checked:top-20 tablet:rounded-xl">
            <ListNavigation
              path="/"
              liClass="m-5 text-lg tablet:py-0 uppercase font-medium font-['poppins'] tablet:text-[16px]"
              name="About"
            />
            <ListNavigation
              path="/"
              liClass="m-5 text-lg tablet:py-0 uppercase font-medium font-['poppins'] tablet:text-[16px]"
              name="Pricing"
            />
            <ListNavigation
              path="/signUp"
              liClass="m-5 text-lg tablet:py-0 uppercase font-medium font-['poppins'] tablet:text-[16px]"
              name="Sign up"
            />
            <ListNavigation
              path="/login"
              liClass="m-5 text-lg tablet:py-0 uppercase font-medium font-['poppins'] tablet:text-[16px]"
              name="Log In"
            />
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Header;
