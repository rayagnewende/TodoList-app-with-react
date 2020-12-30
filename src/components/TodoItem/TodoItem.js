import React, {Component}  from "react"; 

class TodoItem extends Component {

    render() {
        const { item, handleDelete, handleUpdate } = this.props ; 
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between  my-2">
                <h6>{item}</h6>
                <div className="todo-icons">
                    <span className="mx-2 text-success" onClick={handleUpdate}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
                    
            </li>
        )
    }
}


export default TodoItem ; 