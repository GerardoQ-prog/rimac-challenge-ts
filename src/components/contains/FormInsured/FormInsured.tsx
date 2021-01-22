import React from 'react'
import { userContext } from '../../../context/userContext'
import ButtonPrimary from '../../ui/ButtonPrimary/ButtonPrimary'
import InputDate from '../../ui/InputDate/InputDate'
import InputText from '../../ui/InputText/InputText'
import RadioSure from '../../ui/RadioSure/RadioSure'
import SelectDocument from '../../ui/SelectDocument/SelectDocument'
import FamilySure from '../FamilySure/FamilySure'
import './FormInsured.scss'

type InsuredType = {
    typeFamily: number;
    dayBorn: string;
  }


interface FormInsuredDatos{
    typeDocument:number;
    name:string;
    firstName:string;
    secondLastName:string;
    dayborn:string;
    genere:number;
    typeSure:number;
    insured:InsuredType[];
    dni:string;
}

interface FormInsuredProps{
    handleStepMore:any;
    handleStepLess:any;
    step:number;
}


const FormInsured = (props:FormInsuredProps) => {

    const { step,} = props

    const {value} = React.useContext(userContext)

    const [insured, setInsured] = React.useState<FormInsuredDatos>({
        typeDocument:value.typeDocument,
        name: value.typeUser === 1 ? value.name : '',
        firstName:value.firstLastName,
        secondLastName:value.secondLastName,
        dayborn:value.dayborn,
        genere:value.genere,
        typeSure:value.typeSure,
        insured:value.insured,
        dni:value.dni
    })

    const [activeButton, setActiveButton] = React.useState<boolean>(true)

    const { typeDocument,name,firstName,secondLastName,dayborn,genere,dni,typeSure} = insured

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>  setInsured({...insured,[e.target.name]:e.target.value})

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {

    }    

    React.useEffect(()=>{
        if(value.typeSure === 1){
            if(dni !== '' && name !== '' && firstName !== '' && secondLastName !=='' && typeSure !== 0){
                setActiveButton(false)
            }
        }else{
            if(name !== ''  && typeSure !== 0 ){
                setActiveButton(false)
            }
        }
    },[insured])

    return (
        
        <div className="container_formseguro">
            {
                value.typeUser === 1 &&
                (
                    <div>
                    <div className="container__presentation">
                    <div className="container__step">
                        <h3 style={{color:'red'}} className="arrow">{"<"}</h3>
                        <p style={{color:'red'}}>Paso {step}</p><p> de 7</p>
                    </div>
                    <h1 className="title">Hola <strong style={{color:'red'}}>{insured.name}</strong></h1>
                    <p className="title">Valida que los datos sean correctos.</p>
                    </div>
                    {/* <br></br> */}
                    <div style={{padding:'20px'}}>
                    <h3 className="textsubtitle">Datos personales del titular</h3>
                    <SelectDocument onChange={handleChange} nameDni="dni" dni={dni} nameType="typeDocument" typeDni={typeDocument}></SelectDocument>
                    <InputText label="Nombre" name="name" value={name} onChange={handleChange}></InputText>
                    <InputText label="Apelido Paterno" name="firstName" value={firstName} onChange={handleChange}></InputText>
                    <InputText label="Apellido Materno" name="secondLastName" value={secondLastName} onChange={handleChange}></InputText>
                    <InputDate label="Fecha de Nacimiento" name="dayborn" value={dayborn} onChange={handleChange}></InputDate>           
                    <RadioSure 
                    title="Genero" 
                    name="genere"
                    value={genere}
                    labelOne="Masculino"
                    labelTwo="Femenino"
                    onChange={handleChange}></RadioSure>
                    </div>
                    </div>
                )
            }
            {
                value.typeUser === 2 &&
                (
                    <div>
                    <div className="container__presentation">
                    <div className="container__step">
                        <h3 style={{color:'red'}} className="arrow">{"<"}</h3>
                        <p style={{color:'red'}}>Paso {step}</p><p> de 7</p>
                    </div>
                    <h1 className="title">Hola, <strong style={{color:'red'}}>!empezemos¡</strong></h1>
                    <p className="title">Cuentanos un poco sobre ti</p>
                    {/* <br></br> */}
                    </div>
                    <div style={{padding:'20px'}}>
                    <h3 className="textsubtitle">Ingresa tu nombre</h3>
                    <InputText label="Nombre y Apellido" name="name" value={name} onChange={handleChange}></InputText>
                    </div>
                    </div>
                )
            }
            <div style={{padding:'20px'}}>
             <RadioSure 
            title="¿A quien vamos a asegurar" 
            name="typeSure"
            value={typeSure}
            labelOne="Solo a mi"
            labelTwo="A mi y a mi familia"
            onChange={handleChange}></RadioSure>
            {
                typeSure == 2 &&
                <FamilySure/>
            }
            <div style={{display:'flex',justifyContent:'flex-end',maxWidth:'700px'}}>
                <ButtonPrimary disabled={activeButton} onClick={handleSubmit} ></ButtonPrimary>
            </div>
            </div>
        </div>

    )
}

export default FormInsured
