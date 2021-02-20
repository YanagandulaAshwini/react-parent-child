import React from 'react';
export default function TodoItem(props){
    return(
        <div className = "alert alert-primary">
            <h5>{props.id}</h5>
            <h4>{props.title}</h4>
            <h3>{props.description}</h3>
            
        </div>
    )
}