import React from 'react'
import { AddFamily } from '../../../actions/userAction'
import { userContext } from '../../../context/userContext'
import { toStringDate } from '../../../helpers/textDate'
import './FamilySure.scss'

interface Sure{
    typeFamily:number;
    dayBorn: string;
}

const FamilySure = () => {


    const {value,dispatch} = React.useContext(userContext)

    const [sure, setSure] = React.useState<Sure>({
        typeFamily:1,
        dayBorn: toStringDate(new Date())
    })  

    const { typeFamily,dayBorn } = sure

    const handleChange = (e:any) =>  setSure({...sure,[e.target.name]:e.target.value})
    
    const handleAdd = async() => {
        await dispatch(AddFamily(sure))
        setSure({
            typeFamily:1,
            dayBorn: toStringDate(new Date())
        })
    }

    // const handleRemove = async(index:string) => {
    //     // console.log(index);
    //     // console.log(value.insured);
    //     // const newArray = value.insured.filter((item)=> item.dayBorn !== index)
    // }

    return (
        <div className="textsubtitle">
            <h3>Datos familiares</h3>
            <div style={{display:'flex',alignContent:'center'}}>
            <div className="input__date" style={{display:'flex'}}>
            <select name="typeFamily" value={typeFamily} onChange={handleChange}>
            <option value={1}>Conyuge</option>
            <option value={2}>Hijo</option>
            </select>
            </div>
            <div className="input" style={{width:'150px'}}>
            <input type="date" onChange={handleChange} name="dayBorn" value={dayBorn}></input>
             <label>Fecha de nacimiento</label>
            </div>
            <button className="button__add" onClick={handleAdd}>Agregar</button>
            </div>
            {
                value.insured.map((item, index) => {
                    return (
                        <div key={index} className="container_family">
                            <h3 className="family">{item.typeFamily === 1 ? "Conyuge" : "Hijo"}</h3>
                            <h3 className="familyborn">{item.dayBorn}</h3>
                            <button className="button__remove" 
                            // onClick={() => handleRemove(item.dayBorn)}
                            >Eliminar</button>
                        </div>
                    )
                })
            }
        
        </div>
    )
}

export default FamilySure
