
import { UserState, InsuredType} from '../states/userState'

export const LOGIN = "LOGIN"
export const ADD_FAMILY = "ADD_FAMILY"
export const DELETE_FAMILY = "DELETE_FAMILY"


interface Login {
    type: typeof LOGIN
    payload: UserState
}

interface AddFamily {
    type: typeof ADD_FAMILY
    payload: InsuredType
}
interface DeleteFamily {
    type: typeof DELETE_FAMILY
    payload: InsuredType
}

export type UserActionTypes = Login | AddFamily | DeleteFamily
  