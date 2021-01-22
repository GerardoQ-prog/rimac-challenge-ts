
import { createContext } from 'react';
import { userState, UserState } from '../states/userState';
// import { UserState, } from '../states/userState';

  
export const userContext = createContext<{
    value:UserState;dispatch:React.Dispatch<any>;
  }>({
    value:userState,
    dispatch: () => null
  });