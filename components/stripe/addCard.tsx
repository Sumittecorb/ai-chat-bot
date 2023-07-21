import React, { FC, useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
} from "@stripe/react-stripe-js";
import { ErrorMessage } from "@/utils/Constants/errorMessage";
import Button from "../Button/page";
import Avatar from "../Avatar/page";
import Input from "../Input/page";
import { customerSourceService } from "../helper/services/paymentService";
import { getCook } from "../helper/cookies_setup";
import { SESSION_TOKEN } from "../common/constant";
import { ImagePath, LightImage } from "../Images/page";
import { UserContext } from "../context";

const style_Add_Btn: any = {
  paddingTop: "0px",
  paddingBottom: "0px",
  fontSize: "15px",
  textTransform: "capitalize",
  backgroundColor: "#f7f8fa !important",
};

const customStyle = {
  base: {
    height: "76px",
    iconColor: "#c4f0ff",
    color: "#a6bcd0",
    fontWeight: 600,
    fontFamily: "Quicksand, Open Sans, Segoe UI, sans-serif",
    fontSize: "18px",
    fontSmoothing: "antialiased",

    ":-webkit-autofill": {
      color: "#fce883",
    },
    "::placeholder": {
      color: "#ffff",
    },
    ":-webkit-text-security": "desc",
  },
  invalid: {
    iconColor: "#ff0019",
    color: "#ff0019",
  },
};

