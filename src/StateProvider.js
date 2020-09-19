import React, { createContext, useContext, useReducer } from "react";


// Prepares Datalayer
export const StateContext = createContext();

// Wraps your app and provides datalayer to every component inside of our app.
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pulls information from the data layer
export const useStateValue = () => useContext(StateContext);
