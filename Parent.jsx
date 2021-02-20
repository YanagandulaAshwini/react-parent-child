import React, { useState } from 'react';
import Child from './Child'
import DisplayFun from './DisplayFun'
export default function Parent(){
    const [names,setNames]=useState([{name:'abc'}]);
const function1=(data)=>{
    setNames([...names,data]);
}
return(
    <div className  = "container">
    <DisplayFun addRow = {function1}/>
    <div className = "row">
        {
            names.map(item =>
                <div className = "col md-4 offset-3">
                    <Child  name= {item.name}/>
                </div>
                )
        }
    </div>
</div>
)
    }