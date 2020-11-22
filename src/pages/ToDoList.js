import React, { Component } from "react"

export default class ToDoList extends Component {
    state = {
        lists: [],
        newItem: "",
    }
    handleInput(e) {
        const newItem = (e.target.value)
        this.setState(prevState => {
            return {
                newItem: newItem,
                lists: prevState.lists
            }
        })
    }
    addItem() {
        this.setState((prevState) => {
            return {
                lists: [...prevState.lists, prevState.newItem]
            }
        })
    }
    handleRemoveitem(index) {
        let listarray = this.state.lists;
        listarray.splice(index, 1)
        this.setState({
            lists: listarray
        })
    }
    render() {

        return (
            <div className="ToDoList">
                <div className="todo">
                    Add Item
                    <input type="text" placeholder="type of item" value={this.state.newItem} onChange={this.handleInput.bind(this)}></input>
                    <button onClick={this.addItem.bind(this)}>Add</button>
                    {this.state.lists.map((itemval, id) => {
                        return (
                            <li key={id}>{itemval}
                                <button onClick={this.handleRemoveitem.bind(this)}>X</button>
                            </li>
                        )
                    })}
                </div>
            </div>
        )
    }
}