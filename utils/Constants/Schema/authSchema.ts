import * as Yup from "yup";


export const signupSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  userName: Yup.string().required("User Name is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
});
export const loginSchema = Yup.object().shape({
  phone: Yup.string().required("Phone Number is required"),

  
});

export const profileSchema = Yup.object().shape({
  name: Yup.string().required(" Name is required"),
  gender: Yup.string().required("Phone Number is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),

});
export const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  // .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/),
})



