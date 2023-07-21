"use client";
import { app } from "../firebase/config";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import "firebase/auth";
// import { UserContext } from '../Layout/checkUser';
//*************************** send otp function ******************************************************8 */
export const sendOtp = async (phoneNo) => {
  const auth = getAuth(app);
  window.recaptchaVerifier = new RecaptchaVerifier(
    "sign-in-button",
    {
      size: "invisible",
      callback: (response) => {
        console.log("prepared phone auth process", response);
      },
    },
    auth
  );
  const appVerifier = window.recaptchaVerifier;
  const signupFunRes = await signInWithPhoneNumber(
    auth,
    `+${phoneNo}`,
    appVerifier
  )
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
      // setIsOtpSend(true)
      //  console.log("otp send successfully")
      // route.push(`/auth/otpVerify?${type}`)
      return { response: "success", code: 200 };
    })
    .catch((error) => {
      console.log("error", error);
      return { response: "failed", code: 400 };
    });
  return signupFunRes;
};
export const verifyOtpFunction = async (otp) => {
  console.log(otp)
  const otpVerifyFun = await window.confirmationResult
    ?.confirm(otp)
    .then((result) => {

      // User signed in successfully.
      const user = result.user;
      return { response: "success", code: 200 };
    })
    .catch((error) => {
      return {
        response: "failed",
        code: 400,
        message: "Please enter valid otp",
      };
    });
  return otpVerifyFun;
};
