import React, { useReducer } from 'react';

import "./style.css";


const reducer=(state,action)=>{

    if(action.type==="INCR"){
        state= state+1;
    }
    if(state>0 && action.type==="DECR"){
        state=state-1;
    }
    return state;
}



const UseReducer=()=>{

    const intialdata=10;
    const[currrentstate, dispatch]= React.useReducer(reducer,intialdata);

    return(
        <div>
            <div className="center_div">
                <p>{currrentstate}</p>
                <div className="button2" onClick={()=>dispatch({type:"INCR"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={()=>dispatch({type:"DECR"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </div>
    )
}

export default UseReducer;