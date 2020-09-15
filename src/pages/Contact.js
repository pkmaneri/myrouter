import React, { Component } from "react";

export default class Contact extends Component {
    state = {
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
    };
    componentDidMount() {
        const foundState = localStorage.getItem("contack")
        console.log(foundState)
        if (foundState != null) {
            const foundStateObject = JSON.parse(foundState);
            this.setState(prevState => {
                return foundStateObject;
            })
        }
    }
    handleAddress(e) {
        console.log(e)
        const address = (e.target.value)
        this.setState(prevState => {
            prevState.address = address;
            return prevState;
        })
    }
    handleAddress2(e) {
        const address2 = (e.target.value)
        this.setState(prevState => {
            prevState.address2 = address2;
            return prevState;
        })
    }
    handleCity(e) {
        const city = (e.target.value)
        this.setState(prevState => {
            prevState.city = city;
            return prevState;
        })
    }
    handleState(e) {
        const state = (e.target.value)
        this.setState(prevState => {
            prevState.state = state;
            return prevState;
        })
    }
    handleZip(e) {
        const zip = (e.target.value)
        this.setState(prevState => {
            prevState.zip = zip;
            return prevState;
        })
    }
    handleCheckbox(e) {
        console.log(e)
        const checkbox = (e.target.checked)
        this.setState({
            checkbox: checkbox
        })
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
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
                {this.state.address},{this.state.address2},{this.state.city},{this.state.state},
                {this.state.zip}{this.state.checkbox}
            </div>
        )
    }
}