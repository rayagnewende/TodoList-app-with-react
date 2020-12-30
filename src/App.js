import React, {Component}  from "react"; 
import './App.css';
import TodoInput from "./components/TodoInput/TodoInput"; 
import TodoList from "./components/TodoList/TodoList"; 
import {v1 as uuid} from "uuid"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends Component  {

  state = {
    items: [ 
      { id:1 , item:"work with react"}, 
      { id:2 , item:"work with angular"}
    ], 
    id:uuid(), 
    item:"", 
    editItem:false

  }

  handleInput = (event) => {
    this.setState({
      item:event.target.value
    })
  }
  formSubmit = (event) => {
    event.preventDefault(); 

    const newItem = { id:uuid(), item:this.state.item}; 
    const updatedItems = [...this.state.items, newItem]; 

    this.setState({
      items: updatedItems, 
      editItem: false
    }); 

  }

  updateItem = (id) => {
    const filteredItems = this.state.items.filter( item => item.id !== id) ; 
    const selectedItem = this.state.items.filter( item => item.id === id) ; 

  
    this.setState({
      items:filteredItems, 
      item:selectedItem[0].item, 
      id: id , 
      editItem: true
    }); 

  }
  deleteItem = (id) => {
    const items = this.state.items ; 

    const newItems = items.filter( item => {
      return item.id !== id
    }); 

    this.setState({
      items:newItems
    }); 


  }

  clearList = () => {

    const items = []; 
    this.setState({
      items:items
    }); 
  }
  render(){
  return (
    <div className="App">
       <div className="container">
            <div className="row">
                  <div className="col-10 mx-auto col-md-8 mt-5">
                     <h3 className="text-capitalize text-center">Add Todo</h3>
                     <TodoInput  
                        handleInput={this.handleInput}
                        formSubmit={this.formSubmit}
                        item={this.state.item}
                        editItem={this.state.editItem}
                     />
                     <TodoList 
                            handleDelete={this.deleteItem}
                            handleUpdate={this.updateItem}
                            items={this.state.items}
                            clearList={this.clearList}
                     />
                  </div>
            </div>
       </div>
         
    </div>
  );
}

}

export default App;
