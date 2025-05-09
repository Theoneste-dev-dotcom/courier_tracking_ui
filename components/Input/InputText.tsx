import { useState } from "react"

export interface InputTextProps{
    labelTitle: string
    labelStyle?: string
    type?: string
    containerStyle?: string
    defaultValue: string
    placeholder?: string
    updateFormValue: (value: any) => void
    updateType: string
}

function InputText({labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType}:InputTextProps){

    const [value, setValue] = useState(defaultValue)

    const updateInputValue = (val:string) => {
        setValue(val)
        updateFormValue({updateType, value : val})
    }

    return(
        <div className={labelTitle == 'image' ? 'hidden' : `form-control w-full ${containerStyle} `}>
            <label className={labelTitle == "image"? 'hidden' : 'label'}>
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <input type={type || "text"} value={value} placeholder={placeholder || ""} onChange={(e) => updateInputValue(e.target.value)} className="input  input-bordered w-full text-base-content " />
        </div>
    )
}


export default InputText