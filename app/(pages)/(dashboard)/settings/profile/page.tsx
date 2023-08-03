"use client";

import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";
import Input from "@/components/Input/page";
import { Routes } from "@/components/Routes";
import { SESSION_TOKEN } from "@/components/common/constant";
import { deletCookies, getCook } from "@/components/helper/cookies_setup";
import {
  profileService,
  updateProfileService,
} from "@/components/helper/services/profileService";
import { profileSchema } from "@/utils/Constants/Schema/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useForm, RegisterOptions } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { isValidNumber } from "libphonenumber-js";
import { UserContext } from "@/components/context";
import { SkeletonCard } from "@/components/skeltonCard/profileCard";
import { DarkImage, ImagePath, LightImage } from "@/components/Images/page";
import PhoneNumber from "@/components/PhoneInput/page";
import { useTheme } from "next-themes";

type ProfileForm = {
  name: string;
  gender: string;
  phoneNumber?: string;
  countryName?: string;
  countryCode?: string;
  format?: string;
  email: string;
};
const Profile = () => {
  const [edit, setEdit] = useState(true);
  const [image, setImage] = useState<ArrayBuffer[] | null>();
  const [imageURL, setImageUrl] = useState("null");
  const [isLoading, setLoading] = useState(true);
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter();
  const session_token = getCook(SESSION_TOKEN);
  let userData: any = UserContext();
  const editMode = (e: any) => {
    e.preventDefault();
    setEdit(false);
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    setError,
    clearErrors,

    formState: { errors },
    control,
  } = useForm<ProfileForm>({
    resolver: yupResolver(profileSchema),
  });
  useEffect(() => {
    if (userData) {
      let { email, phoneNumber, name, countryCode, gender, image } =
        userData.userData;
      setLoading(false);
      setValue("name", name);
      setValue("phoneNumber", phoneNumber);
      setValue("countryCode", countryCode);
      setValue("gender", gender);
      setValue("email", email);
      setImageUrl(image);
      setImage(image);
    }
  }, [userData]);

  const onSubmit = async (data: ProfileForm) => {
    let { email } = userData.userData;
    // qs.stringify({
    //   name:data.name,
    //   image:image,
    //   gender:data.gender,
    //   phoneNumber:data.phoneNumber,
    //   countryCode:data.countryCode,
    //   email:email
    // }),
    if (data) {
      setLoading(true);
      let formdata: any = new FormData();
      const request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
        }
      };
      formdata.append("name", data.name);
      formdata.append("image", image);
      formdata.append("gender", data.gender);
      formdata.append("phoneNumber", data.phoneNumber);
      formdata.append("countryCode", data.countryCode);
      formdata.append("email", data.email);

      const updateProfileRes = await updateProfileService(
        formdata,
        session_token
      );
      if (updateProfileRes.code == 200) {
        // setIsLoading(false);
        setEdit(true);
        setLoading(false);
      }
    }
  };
  //   const handleImageChange =(e:any)=> {
  //     let files = e.target.files;
  //     let fileReader = new FileReader();
  //     fileReader.readAsDataURL(files[0]);

  //     fileReader.onload = (event) => {
  //             setImage(event.target.result)

  //     }
  // }

  const handleImageChange = (e: any) => {
    e.preventDefault();
    let type = e.target.files[0].type;
    if (e.target.files && e.target.files[0]) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      let imagePreview: any = reader.result as string;
      setImage(imagePreview);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (phone: any, phoneData: any, x: any) => {
    let pNumber = phone;
    let count = phoneData?.dialCode?.length;
    pNumber = phone.substring(count);
    setValue("phoneNumber", pNumber);
    setValue("countryName", String(phoneData.countryCode).toUpperCase());
    setValue("countryCode", phoneData.dialCode);
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
  let phone: any = getValues("phoneNumber");
  let code: any = getValues("countryCode");
  let Number = code + phone;
  let skeletonCards = Array(1).fill(0);

  return (
    <>
      {isLoading ? (
        skeletonCards.map((index: number) => <SkeletonCard key={index} />)
      ) : (
        <div className="bg-white dark:bg-themeBg px-5 py-5 mt-10 w-[90%] xl:w-[90%] lg:w-[90%] md:w-[100%] mobileView:w-[100%] rounded-2xl">
          <div className="flex items-center justify-between">
            <h1 className="text-black dark:text-white font-['Poppins'] text-xl xs:text-xl xxs:text-base mb-5">
              Edit Profile
            </h1>
            {edit == true && (
              <button
                onClick={(e: any) => {
                  editMode(e);
                }}
                className="flex items-center text-black dark:text-white font-['Poppins'] text-lg xs:text-lg xxs:text-base mb-5"
              >
                {theme === "light" && (
                  <Avatar path={DarkImage.darkEdit} className="w-4" />
                )}
                {theme === "dark" && (
                  <Avatar path={LightImage.whiteEditIcon} className="w-4" />
                )}{" "}
                <span className="ml-3">Edit</span>
              </button>
            )}
          </div>
          <form className="w-full">
            <div className="mb-7">
              <div className="flex w-full items-center">
                <label
                  htmlFor="imageUpload"
                  className="w-20 h-20 flex flex-col items-center bg-white rounded-full tracking-wide cursor-pointer"
                >
                  <img
                    src={imageURL ? imageURL : "/images/editprofile.svg"}
                    className="w-full h-full rounded-full"
                  />
                  <Input
                    type="file"
                    id="imageUpload"
                    className="hidden"
                    placeholder=""
                    onChange={(e: any) => handleImageChange(e)}
                    accept=".png, .jpg, .jpeg"
                    readOnly={edit}
                    disabled={edit}
                  />
                  {/*               
              <label style={{ cursor: "pointer" }} htmlFor="imageUpload">
                {" "}
              </label> */}
                </label>
              </div>
            </div>
            <div className="mb-7 relative">
              <Input
                type="text"
                placeholder="Arihant Singh"
                className="w-full placeholder-black dark:placeholder-white rounded-md font-['Poppins']
                          leading-tight py-2 px-10 focus:outline-none text-black dark:text-white  
                          focus:shadow-outline h-12 bg-white dark:bg-inputbg border-2 dark:border-none border-lightBorder xxs:text-sm"
                readOnly={edit}
                register={register("name")}
                name="name"
              />
              {theme === "light" && (
                <Avatar path={DarkImage.darkUser}
                  className="absolute w-4 bottom-3 left-2" />
              )}
              {theme === "dark" && (
                <Avatar
                  path={LightImage.whiteUserIcon}
                  className="absolute w-4 bottom-3 left-2"
                />
              )}{" "}
            </div>
            <div className="mb-7 relative">
              <Input
                type="text"
                placeholder="Email"
                className="w-full placeholder-black dark:placeholder-white rounded-md font-['Poppins']
                          leading-tight py-2 px-10 focus:outline-none  text-black dark:text-white 
                          focus:shadow-outline h-12 bg-white dark:bg-inputbg border-2 dark:border-none border-lightBorder xxs:text-sm"
                readOnly={edit}
                register={register("email")}
                name="name"
              />
              {theme === "light" && (
                <Avatar path={DarkImage.darkMail}
                  className="absolute w-4 bottom-3 left-2" />
              )}
              {theme === "dark" && (
              <Avatar
                path={LightImage.whiteMailIcon}
                className="absolute w-4 bottom-4 left-2"
              />
              )}{" "}
            </div>
            <div className="mb-7 relative ">
              <PhoneNumber
                {...register("phoneNumber", phoneNumberValidation)}
                onChange={handleChange}
                countryCodeEditable={true}
                prefix="+"
                disabled={true}
                value={Number}
              />
            </div>
            <div className="mb-7">
              <div>
                <legend className="text-black dark:text-white font-['Poppins'] text-lg xs:text-lg xss:text-md">
                  Gender
                </legend>
              </div>
              <div className="text-black dark:text-white font-['Poppins'] inline-flex flex-wrap">
                <label
                  htmlFor="male"
                  className="flex items-center cursor-pointer py-2 px-2"
                >
                  <input
                    type="radio"
                    id="male"
                    value="male"
                    className="hidden peer"
                    disabled={edit}
                    {...register("gender", { required: `${"GenderReq"}` })}
                  />
                  <Avatar
                    path={ImagePath.selectRadio}
                    className="w-7 hidden peer-checked:block"
                  />
                  <Avatar
                    path={ImagePath.unSelectRadio}
                    className="w-7 block peer-checked:hidden"
                  />
                  <span className="ml-3">Male</span>
                </label>
                <label
                  htmlFor="Female"
                  className="flex items-center cursor-pointer py-2 px-2"
                >
                  <input
                    type="radio"
                    id="Female"
                    value="Female"
                    className="hidden peer"
                    disabled={edit}
                    {...register("gender", { required: `${"GenderReq"}` })}
                  />
                  <Avatar
                    path={ImagePath.selectRadio}
                    className="w-7 hidden peer-checked:block"
                  />
                  <Avatar
                    path={ImagePath.unSelectRadio}
                    className="w-7 block peer-checked:hidden"
                  />
                  <span className="ml-3">Female</span>
                </label>
                <label
                  htmlFor="Other"
                  className="flex items-center cursor-pointer py-2 px-2"
                >
                  <input
                    type="radio"
                    id="Other"
                    value="Other"
                    className="hidden peer"
                    disabled={edit}
                    {...register("gender", { required: `${"GenderReq"}` })}
                  />
                  <Avatar
                    path={ImagePath.selectRadio}
                    className="w-7 hidden peer-checked:block"
                  />
                  <Avatar
                    path={ImagePath.unSelectRadio}
                    className="w-7 block peer-checked:hidden"
                  />
                  <span className="ml-3">Other</span>
                </label>
              </div>
            </div>
            <div className="border border-black dark:border-white pb-1 rounded-xl mt-3 xxxs:w-full">
              <Button
                className={
                  "bg-black dark:bg-white flex items-center justify-center font-bold text-white dark:text-black font-['Poppins'] border border-black dark:border-white w-full p-3 rounded-tl-lg rounded-tr-lg rounded-xl dark:m-[-1px] dark:border-1"
                }
                text="Update"
                isLoading={isLoading}
                onClick={handleSubmit(onSubmit)}
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default Profile;
