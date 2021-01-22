import React from 'react'
import { toStringDate } from '../../../helpers/textDate'
import { validatorLogin } from '../../../helpers/validatorLogin'
// import { getUser } from '../../../services/dataApiUser'
import ButtonPrimary from '../../ui/ButtonPrimary/ButtonPrimary'
import InputChecked from '../../ui/InputChecked/InputChecked'
import InputDate from '../../ui/InputDate/InputDate'
import InputText from '../../ui/InputText/InputText'
import SelectDocument from '../../ui/SelectDocument/SelectDocument'
import './FormLogin.scss'
import data from '../../../services/data.json'
import { userContext } from '../../../context/userContext'
import { LoginuSER } from '../../../actions/userAction'
import { useHistory} from 'react-router-dom'

interface Form{
    typedni:number;
    phone:string;
    date:string;
    dni:string;
    permitionsOne:boolean;
    permitionsTwo:boolean;
}

interface FormError{
    phone:string;
    dni:string;
    permitionsOne:string;
    permitionsTwo:string;
}

const FormLogin = () => {

    const history = useHistory()

    const [activeButton, setActiveButton] = React.useState<boolean>(false)

    const [errors, setErrors] = React.useState<FormError>({
        dni:'',
        phone:'',
        permitionsOne:'',
        permitionsTwo:''

    })

    const [form, setForm] = React.useState<Form>({
        typedni:1,
        phone:'',
        date:toStringDate(new Date()),
        dni:'',
        permitionsOne:false,
        permitionsTwo:false
    })

    const { phone,date,dni,permitionsOne,permitionsTwo,typedni } = form

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>  setForm({...form,[e.target.name]:e.target.value})

    const handleChangeCheckedOne = (e:React.ChangeEvent<HTMLInputElement>) =>  setForm({...form,[e.target.name]:e.target.checked})

    const {dispatch} = React.useContext(userContext)

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const error = validatorLogin(form)
        console.log(error);
        if(error === true){
            setErrors({
            dni:'',
            phone:'',
            permitionsOne:'',
            permitionsTwo:''})

            // getUser()
            // .then(data => const [user] = data.results)
            // .catch(err => console.log(err))

            console.log(data.dayborn);
            if(data.dni === dni){
                const newSession ={
                    typeUser: 1,
                    name: data.name,
                    firstLastName:data.firstLastName,
                    secondLastName:data.secondLastName,
                    typeDocument: data.typeDcoument,
                    dni:data.dni,
                    typeSure:0,
                    insured:[],
                    dayborn:form.date,
                    genere:data.genere
                }
                await dispatch(LoginuSER(newSession))
                history.push('/seguro')
            }else{
                const newSession ={
                    typeUser: 2,
                    name: '',
                    firstLastName:'',
                    secondLastName:'',
                    typeDocument: form.typedni,
                    dni:form.dni,
                    typeSure:0,
                    insured:[],
                    dayborn:'',
                    genere:0
                }
                await dispatch(LoginuSER(newSession))
                history.push('/seguro')
            }

        }else{
            setErrors(error)
        }
    }
    
    React.useEffect(() => {
        if(dni !=='' && phone !==''){
            setActiveButton(false)
        }else{
            setActiveButton(true)
        }
    },[form,dni,phone])


    return (
        <form className="container__form">
           <div className="form__title">
               <p style={{margin:'0px'}}>Obtén tu </p> 
               <p className="title_strong">seguro ahora</p>
           </div> 
           <p className="form__subtitle">Ingresa los datos para comenzar.</p>

           <SelectDocument nameType="typedni" nameDni="dni" dni={dni} typeDni={typedni} onChange={handleChange}/>
           {errors.dni !== '' && <label className="form__error">{errors.dni}</label>}
           <InputDate onChange={handleChange} label="Fecha de nacimiento" name="date" value={date}/>
           <InputText label="Celular" name="phone" value={phone} onChange={handleChange}/>
           {errors.phone !== '' && <label className="form__error">{errors.phone}</label>}
           <InputChecked onChange={handleChangeCheckedOne} label="Acepto la " underline="Política de Protección de Datos Personales y los Términos y Condiciones." checked={permitionsOne} name="permitionsOne"/>
           {errors.permitionsOne !== '' && <label className="form__error">{errors.permitionsOne}</label>}
           <InputChecked onChange={handleChangeCheckedOne} label="Acepto la " underline="Política de Envío de Comunicaciones Comerciales." checked={permitionsTwo} name="permitionsTwo"/>
           {errors.permitionsTwo !== '' && <label className="form__error">{errors.permitionsTwo}</label>}
           <ButtonPrimary onClick={handleSubmit} disabled={activeButton}/>
           
        </form>
    )
}

export default FormLogin
