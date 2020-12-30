import React, {Component}  from "react"; 


class TodoInput extends Component {

    render() {
        const { item, handleInput, formSubmit, editItem } = this.props ;

        return (
            <div className="card card-body my-3">
               <form onSubmit={formSubmit}>
                    <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book"></i>
                                </div>
                            </div>
                            <input 
                                type="text"  
                                name="item"  
                                className="form-control text-capitalize"
                                placeholder="add an item" 
                                value={item}
                                onChange={handleInput}
                            />
                            { 
                                editItem ? 
                                <button 
                                type="submit"
                                 className="btn btn-block btn-success mt-3 text-uppercase" >Edit Item</button>
                                 :
                                 <button 
                                 type="submit"
                                  className="btn btn-block btn-primary mt-3 text-uppercase" >Add Item</button>
                            }
                         
                    </div>
               </form>
            </div>
        )
    }
}


export default TodoInput ; 