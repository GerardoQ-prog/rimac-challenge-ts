import React from 'react'
import './InputChecked.scss'


interface InputCheckedProp{
    checked:boolean;
    name:string;
    label:string;
    underline:string;
    onChange:any;
}

const InputChecked = (props:InputCheckedProp) => {

    const { checked,label,underline,onChange,name } = props



    return (
        <div className="form-checkbox">
           <input type="checkbox" checked={checked} onChange={onChange} name={name}></input>
           <label>{label}<a>{underline}</a></label>
        </div>
    )
}

export default InputChecked
