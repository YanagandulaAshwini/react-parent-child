import React, { useState } from 'react';
export default function AddTodo(props){
    const[title,setTitle] = useState('')
    const[description,setDescription] = useState('')
    const getTitle = (e) => {
        setTitle(e.target.value);
        // console.log(title);
    }
    const onSubmitHandler = () => {
        const todo = {title:title,description:description};
        // props.name
        props.addTodo(todo)
    }
    return(
        <div className="row mt-5">
            <div className = "col-md-4 offset-3">
                <div className = "form-group">
                    <input type = "text" onChange = {getTitle} placeholder = "title" className = "form-control">

                    </input>
                </div>
                <div className = "form-group">
                    <input type = "text" onChange = {(e) => [setDescription(e.target.value)]} placeholder = "description" className = "form-control">

                    </input>
                </div>
                <div className = "form-group">
                    <button className = "btn btn-success" onClick = {onSubmitHandler}>Add Todo</button>
                </div>
            </div>
        </div>
    )
}