import React, { Component } from "react"

export default class ToDoList extends Component {
    state = {
        list: [],
        newItem: ""
    }
    handleInput(e) {
        const newItem = (e.target.value)
        this.setState(prevState => {
            console.log(prevState)
            return {
                newItem: newItem,
                list:prevState.list
            }
        })
    }
    addItem(e) {
        this.setState(prevState => {
            return {
                    list: [...prevState.list, prevState.newItem],
                    newItem: prevState.newItem
            }
        })
    }

    deleteItem(id) {
        const list = [...this.state.list]
        const updateList = list.filter(item => item.id !== id)
        this.updateList({ list: updateList });
    }

    render() {
        return (
            <div className="ToDoList">
                <div>
                    Add item
                    <br />
                    <input type="text" placeholder="type of item" value={this.state.newItem} onChange={this.handleInput.bind(this)}></input>
                    <button onClick={this.addItem.bind(this)}>Add</button><br />
                    <ul>
                        {this.state.list.map(item => {
                            return (
                                <li key={item.id}>{item.value}
                                    <button onClick={this.deleteItem.bind(this)}>X </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {this.state.newItem}
            </div>
        )
    }
}