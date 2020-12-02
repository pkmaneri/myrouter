import React, { Component } from "react";

export default class Contact extends Component {
    state = {
        currentData:{
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
    }
    };
    componentDidMount() {
        const foundState = localStorage.getItem("contact")
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
    handleAddress(e) {
        console.log(e)
        const address = (e.target.value)
        this.setState(prevState => {

            return  {
                currentData: {
                address: address,
                address2: prevState.currentData.address2,
                city: prevState.currentData.city,
                state : prevState.currentData.state,
                zip : prevState.currentData.zip
            }
        }
    })
}
    handleAddress2(e) {
        const address2 = (e.target.value)
        this.setState(prevState => {

            return  {
                currentData: {
                address2: address2,
                address: prevState.currentData.address,
                city: prevState.currentData.city,
                state : prevState.currentData.state,
                zip : prevState.currentData.zip
            }
        }
    })
}
    handleCity(e) {
        const city = (e.target.value)
        this.setState(prevState => {

            return  {
                currentData: {
                city: city,
                address: prevState.currentData.address,
                address2: prevState.currentData.address2,
                state : prevState.currentData.state,
                zip : prevState.currentData.zip
            }
        }
    })
}
    handleState(e) {
        const state = (e.target.value)
        this.setState(prevState => {

            return  {
                currentData: {
                state: state,
                address : prevState.currentData.address,
                address2: prevState.currentData.address2,
                city: prevState.currentData.city,
                zip : prevState.currentData.zip
            }
        }
    })
}
    handleZip(e) {
        const zip = (e.target.value)
        this.setState(prevState => {

            return  {
                currentData: {
                zip: zip,
                address : prevState.currentData.address,
                address2: prevState.currentData.address2,
                city: prevState.currentData.city,
                state : prevState.currentData.state
            }
        }
    })
}
    handleCheckbox(e) {
        console.log(e)
        const checkbox = (e.target.checked)
        this.setState({
            checkbox: checkbox
        })
    }
    handleSign(){
    const state = JSON.stringify(this.state);
    console.log(state);
    localStorage.setItem("contact", state)
}
    render() {
        return (
            <div className="container">
                <form>

                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                            value={this.state.address}
                            onChange={this.handleAddress.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                            value={this.state.address2}
                            onChange={this.handleAddress2.bind(this)} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity"
                            value={this.state.city} onChange={this.handleCity.bind(this)} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control"
                            value={this.state.state} onChange={this.handleState.bind(this)}>
                                <option value="0">Choose State</option>
                                <option value="1" >Bihar</option>
                                <option value="2">Jharkhand</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip"
                            value={this.state.zip} onChange={this.handleZip.bind(this)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" onChange={this.handleCheckbox.bind(this)} />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <button onClick={this.handleSign.bind(this)}>Sign</button>
                </form>
                {/* {this.state.address},{this.state.address2},{this.state.city},{this.state.state},
                {this.state.zip}{this.state.checkbox} */}
            </div>
        )
    }
}