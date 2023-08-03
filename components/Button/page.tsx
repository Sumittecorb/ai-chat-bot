import { FC } from "react";

const Button: FC<{
  className?: string;
  text: string;
  onClick?: any;
  id?: string;
  isLoading?: boolean;
  disabled?: boolean;

  
}> = ({ className, text, onClick, id, isLoading,disabled }) => {
  return (
    <>
      {/* <button id={id} className={className} onClick={onClick}>
        {text}
      </button> */}
      {/* <div className="flex items-center justify-center"> */}
      <button
        type="button"
        className={className}
        onClick={onClick}
        id={id}
        disabled={disabled}
      >
        {isLoading ? (
          <>
            Wait
            <svg
              className="w-5 h-5 text-green-500 animate-spin ml-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </>
        ) : (
          text
        )}
      </button>
      {/* </div> */}
    </>
  );
};

export default Button;
