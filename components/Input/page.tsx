import { FC } from "react";

const Input: FC<{
  className?: string;
  type: string;
  placeholder: string;
  checked?: boolean;
  name?: string;
  register?: any;
  onChange?: any;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
  id?:string;
  accept?:any;
}> = ({
  className,
  type,
  placeholder,
  checked,
  name,
  register,
  onChange,
  disabled,
  readOnly,
  value,
  id,
  accept
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        checked={checked}
        name={name}
        onChange={onChange}
        {...register}
        readOnly={readOnly}
        disabled={disabled}
        accept={accept}
        id={id}
      />
    </>
  );
};

export default Input;
