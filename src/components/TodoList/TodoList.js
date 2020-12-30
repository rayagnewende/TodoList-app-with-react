import React, {Component}  from "react"; 
import TodoItem from "../TodoItem/TodoItem"; 

class TodoList extends Component {

    render() {
        
        const { handleDelete, handleUpdate,items, clearList} = this.props ; 
        return (
            <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">Todo List</h3>
                    { items.map( item => {
                        return (
                            <TodoItem 
                               key={item.id}
                               item = {item.item}
                               handleDelete={() => handleDelete(item.id)}
                               handleUpdate= {() => handleUpdate(item.id) }
                            />
                        )
                    })}
                    <button className="btn btn-block btn-danger mt-5 text-uppercase" onClick={clearList}>clearlist</button>
            </ul>
        )
    }
}


export default TodoList ; 