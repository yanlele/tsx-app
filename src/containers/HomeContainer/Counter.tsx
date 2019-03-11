import React, {FunctionComponent, useContext} from 'react';
import {myContext} from './reducer';

const Counter: FunctionComponent<{}> = () => {

  const { stateData, dispatch } = useContext(myContext);
  return (
      <div>
        Counter Count: {stateData.count}
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
  );
};

export default Counter;
