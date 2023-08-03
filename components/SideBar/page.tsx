"use client";
import { usePathname, useParams } from "next/navigation";
import Avatar from "../Avatar/page";
import { DarkImage, LightImage } from "../Images/page";
import { ListNavigation, Navigation } from "../LinkButton/page";
import { useTheme } from "next-themes";
import { getCook } from "../helper/cookies_setup";
import { SESSION_TOKEN } from "../common/constant";

const Sidebar = () => {
  const pathname = usePathname();
  const params: any = useParams();
  const { systemTheme, theme, setTheme } = useTheme();
  let session_token = getCook(SESSION_TOKEN)
  return (
    <>
      <div className="md:min-h-screen md:flex md:w-[300px] mobileView:w-full float-left z-10 fixed mobileView:static">
        <input type="checkbox" id="menu-open" className="hidden" />
        <header className="bg-[#f6f8fa] dark:bg-gradient-to-t from-[#3c4329] to-[#232323] flex justify-end md:hidden">
          <label
            htmlFor="menu-open"
            id="mobile-menu-button"
            className="m-2 p-2 focus:outline-none rounded-md"
          >
            <img
              src={LightImage.whiteMenu}
              id="menu-open-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
            />
            <img
              src={LightImage.whiteCross}
              id="menu-close-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
            />
          </label>
        </header>
        <aside
          id="sidebar"
          className="bg:[#f6f8fa] dark:bg-gradient-to-t from-[#3c4329] to-[#232323]  text-black dark:text-white w-[300px] mobileView:w-[275px] space-y-6 pt-6 px-0 fixed inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col md:justify-between overflow-y-auto z-10"
        >
          <div className="flex flex-col space-y-6">
            <Navigation path={session_token ? '/chat' : '/'} linkClass="flex items-center pl-7">
              {theme === "light" && (
                <img src={DarkImage.darkLogo} />
              )}
              {theme === "dark" && (
                <img src={LightImage.whiteLogoText} />
              )}{" "}
            </Navigation>
            <nav>
              <ul>
                <ListNavigation
                  path="/chat"
                  liClass={`${(pathname == "/chat" ||
                    pathname == `/chat/${params.slug}`) &&
                    "bg-[#b9bcb56b] dark:bg-[#353535]"
                    }  flex items-center py-2 pl-7 mb-4 transition duration-200 cursor-pointer`}
                  linkClass="flex items-center"
                >
                  {theme === "light" && (
                    <Avatar
                      path={DarkImage.darkChat}
                      className="w-10 h-10"
                    />
                  )}
                  {theme === "dark" && (
                    <Avatar
                      path={LightImage.whiteChat}
                      className="w-10 h-10"
                    />
                  )}{" "}
                  <span className="ml-4 font-['Poppins']">Chat History</span>
                </ListNavigation>
                <ListNavigation
                  path="/subscription"
                  liClass={`${pathname == "/subscription" &&
                    "bg-[#b9bcb56b] dark:bg-[#353535]"
                    }  flex items-center py-2 pl-7 mb-4 transition duration-200 cursor-pointer`}
                  linkClass="flex items-center"
                >
                  {theme === "light" && (
                    <Avatar
                      path={DarkImage.darkSubscription}
                      className="w-10 h-10"
                    />
                  )}
                  {theme === "dark" && (
                    <Avatar
                      path={LightImage.whiteSubscription}
                      className="w-10 h-10"
                    />
                  )}{" "}
                  <span className="ml-4 font-['Poppins']">
                    Current Subscription
                  </span>
                </ListNavigation>
                <ListNavigation
                  path="/help&support"
                  liClass={`${pathname == "/help&support" &&
                    "bg-[#b9bcb56b] dark:bg-[#353535]"
                    }  flex items-center py-2 pl-7 mb-4 transition duration-200 cursor-pointer`}
                  linkClass="flex items-center"
                >
                  {theme === "light" && (
                    <Avatar
                      path={DarkImage.darkHelp}
                      className="w-10 h-10"
                    />
                  )}
                  {theme === "dark" && (
                    <Avatar
                      path={LightImage.whiteHelpSupport}
                      className="w-10 h-10"
                    />
                  )}{" "}
                  <span className="ml-4 font-['Poppins']">Help & Support</span>
                </ListNavigation>

                <ListNavigation
                  path="/terms_conditions"
                  liClass={`${pathname == "/terms_conditions" &&
                    "bg-[#b9bcb56b] dark:bg-[#353535]"
                    }  flex items-center py-2 pl-7 mb-4 transition duration-200 cursor-pointer`}
                  linkClass="flex items-center"
                >
                  {theme === "light" && (
                    <Avatar
                      path={DarkImage.darkTerms}
                      className="w-10 h-10"
                    />
                  )}
                  {theme === "dark" && (
                    <Avatar
                      path={LightImage.whiteTermsIcon}
                      className="w-10 h-10"
                    />
                  )}{" "}
                  <span className="ml-4 font-['Poppins']">
                    Terms & Conditions
                  </span>
                </ListNavigation>

                <ListNavigation
                  path="/privacyPolicy"
                  liClass={`${pathname == "/privacyPolicy" &&
                    "bg-[#b9bcb56b] dark:bg-[#353535]"
                    }  flex items-center py-2 pl-7 mb-4 transition duration-200 cursor-pointer`}
                  linkClass="flex items-center"
                >
                  {theme === "light" && (
                    <Avatar
                      path={DarkImage.darkPrivacy}
                      className="w-10 h-10"
                    />
                  )}
                  {theme === "dark" && (
                    <Avatar
                      path={LightImage.whitePrivacy}
                      className="w-10 h-10"
                    />
                  )}{" "}
                  <span className="ml-4 font-['Poppins']">Privacy Policy</span>
                </ListNavigation>
                <ListNavigation
                  path="/settings/payment"
                  liClass={`${pathname == "/settings/payment" &&
                    "bg-[#b9bcb56b] dark:bg-[#353535]"
                    }  flex items-center py-2 pl-7 mb-4 transition duration-200 cursor-pointer`}
                  linkClass="flex items-center"
                >
                  {theme === "light" && (
                    <Avatar
                      path={DarkImage.darkSetting}
                      className="w-10 h-10"
                    />
                  )}
                  {theme === "dark" && (
                    <Avatar
                      path={LightImage.whiteSetting}
                      className="w-10 h-10"
                    />
                  )}{" "}
                  <span className="ml-4 font-['Poppins']">Settings</span>
                </ListNavigation>
                <ListNavigation
                  path="/logout"
                  liClass={`${pathname == "/logout" && "bg-[#b9bcb56b] dark:bg-[#353535]"
                    }  flex items-center py-2 pl-7 mb-4 transition duration-200 cursor-pointer`}
                  linkClass="flex items-center"
                >
                  {theme === "light" && (
                    <Avatar
                      path={DarkImage.darkLogout}
                      className="w-10 h-10"
                    />
                  )}
                  {theme === "dark" && (
                    <Avatar
                      path={LightImage.whiteLogout}
                      className="w-10 h-10"
                    />
                  )}{" "}
                  <span className="ml-4 font-['Poppins']">Logout</span>
                </ListNavigation>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
};
export default Sidebar;
