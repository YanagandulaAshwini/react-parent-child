import React, {useState} from 'react';
import AddTodo from './AddTodo';
import TodoItem from  './TodoItem';
export default function TodoList(){
    const [todos,setTodos] = useState([
        {title:'Monday',description:'start for work'},
        {title:'Tuesday',description:'start for work 2'},
    ]);
    const pFunction = (data) => {
        setTodos([...todos,data])

    }
    const name = "Legato";
    return (
    <div className  = "container">
        <AddTodo addTodo = {pFunction}/>
        <div className = "row">
            {
                todos.map((item,i) =>
                    <div className = "col md-4 offset-3">
                        <TodoItem id={i+1} title = {item.title} description = {item.description}/>
                    </div>
                    )
            }
        </div>
    </div>
    )
}