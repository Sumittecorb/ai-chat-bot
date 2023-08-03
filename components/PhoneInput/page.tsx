import { FC } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumber: FC<{
  field?: any;
  ref: any;
  prefix: string;
  onChange?: any;
  value?: any;
  countryCodeEditable: boolean;
  disabled?:boolean
}> = ({ field, ref, onChange, value, countryCodeEditable, prefix,disabled }) => {
  return (
    <PhoneInput
      {...field}
      country={"in"}
      placeholder="Phone Number"
      onChange={onChange}
      prefix={prefix}
      value={value}
      disabled={disabled}
      // renderStringAsFlag={renderStringAsFlag}
      countryCodeEditable={countryCodeEditable}
      inputProps={{
        ref,
        required: true,
        autoFocus: true,
      }}
    />
  );
};

export default PhoneNumber;
