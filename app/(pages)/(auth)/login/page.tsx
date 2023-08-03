"use client"; // This is a client component 👈🏽
import Button from "@/components/Button/page";
import AuthLayout from "@/pages/Auth/Layout";
import { useForm, RegisterOptions } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import { isValidNumber } from "libphonenumber-js";
import { sendOtp } from "@/firebase/otp";
import {
  CheckUserService,
  loginService,
} from "@/components/helper/services/authServices";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { setCookies } from "@/components/helper/cookies_setup";
import { Routes } from "@/components/Routes";
import PhoneNumber from "@/components/PhoneInput/page";
// const Dynamic_import = dynamic(() => import("@/firebase/dynamicImport"), {
//   ssr: false,
// });
type FormValues = {
  phoneNumber: string;
  countryCode: string;
  countryName: string;
  format: string;
};
const Login = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [error, setErrors] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    getValues,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    if (data) {
      setLoading(true);
      let phoneNumber = data.countryCode + data.phoneNumber;
      let validUserRes: any = await CheckUserService({
        countryCode: data.countryCode,
        phoneNumber: data.phoneNumber,
      });
      if (validUserRes.code == 200) {
        if (validUserRes.data.isUser) {
          let firebaseRes = await sendOtp(phoneNumber);
          if (firebaseRes.code == 200) {
            setLoading(false);
            setCookies("SignupData", data);
            router.replace(Routes.Otp.href);
          }
        } else {
          setErrors(validUserRes.message);
          setLoading(false);
          router.replace(Routes.signUp.href);
        }
      }
    }
  };
  const onError = (data: FormValues) => {
    // Handle form submission
  };
  const handleChange = (phone: any, phoneData: any, x: any) => {
    let pNumber = phone;
    let count = phoneData?.dialCode?.length;
    pNumber = phone.substring(count);
    setValue("phoneNumber", pNumber);
    setValue("countryName", String(phoneData.countryCode).toUpperCase());
    setValue("countryCode", "+" + phoneData.dialCode);
    setValue("format", phoneData.format);
    const check = validatePhoneNumbers(pNumber);
    if (!check) {
      setError("phoneNumber", { message: "Please enter valid number" });
    } else {
      clearErrors("phoneNumber");
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

  return (
    <AuthLayout>
      <div id="sign-in-button"></div>
      <div className="w-full">
        <p className="text-dark-secondary text-md mb-4 mobile:mt-5 leading-8 font-['Poppins'] font-medium  xxxs:text-sm xxxs:leading-5">
          {error}
        </p>
        <form className="rounded pt-6 pb-8 mb-4">
          <div className="mb-7 relative h-12">
            <PhoneNumber
              {...register("phoneNumber", phoneNumberValidation)}
              onChange={handleChange}
              countryCodeEditable={true}
              prefix="+"
              // renderStringAsFlag={getFlagValue()}
            />
            {/* <PhoneInput
              {...register("phoneNumber", phoneNumberValidation)}
              onChange={handleChange}
              prefix="+"
              country="in"
              countryCodeEditable={true}
              renderStringAsFlag={getFlagValue()}
            // showDropdown={true}
            // placeholder={placeholder}
            /> */}
          </div>
          <p className="font-['Poppins'] text-dark-secondary">
            {errors.phoneNumber?.message}
          </p>

          <div className="border mb-7 border-black dark:border-white pb-1 rounded-xl mt-3 xxxs:w-full">
            <div className="justify-center flex">
              <Button
                className={
                  "bg-black dark:bg-white flex items-center justify-center font-bold text-white dark:text-black border border-black w-full p-3 rounded-tl-lg rounded-tr-lg rounded-xl dark:m-[-1px] dark:border-1 dark:border-white"
                }
                text="Log in"
                onClick={handleSubmit(onSubmit)}
                isLoading={isLoading}
                disabled={isLoading}
              />
            </div>
          </div>
          {/* <OrLine /> */}
          {/* <SocialAuth /> */}
        </form>
      </div>
    </AuthLayout>
  );
};
export default Login;
