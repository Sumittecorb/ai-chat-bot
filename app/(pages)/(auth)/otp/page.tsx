"use client";
import Button from "@/components/Button/page";
import OtpInput from "@/components/Otp/page";
import { Routes } from "@/components/Routes";
import { SESSION_TOKEN } from "@/components/common/constant";
import { getCook, setCookies } from "@/components/helper/cookies_setup";
import {
  loginService,
} from "@/components/helper/services/authServices";
import { verifyOtpFunction } from "@/firebase/otp";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthLayout from "@/pages/Auth/Layout";
const Otp = () => {
  let signup_data: any = getCook("SignupData");
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [isLoading, setLoading] = useState(false)

  const handleOnchangeOtp = (otp: any) => {
    setOtp(otp);
  };
  const onSubmit = async (e: any) => {
    let data = JSON.parse(signup_data);
    e.preventDefault();
    if (otp) {
      setLoading(true)
      let firebaseRes = await verifyOtpFunction(otp);
      if (firebaseRes.code == 200) {
        if (signup_data) {
          let loginRes: any = await loginService({
            countryCode: data.countryCode,
            phoneNumber: data.phoneNumber,
          });
          if (loginRes.code == 200) {
            setLoading(false)
            setCookies(SESSION_TOKEN, loginRes.data.token);
            window.location.href=Routes.chat.href;
          }
        }
      }
    }
  };

  return (
    <AuthLayout>
      <h3 className="text-black dark:text-white text-base mt-5 leading-5 font-['Poppins']">
        Please enter OTP received on your registered mobile number
      </h3>
      <div className="w-full">
        <form className="rounded pt-6 pb-8 mb-4">
          <div className="mb-7 flex items-center justify-between">
            <OtpInput
              value={otp}
              onChange={handleOnchangeOtp}
              numInputs={6}
              separator={<span> </span>}
              isInputNum={true}
              name="otp"
            />
          </div>

          <p className="font-['Poppins'] mt-3 text-dark-secondary">
            {/* {errors.phone?.message} */}
          </p>

          <div className="border border-black dark:border-white pb-1 rounded-xl mt-3 xxxs:w-full xxxs:mr-0">
            <Button
              className={
                "bg-black dark:bg-white flex items-center font-bold justify-center text-white dark:text-black border border-black dark:border-white w-full p-3 rounded-tl-lg rounded-tr-lg rounded-xl m-0 dark:border-1"
              }
              text="Verify"
              onClick={(e: any) => onSubmit(e)}
              isLoading={isLoading}
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
export default Otp;
