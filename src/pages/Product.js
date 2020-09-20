import React, { Component } from "react"

export default class Product extends Component {
    state = {
        dataArr: [],
        currentData: {
            name: "",
            category: "",
            price: "",
            featurelist:[],
            feature :""
        }
    }
    componentDidMount() {
        const foundState = localStorage.getItem("product")
        console.log(foundState)
        if (foundState != null) {
            const foundStateArr = JSON.parse(foundState);
            this.setState(prevState => {
                return {
                    dataArr: foundStateArr
                }
            })
        }
    }
    handleName(e) {
        const name = (e.target.value);

        this.setState(prevState => {
            console.log(prevState)
            return {
                dataArr: prevState.dataArr,
                currentData: {
                    name: name,
                    featurelist: prevState.currentData.featurelist,
                    feature: prevState.currentData.feature,
                    price: prevState.currentData.price,
                    category: prevState.currentData.category
                }
            }
        })
    }
    handleCategory(e) {
        const category = (e.target.value)
        this.setState(prevState => {

            return {
                dataArr: prevState.dataArr,
                currentData: {
                    category: category,
                    featurelist: prevState.currentData.featurelist,
                    feature: prevState.currentData.feature,
                    name: prevState.currentData.name,
                    price: prevState.currentData.price
                }
            }
        })
    }
    handlePrice(e) {
        const price = (e.target.value)
        this.setState(prevState => {

            return {
                currentData: {
                    price: price,
                    featurelist: prevState.currentData.featurelist,
                    feature: prevState.currentData.feature,
                    category: prevState.currentData.category,
                    name: prevState.currentData.name
                }
            }
        })
    }

    handleSave() {
        this.setState(prevState => {
            return {
                dataArr: [...prevState.dataArr, prevState.currentData],
                currentData: prevState.currentData
            };
        }, () => {
            const productdataArrstate = JSON.stringify(this.state.dataArr);
            localStorage.setItem("product", productdataArrstate)
        })
    }
    handleFeature(e){
        this.setState(prevState => {
            return {
                currentData: {
                    featurelist: [...prevState.currentData.featurelist,prevState.currentData.feature],
                    category: prevState.currentData.category,
                    name: prevState.currentData.name,
                    price: prevState.currentData.price,
                    feature: prevState.currentData.feature,
                }
            }
        })
    }
    
    handleFeatureInput(e){
        const feature = e.target.value;
        this.setState(prevState => {
            return {
                currentData: {
                    featurelist: prevState.currentData.featurelist,
                    category: prevState.currentData.category,
                    name: prevState.currentData.name,
                    price: prevState.currentData.price,
                    feature : feature
                }
            }
        })
    }
    

    render() {
        return (
            <div className="container">

                <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Product name"
                        value={this.state.name}
                        onChange={this.handleName.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputcategory">Category</label>
                    <select id="inputcategory" className="form-control"
                        value={this.state.category} onChange={this.handleCategory.bind(this)}>
                        <option>Choose Category</option>
                        <option>Food</option>
                        <option>Electronics</option>
                        <option>Fruits</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPrice">Price</label>
                    <input type="number" className="form-control" id="inputPrice" placeholder="Amount"
                        value={this.state.price}
                        onChange={this.handlePrice.bind(this)} />
                </div>
                <div>
                    <h3>Feature</h3>
                        <input
                            onChange={this.handleFeatureInput.bind(this)}    
                            value={this.state.currentData.feature}                    
                        />
                        <button onClick={this.handleFeature.bind(this)}>
                            Add 
                        </button>
                    
                </div>
                <button onClick={this.handleSave.bind(this)} className="btn btn-outline-primary">Save</button>

                {/* {this.state.currentData.name}{this.state.currentData.category}{this.state.currentData.price} */}
            </div>
        )
    }
}


