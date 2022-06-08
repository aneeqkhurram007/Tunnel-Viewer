import { createContext, useContext, useReducer } from "react";
const State = createContext();
export const StateProvider = ({ reducer, state, children }) => (
    <State.Provider value={useReducer(reducer, state)}>
        {children}
    </State.Provider>
)
export const useStateValue = () => useContext(State)