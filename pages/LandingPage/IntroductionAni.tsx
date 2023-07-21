import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

const introPictureVariants: Variants = {
  hide: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};
const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};
const IntroductionAni = () => {
  return (
    <>
      <section className="px-16 max-[640px]:px-8 py-10 bg-gradient-to-br from-[#202708] to-[#171717] dark:bg-white">
        <div className="grid grid-cols-5 gap-4 max-[640px]:grid-cols-1">
          <motion.div
            className={
              "col-span-3 pt-20 lg:col-span-3 md:col-span-3 sm:col-span-3"
            }
            initial="hide"
            whileInView="show"
            // exit="hide"
            variants={introHeaderVariants}
          >
            <h1 className="text-white dark:text-black text-5xl animate-bounce xl:leading-tight lg:leading-tight md:leading-tight sm:leading-tight xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl max-[640px]:text-4xl max-[475px]:text-3xl ">
              Introduction <br />
              Boat Ai
            </h1>
            <p className="text-white dark:text-black text-lg mt-5">
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
            <div className="flex items-center justify-start mt-5 xsm:flex-wrap">
              <div className="border border-white dark:border-black pb-1 rounded-xl mr-5 mt-3 xsm:w-full xsm:mr-0">
                <Button
                  className={
                    "bg-white dark:bg-black text-black dark:text-white border border-white w-48 p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl max-[575px]:w-40 xsm:w-full"
                  }
                  text="Try NOW"
                />
              </div>
              <div className="border border-white dark:border-black pb-1 rounded-xl mt-3 xsm:w-full">
                <Button
                  className={
                    "bg-black dark:bg-white text-white dark:text-black border border-white w-48 p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl max-[575px]:w-40 xsm:w-full"
                  }
                  text="Start Chat"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-span-2 flex items-center justify-center max-h-[500px] lg:col-span-2 md:col-span-2 sm:col-span-2"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introPictureVariants}
          >
            <Avatar
              path={"images/landingimage.svg"}
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default IntroductionAni;
