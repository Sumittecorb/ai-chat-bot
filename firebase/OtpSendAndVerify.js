import app from "./config";
import "firebase/auth";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// import { UserContext } from '../Layout/checkUser';
//*************************** send otp function ******************************************************8 */
export const sendOtp = async (phoneNo) => {
  console.log(phoneNo, "phoneNo");
  const auth = getAuth(app);
  console.log("auth",auth);
  window.recaptchaVerifier = new RecaptchaVerifier("sign-in-button", {
    'callback': (response) => {
      console.log("prepared phone auth process");
    }
  }, auth);
  const appVerifier = window.recaptchaVerifier;
  console.log(appVerifier, "appVerifier");
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
      return { response: "faild", code: 400 };
    });
  console.log("signupFunRes", signupFunRes);
  return signupFunRes;
};
// ********************************** for otp verification ***********************************************************88
export const verifyOtpFunction = async (otp) => {
  const otpVerifyFun = await window.confirmationResult
    ?.confirm(otp)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      return { response: "success", code: 200 };
    })
    .catch((error) => {
      return {
        response: "faild",
        code: 400,
        message: "Please enter valid otp",
      };
    });
  return otpVerifyFun;
};