const CardErrorMsg: FC<{ _error: any }> = ({ _error }) => {
  return (
    <div className="alert alert-login-payment text-dark-secondary">
      {_error}
    </div>
  );
};
interface CheckoutFormProps {
  stripe: any;
  elements: any;
  setCards: any;
  cards: any;
  setMode: any;
  setAddCard: any;
  cardMode: string;
  customerId: string;
}
const CheckoutForm: FC<CheckoutFormProps> = ({
  stripe,
  elements,
  setCards,
  cards,
  cardMode,
  setAddCard,
  setMode,
  customerId,
}) => {
  const [cardNumber, setCardNumber] = useState({
    empty: false,
    complete: false,
    error: "",
  });
  const [cardCVV, setCardCVV] = useState({
    empty: false,
    complete: false,
    error: "",
  });
  const [cardExpiry, setCardExpiry] = useState({
    empty: false,
    complete: false,
    error: "",
  });

  const [cardHolderName, setCardHolderName] = useState({
    value: "",
    error: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrors] = useState("");
  const onchangeCardNumberElement = (number: any) => {
    let detail_empty = number.empty;
    let detail_complete = number.complete;
    let detail_error = !number.error ? "" : number.error.message;
    setCardNumber((prev) => {
      return {
        ...prev,
        empty: detail_empty,
        complete: detail_complete,
        error: detail_error,
      };
    });
    if (detail_empty) {
      setCardNumber((prev) => {
        return {
          ...prev,
          complete: detail_complete,
          error: ErrorMessage.Payment.CardNumberEmpty,
        };
      });
    } else if (!detail_complete) {
      setCardNumber((prev) => {
        return {
          ...prev,
          complete: detail_complete,
          error: detail_error
            ? detail_error
            : ErrorMessage.Payment.CardNumberIncomplete,
        };
      });
    }
  };
  const onchangeCardExpiryElement = (expiry: any) => {
    let detail_empty = expiry.empty;
    let detail_complete = expiry.complete;
    let detail_error = !expiry.error ? "" : expiry.error.message;
    setCardExpiry((prev) => {
      return {
        ...prev,
        empty: detail_empty,
        complete: detail_complete,
        error: detail_error,
      };
    });
    if (detail_empty) {
      setCardExpiry((prev) => {
        return {
          ...prev,
          complete: detail_complete,
          error: ErrorMessage.Payment.CardExpirationEmpty,
        };
      });
    } else if (!detail_complete) {
      setCardExpiry((prev) => {
        return {
          ...prev,
          complete: detail_complete,
          error: detail_error
            ? detail_error
            : ErrorMessage.Payment.CardExpirationIncomplete,
        };
      });
    }
  };
  const onchangeCardCVVElement = (cvv: any) => {
    let detail_empty = cvv.empty;
    let detail_complete = cvv.complete;
    let detail_error = !cvv.error ? "" : cvv.error.message;
    setCardCVV((prev) => {
      return {
        ...prev,
        empty: detail_empty,
        complete: detail_complete,
        error: detail_error,
      };
    });
    if (detail_empty) {
      setCardCVV((prev) => {
        return {
          ...prev,
          complete: detail_complete,
          error: ErrorMessage.Payment.CardCVVEmpty,
        };
      });
    } else if (!detail_complete) {
      setCardCVV((prev) => {
        return {
          ...prev,
          complete: detail_complete,
          error: detail_error
            ? detail_error
            : ErrorMessage.Payment.CardCVVIncomplete,
        };
      });
    }
  };

  const handleCardHolderName = (event: any) => {
    let value = event.target.value;
    if (!value) {
      setCardHolderName((prev) => {
        return {
          ...prev,
          value,
          error: ErrorMessage.Payment.CardHolderNameEmpty,
        };
      });
    } else {
      setCardHolderName((prev) => {
        return {
          ...prev,
          value,
          error: "",
        };
      });
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    if (cardHolderName.value) {
      setIsLoading(true);
      setIsLoading(true);
      const cardElement = elements.getElement(
        CardNumberElement,
        CardExpiryElement,
        CardCvcElement
      );
      const { error, token } = await stripe.createToken(cardElement, {
        name: cardHolderName.value,
      });

      if (error) {
        setIsLoading(false);
      } else {
        let token_id = token.id;
        setCardHolderName((prev) => {
          return {
            ...prev,
            value: "",
          };
        });
        addCard(token_id);
      }
    } else {
      setCardHolderName((prev) => {
        return {
          ...prev,
          error: ErrorMessage.Payment.CardHolderNameEmpty,
        };
      });
    }
  };
  const addCard = async (cardToken: any) => {
    let session_token = getCook(SESSION_TOKEN);
    if (cardToken) {
      let payload = {
        customerId,
        cardToken,
      };
      const customeSorce = await customerSourceService(payload, session_token);
      if (customeSorce.code == 201) {
        let arr = [];
        arr.push(...cards, customeSorce.data);
        setCards(arr);
        setIsLoading(false);
        setAddCard(false);
      }
    }
  };
  const clearElements = () => {
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCVVElement = elements.getElement(CardCvcElement);
    if (cardNumberElement) {
      cardNumberElement.clear();
      elements.getElement(CardNumberElement);
      setCardNumber((prev) => {
        return {
          ...prev,
          error: "",
        };
      });
    }
    if (cardExpiryElement) {
      cardExpiryElement.clear();
    }
    if (cardCVVElement) {
      cardCVVElement.clear();
    }

    setCardHolderName((prev) => {
      return {
        ...prev,
        value: "",
      };
    });
  };

  return (
    <>
      <form className="w-full">
        {errorMsg && (
          <div
            className="alert alert-login-payment top-alert text-dark-secondary"
            style={{ ...style_Add_Btn }}
          >
            {errorMsg}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4">
          <div className="mb-7 relative">
            <label
              className="block text-[#000000c9] dark:text-[#ffffff63] text-md mobileView:text-md font-semibold mb-2 font-['Poppins'] "
              htmlFor="email"
            >
              Card Number
            </label>
            <CardNumberElement
              className={`"w-full placeholder:black dark:placeholder-white rounded-md font-['Poppins']
                      leading-tight py-2 px-3 focus:outline-none 
                      focus:shadow-outline h-12 bg-white dark:bg-[#343734] border-2 dark:border-none border-[#b9bcb56b] text-black dark:text-white xxs:text-[14px]"
                    `}
              onChange={onchangeCardNumberElement}
              options={{
                placeholder: "Card Number",
                iconStyle: "solid",
                classes: {
                  focus: "focus",
                  empty: "empty",
                  invalid: "invalid",
                },
                style: customStyle,
                disabled: isLoading,
              }}
            />
            {cardNumber.error && <CardErrorMsg _error={cardNumber.error} />}
          </div>
        </div>

        <div className="mb-7 relative">
          <label
            className="block text-[#000000c9] dark:text-[#ffffff63] text-md mobileView:text-md font-semibold mb-2 font-['Poppins'] "
            htmlFor="email"
          >
            Expire Date
          </label>
          <CardExpiryElement
            className={`              className="w-full placeholder:black dark:placeholder-white rounded-md font-['Poppins']
                      leading-tight py-2 px-3 focus:outline-none 
                      focus:shadow-outline h-12 bg-white dark:bg-[#343734] border-2 dark:border-none border-[#b9bcb56b] text-black dark:text-white xxs:text-[14px]"`}
            onChange={(card) => onchangeCardExpiryElement(card)}
            options={{
              classes: {
                focus: "focus",
                empty: "empty",
                invalid: "invalid",
              },
              placeholder: "Expiry date (MM/YY)",
              style: customStyle,
              disabled: isLoading,
            }}
          />
          {cardExpiry.error && <CardErrorMsg _error={cardExpiry.error} />}
        </div>

        <div className="mb-7 relative">
          <label
            className="block text-[#000000c9] dark:text-[#ffffff63] text-md mobileView:text-md font-semibold mb-2 font-['Poppins'] "
            htmlFor="email"
          >
            CVV/CVC
          </label>
          <CardCvcElement
            className={`              className="w-full placeholder:black dark:placeholder-white rounded-md font-['Poppins']
                      leading-tight py-2 px-3 focus:outline-none 
                      focus:shadow-outline h-12 bg-white dark:bg-[#343734] border-2 dark:border-none border-[#b9bcb56b] text-black dark:text-white xxs:text-[14px]"
                    `}
            onChange={(card) => onchangeCardCVVElement(card)}
            options={{
              placeholder: "Security Code (CVV)",
              style: customStyle,
              disabled: isLoading,
            }}
          />
          {cardCVV.error && <CardErrorMsg _error={cardCVV.error} />}
        </div>
        <div className="mb-7 relative">
          <label
            className="block text-[#000000c9] dark:text-[#ffffff63] text-md mobileView:text-md font-semibold mb-2 font-['Poppins'] "
            htmlFor="email"
          >
            Cardholder Name
          </label>
          <Input
            type="text"
            placeholder="User Name"
            value={cardHolderName.value}
            onChange={handleCardHolderName}
            className="w-full placeholder:black dark:placeholder-white rounded-md font-['Poppins']
                                      leading-tight py-2 px-5 focus:outline-none 
                                      focus:shadow-outline h-12 bg-white dark:bg-[#343734] border-2 dark:border-none border-[#b9bcb56b] text-black dark:text-white xxs:text-[14px]"
          />
          <Avatar
            path={LightImage.whiteUserIcon}
            className="absolute w-4 bottom-[13px] right-2"
          />
        </div>
        <label className="custom-label flex p-2">
          <div className="bg-white shadow w-6 h-5 rounded-md xxs:h-4 mt-[5px] p-1 flex justify-center items-center mr-2 relative">
            <Input type="checkbox" placeholder="" className="hidden" />
            <img
              src={ImagePath.checkedIcon}
              className="hidden absolute w-10 h-10 pointer-events-none"
            />
          </div>
          <span className="text-black cursor-pointer dark:text-white font-['Poppins'] font-semibold xxs:text-[14px] ">
            {" "}
            You agree to abide by the term of use and the privacy statement
          </span>
        </label>
        <div className="border border-black dark:border-white pb-1 rounded-xl mt-3 xxxs:w-full xxxs:mr-0">
          <Button
            className={
              "bg-black dark:bg-white flex items-center font-bold justify-center  text-white dark:text-black border border-black dark:border-white w-full p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl m-0 dark:border-1"
            }
            text="Save Card"
            isLoading={isLoading}
            disabled={isLoading}
            onClick={(e: any) => {
              handleSubmit(e);
            }}
          />
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
