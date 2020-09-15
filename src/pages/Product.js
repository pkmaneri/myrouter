import React, { Component } from "react"

export default class Product extends Component {
    state = {
        dataArr: [],
        currentData: {
            name: "",
            category: "",
            price: ""
        }
    }

    componentDidMount() {
        const foundState = localStorage.getItem("product")
        console.log(foundState)
        if (foundState != null) {
            const foundStateObject = JSON.parse(foundState);
            this.setState(prevState => {
                return foundStateObject;
            })
        }
    }
    handleName(e) {
        const name = (e.target.value)
        this.setState(prevState => {
            prevState.currentData.name = name;
            return prevState
        })
    }
    handleCategory(e) {
        const category = (e.target.value)
        this.setState(prevState => {
            prevState.currentData.category = category;
            return prevState
        })
    }
    handlePrice(e) {
        const price = (e.target.value)
        this.setState(prevState => {
            prevState.currentData.price = price;
            return prevState
        })
    }
    handleSave() {
        this.setState(prevState =>{
            console.log(prevState)
            prevState.dataArr.push(prevState.currentData)
            return prevState
        })
    }
    handlePersists(){      
            const productdataArrstate = JSON.stringify(this.state.dataArr);
            localStorage.setItem("product", productdataArrstate)
        }

    render() {
        return (
            <div className="container">
                
                    <div className="form-group">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="1234 Main St"
                            value={this.state.name}
                            onChange={this.handleName.bind(this)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputcategory">Category</label>
                        <select id="inputcategory" className="form-control"
                            value={this.state.category} onChange={this.handleCategory.bind(this)}>
                            <option value="0">Choose Category</option>
                            <option value="1" >Food</option>
                            <option value="2">Electronics</option>
                            <option value="3">Fruits</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPrice">Price</label>
                        <input type="number" className="form-control" id="inputPrice" placeholder="1234 Main St"
                            value={this.state.price}
                            onChange={this.handlePrice.bind(this)} />
                    </div>
                    <button onClick={this.handleSave.bind(this)}>Save</button>
                    <button onClick={this.handlePersists.bind(this)}>Persists</button>

                    {this.state.currentData.name},{this.state.currentData.category},{this.state.currentData.price}
                
            </div>
        )
    }
}


