import {UserState, userState} from '../states/userState'
import { LOGIN, UserActionTypes,ADD_FAMILY, 
    // DELETE_FAMILY 
} from '../types';


export  function userReducer(state = userState, action:UserActionTypes): UserState {
    
    switch (action?.type) {   
        case LOGIN :
            return{
                ...state,
                typeUser: action?.payload.typeUser,
                name:action?.payload.name,
                firstLastName:action?.payload.firstLastName,
                secondLastName:action?.payload.secondLastName,
                typeDocument:action?.payload.typeDocument,
                dni:action?.payload.dni,
                dayborn:action?.payload.dayborn,
                genere:action?.payload.genere,
            }
        case ADD_FAMILY:{
            return{
                ...state,
                insured:[...state.insured,{
                    typeFamily:action?.payload.typeFamily,
                    dayBorn:action?.payload.dayBorn,
                }]
            }
        }
        // case DELETE_FAMILY:{
        //     return{
        //         ...state,
        //         insured:[action?.payload.newFamily]
        //     }
        // }
        default:
           return state;
    }
}

export default userReducer