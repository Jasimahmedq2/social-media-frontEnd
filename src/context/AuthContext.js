import { useReducer } from "react";
import { createContext } from "react";
import ReducerContext from "./ContextReducer";

 const initial_state = {
  user: null,
  isFetching: false,
  error: false
};

export const AuthContext = createContext(initial_state)

export const AuthProvider = ({children}) => {
const [state, dispatch] = useReducer(ReducerContext, initial_state)
return (
  <AuthContext.Provider value={{
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    dispatch
  }}>
    {children}
  </AuthContext.Provider>
)
}