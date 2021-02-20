import React, { useState } from 'react'
export default function DisplayFun(props){
    const [name,setName]=useState('');
    const getName = (e) => {
        setName(e.target.value);
    }
   const onSubmitHandler=()=>{
     const fun={name:name};
     props.addRow(fun);
   }
    return(
        <div className="row-mt-4">
            <div className="col-md-4 offset-3">
                 <div className = "form-group">
                    <input type = "text" onChange = {getName} placeholder = " enter Name" className = "form-control"></input>       
                 </div>
                 <div className = "form-group">
                    <button className = "btn btn-success" onClick = {onSubmitHandler}>Add</button>
                </div>
           </div>
        </div>
    )
}