"use client";
import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";
import Input from "@/components/Input/page";
import { useState } from "react";
import { useForm, RegisterOptions } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/utils/Constants/Schema/authSchema";
import AuthLayout from "@/pages/Auth/Layout";
import {
  CheckUserService,
  signUpService,
} from "@/components/helper/services/authServices";
import { isValidNumber } from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import { sendOtp } from "@/firebase/otp";
import { useRouter } from "next/navigation";
import { Routes } from "@/components/Routes";
import { setCookies } from "@/components/helper/cookies_setup";
import PhoneNumber from "@/components/PhoneInput/page";

type SignupForm = {
  userName: string;
  email: string;
  phoneNumber: string;
  countryCode?: string;
  countryName?: string;
};
const Signup = () => {
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = async (data: SignupForm) => {
    if (data) {
      setLoading(true);
      let phoneNumber = data.countryCode + data.phoneNumber;
      let signupRes: any = await signUpService({
        name: data?.userName,
        email: data?.email,
        countryCode: data.countryCode,
        phoneNumber: data.phoneNumber,
      });
      if (signupRes.code == 201) {
        let firebaseRes = await sendOtp(phoneNumber);
        if (firebaseRes.code == 200) {
          setLoading(false);
          setCookies("SignupData", data);
          router.replace(Routes.Otp.href);
        }
      } else if (signupRes.response.data.code == 400) {
        setLoading(false);
        setErrors(signupRes.response.data.message);
      }
    }
  };
  const validatePhoneNumbers = (phoneNumber: any) => {
    let countryName: any = getValues("countryName");
    try {
      const parsedNumber = isValidNumber(phoneNumber, countryName);
      return parsedNumber ? true : false;
    } catch (error) {
      setError("phoneNumber", { message: "Please enter valid number." });
      return false;
    }
  };
  const phoneNumberValidation: RegisterOptions = {
    required: { value: true, message: "Phone number is required" },
    validate: validatePhoneNumbers,
  };
  const getFlagValue = () => {
    let countryName: any = getValues("countryName");
    let countryCode: any = getValues("countryCode");

    let flagName =
      countryCode && countryName
        ? `(${getValues("countryName")}) +${getValues("countryCode")} `
        : "(IN)+91";

    return flagName;
  };
  const handleChange = (phone: any, phoneData: any, x: any) => {
    let pNumber = phone;
    let count = phoneData?.dialCode?.length;
    pNumber = phone.substring(count);
    setValue("phoneNumber", pNumber);
    setValue("countryName", String(phoneData.countryCode).toUpperCase());
    setValue("countryCode", "+" + phoneData.dialCode);
    const check = validatePhoneNumbers(pNumber);
    if (!check) {
      setError("phoneNumber", { message: "Please enter valid number" });
    } else {
      clearErrors("phoneNumber");
    }
  };
  return (
    <AuthLayout>
      <div id="sign-in-button"></div>
      <div className="w-full">
        <p className="text-dark-secondary text-md mb-4 mobile:mt-5 leading-8 font-['Poppins'] font-medium  xxxs:text-sm xxxs:leading-5">
          {error}
        </p>
        <form className="rounded pt-6 pb-8 mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="User Name aman"
              className="w-full placeholder-black dark:placeholder-white rounded-md font-['Poppins']
                                      leading-tight py-2 px-10 focus:outline-none text-black dark:text-white 
                                      focus:shadow-outline h-12 bg-white dark:bg-inputbg border-2 dark:border-none border-lightBorder xxs:text-sm"
              register={register("userName")}
            />
            <Avatar
              path={"/images/user.svg"}
              className="absolute w-4 top-3 left-2"
            />
            <p className="font-['Poppins'] mt-1 text-dark-secondary">
              {errors.userName?.message}
            </p>
          </div>
          <div className="relative mt-5 ">
            <PhoneNumber
              {...register("phoneNumber", phoneNumberValidation)}
              onChange={handleChange}
              countryCodeEditable={true}
              prefix="+"
            />
            <p className="font-['Poppins'] mt-3 text-dark-secondary">
              {errors.phoneNumber?.message}
            </p>
          </div>
          <div className="mt-5 relative">
            <Input
              type="text"
              placeholder="Email id"
              register={register("email")}
              className="w-full placeholder-black dark:placeholder-white rounded-md font-['Poppins'] leading-tight py-2 px-10 focus:outline-none focus:shadow-outline h-12 bg-white dark:bg-inputbg border-2 dark:border-none border-lightBorder text-black dark:text-white xxs:text-sm"
            />
            {/* <label
              className="w-full placeholder-white rounded-md font-['Poppins'] 
                    leading-tight py-2 px-10 focus:outline-none 
                    focus:shadow-outline h-12  text-white xxs:text-sm"
            >
              {errors.email?.message}
            </label> */}
            <p className="font-['Poppins'] mt-3 text-dark-secondary">
              {errors.email?.message}
            </p>
            <Avatar
              path={"/images/mailicon.svg"}
              className="absolute w-5 top-4 left-2"
            />
          </div>

          <label className="custom-label flex p-2 mt-5">
            <div className="bg-white shadow w-6 h-5 rounded-md xxs:h-4 mt-2.5 p-1 flex justify-center items-center mr-2 relative">
              <Input
                type="checkbox"
                placeholder=""
                className="hidden"
                checked
              />
              <img
                src="/images/checkboxicon.svg"
                className="hidden absolute w-10 h-10 pointer-events-none"
              />
            </div>
            <span className="text-black cursor-pointer dark:text-white font-['Poppins'] font-semibold xxs:text-sm ">
              {" "}
              You agree to abide by the term of use and the privacy statement
            </span>
          </label>
          <div className="border border-black dark:border-white pb-1 rounded-xl mt-3 xxxs:w-full xxxs:mr-0">
            <Button
              className={
                "bg-black dark:bg-white flex items-center font-bold justify-center text-white dark:text-black border border-black dark:border-white w-full p-3 rounded-tl-lg rounded-tr-lg rounded-xl m-0 dark:border-1"
              }
              text="Sign up"
              onClick={handleSubmit(onSubmit)}
              isLoading={isLoading}
              disabled={isLoading}
            />
          </div>
          {/* <div className="flex items-center justify-center mb-7">
            <Avatar path={"/images/linestroke.svg"} className="w-[40%]" />
            <h3 className="text-white dark:text-black text-center text-xl font-['Poppins'] w-[10%]">
              OR
            </h3>
            <Avatar
              path={"/images/linestroke.svg"}
              className="w-[40%] rotate-180"
            />
          </div> */}
          {/* <div className="grid grid-cols-2 gap-4 mb-7 xxs:grid-cols-1 xxs:gap-0">
            <div>
              <Button
                className={
                  "bg-inputbg flex items-center justify-center font-bold dark:bg-black text-white dark:text-white font-['Poppins'] w-full p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl dark:m-[-1px] dark:border-1 dark:border-black"
                }
                text="Sign in with google"
              />
            </div>
            <div className="xxs:mt-3">
              <Button
                className={
                  "bg-inputbg flex items-center justify-center font-bold dark:bg-black text-white dark:text-white w-full p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl dark:m-[-1px] dark:border-1 dark:border-black"
                }
                text="Sign in with facebook"
              />
            </div>
          </div> */}
        </form>
      </div>
    </AuthLayout>
  );
};
export default Signup;
