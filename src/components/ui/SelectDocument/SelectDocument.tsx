import React from 'react'
import './SelectDocument.scss'

interface SelectDocumentProps{
    nameType:string;
    onChange:any;
    typeDni:number;
    nameDni:string;
    dni:string;
}

const SelectDocument = (props:SelectDocumentProps) => {

    const { nameType,onChange,typeDni,nameDni,dni } =props

    return (
        <div style={{display:'flex'}}>
        <div className="input__date" style={{display:'flex'}}>
        <select name={nameType} value={typeDni} onChange={onChange}>
            <option value={1}>DNI</option>
            <option value={2}>PAS</option>
        </select>
        </div>
        <div className="input__document">
            <input type="text" required value={dni} name={nameDni} onChange={onChange}></input>
            <label>Nro de documento</label>
        </div>
        </div>
    )
}

export default SelectDocument
