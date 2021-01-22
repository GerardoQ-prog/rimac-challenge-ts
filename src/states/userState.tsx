export type InsuredType = {
    typeFamily: number;
    dayBorn: string;
  }


export interface UserState {
    typeUser: number;
    name: string;
    firstLastName:string;
    secondLastName:string;
    typeDocument: number;
    dni:string;
    typeSure:number;
    insured:InsuredType[];
    dayborn:string;
    genere:number;
}

export const userState : UserState = {
    typeUser: 0,
    name:'',
    firstLastName:'',
    secondLastName:'',
    typeDocument:0,
    dni:'',
    typeSure:0,
    insured:[],
    dayborn:'',
    genere:0
}