import React from 'react';

import "./style.css";

const UseEffect=()=>{

    const [MyNum,setMyNum]=React.useState(0);

    React.useEffect(()=>{
        document.title=`Chats(${MyNum})`;
        
    });

    

    return(
        <div>
            <div className="center_div">
                <p>{MyNum}</p>
                <div className="button2" onClick={()=>{setMyNum(MyNum+1)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={()=>{ MyNum <= 0 ?  setMyNum(0):setMyNum(MyNum-1)}}>
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

export default UseEffect;