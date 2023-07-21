import { useEffect } from "react";


const Dynamic_import =({phoneNo})=>{
    console.log( "phoneNo");

    useEffect(()=>{

       sendOtp()
    },[])
    const sendOtp = async () => {

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

      return <div
      id="recaptcha-container"
      class="justify-center flex"
      
 ></div>    
}

export default Dynamic_import;