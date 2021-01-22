import React from 'react'
import { toStringDate } from '../../../helpers/textDate'

interface InputDateProps{
    onChange:any;
    name:string;
    value:string;
    label:string;
}

const InputDate = (props:InputDateProps) => {

    const { onChange,label,name,value} = props

    return (
        <div className="input">
        <input type="date" required value={value} onChange={onChange} name={name} max={toStringDate(new Date())}></input>
        <label>{label}</label>
        </div>
    )
    
}

export default InputDate
