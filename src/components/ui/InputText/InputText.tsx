import React from 'react'
import './InputText.scss'

interface InputTextProps {
    label:string;
    value:string;
    name:string;
    onChange:any;
}

const InputText = (props:InputTextProps) => {

    const { label,value,name,onChange } = props
    console.log(value);

    return (
        <div className="input">
            <input type="text" required 
            name={name}
            value={value}
            onChange={onChange}
            ></input>
            <label>{label}</label>
        </div>
    )
}

export default InputText
