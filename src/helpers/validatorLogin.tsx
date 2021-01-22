interface Form{
    typedni:number;
    phone:string;
    date:string;
    dni:string;
    permitionsOne:boolean;
    permitionsTwo:boolean;
}

const onlyNumber = /^[0-9]+$/

export const validatorLogin = (formulario:Form) =>{

    const { phone,dni,permitionsOne,permitionsTwo} = formulario

    console.log(onlyNumber.test(dni));

    let error = {
        dni:'',
        typedni:'',
        phone:'',
        permitionsOne:'',
        permitionsTwo:''
    }

    if(dni === ''){
        error.dni = "Por favor ingrese número de documento"
    }else if(!onlyNumber.test(dni)){
        error.dni = "Por favor ingrese solo números"
    }else if(dni.trim().length < 8 || dni.trim().length > 8){
        error.dni = "Por favor ingrese 8 digitos"
    }else{
        error.dni = ""
    }

    if(phone === ''){
        error.phone = "Por favor ingrese número celular"
    }else if(!onlyNumber.test(phone)){
        error.phone = "Por favor ingrese solo números"
    }else if(phone.trim().length < 9 || phone.trim().length > 9){
        error.phone = "Por favor ingrese 9 digitos"
    }else{
        error.phone = ""
    }

    if(!permitionsOne){
        error.permitionsOne = "Por favor aceptar los terminos"
    }else{
        error.permitionsOne = ""
    }
    if(!permitionsTwo){
        error.permitionsTwo = "Por favor aceptar los terminos"
    }else{
        error.permitionsTwo = ""
    }
    

    if(error.dni === '' && error.phone === '' && permitionsOne && permitionsTwo){
        return true
    }else{
        return error
    }

}