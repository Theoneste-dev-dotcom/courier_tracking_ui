import { useState } from "react"
interface PropType {
     
    labelTitle: string;
     labelStyle?: string;
     type?: string;
     containerStyle?: string;
     defaultValue: boolean;
     placeholder?: string;
     updateFormValue:  (value: any) => void
     updateType?: string;
 
}

function ToogleInput({labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType}:PropType){

    const [value, setValue] = useState(defaultValue)

    const updateToogleValue = () => {
        setValue(!value)
        updateFormValue({updateType, value : !value})
    }

    return(
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label cursor-pointer">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
                <input type="checkbox" className="toggle" checked={value}  onChange={(e) => updateToogleValue()}/>
            </label>
        </div>
    )
}


export default ToogleInput
