import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";
import { sendOtp } from "@/firebase/otp";
import { isValidNumber } from "libphonenumber-js";
import React from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import OrLine from "./ORLine";
import SocialAuth from "./SocialAuth";
type FormValues = {
  phoneNumber: string;
  countryCode: string;
  countryName: string;
};
const OtpSection = ({ children }: { children?: React.ReactNode }) => {
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
    console.log("call");

    let firebaseRes = await sendOtp("+918218150964");
    console.log("firebaseRes",firebaseRes);
    
  };
  const onError = (data: FormValues) => {
    // Handle form submission
    console.log("Error", data.phoneNumber);
  };
  const handleChange = (phone: any, phoneData: any, x: any) => {
    let pNumber = phone;
    let count = phoneData?.dialCode?.length;
    pNumber = phone.substring(count);
    console.log("pNumber", pNumber);

    setValue("phoneNumber", pNumber);
    setValue("countryName", String(phoneData.countryCode).toUpperCase());
    setValue("countryCode", phoneData.dialCode);
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
    <div className="w-full">
              
        <div id="sign-in-button"></div>
      <form className="rounded pt-6 pb-8 mb-4">
        <div className="mb-7 relative">
          <PhoneInput
            {...register("phoneNumber", phoneNumberValidation)}
            onChange={handleChange}
            prefix="+"
            country="in"
            countryCodeEditable={false}
            // renderStringAsFlag={getFlagValue()}
          />
          <p className="font-['Poppins'] mt-3 text-dark-secondary">
            {errors.phoneNumber?.message}
          </p>
        </div>

        <div className="border mb-7 border-white dark:border-black pb-1 rounded-xl mt-3 xxxs:w-full">
          <div  className="justify-center flex">
            <Button
              className={
                "bg-white font-bold dark:bg-black text-black dark:text-white border border-white w-full p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl dark:m-[-1px] dark:border-1 dark:border-black"
              }
              text="Log in"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
        <OrLine />
        <SocialAuth />
      </form>
    </div>
  );
};
export default OtpSection;
