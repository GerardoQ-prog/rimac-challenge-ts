import React from 'react'

interface RadioSureProp{
    title:string;
    labelOne:string;
    labelTwo:string;
    name:string;
    value:number;
    onChange:any;
}

const RadioSure = (props:RadioSureProp) => {

    const { title, labelOne,labelTwo,name,onChange} = props

    return (
        <div className="textsubtitle">
            <h3>{title}</h3>
            <div >   
                <input type="radio" id="male" name={name} value={1}  onChange={onChange}></input>
                <label >{labelOne}</label>
            </div>
            <div>
                <input type="radio" id="female" name={name} value={2} onChange={onChange}></input>
                <label >{labelTwo}</label>
            </div>  
        </div>
    )
}

export default RadioSure
