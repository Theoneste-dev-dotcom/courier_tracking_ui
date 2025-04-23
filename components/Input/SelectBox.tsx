import axios from "axios";
import React, { useState, useEffect } from "react";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";

interface PropType {
     
  labelTitle: string;
   labelStyle?: string;
   type?: string;
   containerStyle?: string;
   labelDescription?:string
   defaultValue?: string;
   placeholder?: string;
   options?:{
    name:string,
    value:string
   }[],
   updateFormValue:  (value: any) => void
   updateType?: string;

}
function SelectBox(props: PropType) {
  const {
    labelTitle,
    labelDescription,
    defaultValue,
    containerStyle,
    placeholder,
    labelStyle,
    options,
    updateType,
    updateFormValue,
  } = props;

  const [value, setValue] = useState(defaultValue || "");

  const updateValue = (newValue: any) => {
    updateFormValue({ updateType, value: newValue });
    setValue(newValue);
  };


  return (
    <div className={`inline-block ${containerStyle}`}>
      <label className={`label  ${labelStyle}`}>
        <div className="label-text">
          {labelTitle}
          {labelDescription && (
            <div className="tooltip tooltip-right" data-tip={labelDescription}>
              <InformationCircleIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </label>

      <select
        className="select select-md  select-bordered w-full text-base-content"
        title="."
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      >
        <option disabled value="PLACEHOLDER" className="text-base-content">
          {placeholder}
        </option>
        {options?.map((o, k) => {
          return (
            <option className="text-base-content" value={o.value} key={k}>
              {o.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectBox;
