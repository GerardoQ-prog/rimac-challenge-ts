import { UserState ,InsuredType} from '../states/userState'
import { UserActionTypes,LOGIN , ADD_FAMILY ,DELETE_FAMILY} from '../types/index'


export function LoginuSER(newSession: UserState): UserActionTypes {
  return {
    type: LOGIN,
    payload: newSession
  }
}

export function AddFamily(newFamily:InsuredType):UserActionTypes{
  return {
    type: ADD_FAMILY,
    payload: newFamily
  }
}

export function DeleteFamily(newFamily:any){
  return {
    type: DELETE_FAMILY,
    payload: newFamily
  }
}