import React, {createContext, useReducer, FunctionComponent} from "react";

const initialState = 0;

function reducer(state: any, action: { type: string, payload?: any }) {
  switch (action.type) {
    case "reset":
      return {count: initialState};
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    default:
      return {count: initialState};
  }
}

// @ts-ignore
const myContext = createContext();

const ContextProvider: FunctionComponent = props => {
  const [stateData, dispatch] = useReducer(reducer, {
    count: initialState,
  });
  return (
      <myContext.Provider value={{stateData, dispatch}}>
        {props.children}
      </myContext.Provider>
  );
};

export {reducer, myContext, ContextProvider};
