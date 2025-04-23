// components/PhoneInput.js
import React, { useState } from 'react';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import styles
// import { useFormContext } from 'react-hook-form'; // Optional for form integration
import { InputTextProps } from './InputText';
import { isValidPhoneNumber, } from 'libphonenumber-js';
import { E164Number } from 'libphonenumber-js';
const PhoneInputComponent = ({labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType}:InputTextProps) => {
//   const { register, setValue, watch } = useFormContext(); // For react-hook-form
const [value, setValue] = useState<E164Number | undefined>(defaultValue as E164Number);
const [error, setError] = useState<string | null>(null);


      const [phoneValue, setPhoneValue] = useState(defaultValue); // State for phone input


      const validateRwandanPhoneNumber = (phone: E164Number): string | null => {
        if (!phone) {
          return 'Phone number is required';
        }
    
        // Check if the number is valid for Rwanda
        if (!isValidPhoneNumber(phone, 'RW')) {
          return 'Invalid Rwandan phone number';
        }
    
        // Parse the phone number to extract the national number
        const parsedNumber = parsePhoneNumber(phone, 'RW');
        const nationalNumber = parsedNumber?.nationalNumber;
    
        // Check for valid prefixes (78, 73, 82, 79)
        const validPrefixes = ['78', '73', '72', '79'];
        const hasValidPrefix = validPrefixes.some((prefix) => nationalNumber?.startsWith(prefix));
    
        if (!hasValidPrefix) {
          return 'Phone number must start with +250 followed by 78, 73, 72, or 79';
        }
    
        return null; // No errors
      };


      const updateInputValue = (val: E164Number) => {
        setValue(val);
      
        // Validate the phone number
        const validationError = validateRwandanPhoneNumber(val);
        setError(validationError);
      
        // Only update the parent form if the number is valid
        if (!validationError) {
          updateFormValue({ updateType, value: val });
        } else {
          // Optionally, send an empty or invalid state to the parent
          updateFormValue({ updateType, value: '' });
        }
      };
  return (
    <div className={`form-control w-full ${containerStyle} `}>
      <label htmlFor="phone" className={"label-text text-base-content mt-4" + labelStyle}>Phone Number (Rwanda)</label>
      <PhoneInput
        international
        defaultCountry="RW" // Set Rwanda as default
        value={value}
        onChange={updateInputValue} // Update state on change
        placeholder="Enter phone number"
        countries={['RW']} 
        className="input  input-bordered w-full text-base-content " // Restrict to Rwanda if needed
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {/* <input
         type={type || "text"} value={value} placeholder={placeholder || ""} onChange={(e) => updateInputValue(e.target.value)} className="input  input-bordered w-full text-base-content "
      /> */}
    </div>
  );
};

export default PhoneInputComponent;