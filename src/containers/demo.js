import React from "react";
import { useDispatch, useSelector} from "react-redux";

export default () => {
    const data = useSelector(i=>i.counter.count);
    const dispatch = useDispatch();
    console.log(data);
    return (
        <div>
      <h1>Counter:{data}</h1>
      <button onClick={()=>{dispatch({ type: 'INCREMENT' })}}>Increment</button>
    </div>
    )
}