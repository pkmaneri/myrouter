import React, { Component } from "react";

export default class Profile extends Component {
    state =  {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    };
    componentDidMount() {
        const foundState = localStorage.getItem("profile");
        console.log(foundState)
        if(foundState != null) {
            const foundStateObject = JSON.parse(foundState);
            this.setState(prevState => {
                return foundStateObject
            })
        }
       
    }
   
    handleFirstname(e) {
        console.log(e)
        const firstname = (e.target.value)
        this.setState(prevState => {
            prevState.firstname = firstname;
            return prevState;
        })
    }
    handleLasttname(e) {
        console.log(e)
        const lastname = (e.target.value)
        this.setState(prevState => {
            prevState.lastname = lastname;
            return prevState;
        })
    }
    handleEmail(e) {
        console.log(e)
        const email = (e.target.value)
        this.setState(prevState => {
            prevState.email = email;
            return prevState;
        })
    }
    handlePassword(e) {
        console.log(e)
        const password = (e.target.value)
        this.setState(prevState => {
            prevState.password = password;
            return prevState;
        })
    }
    handleSave() {
        const state = JSON.stringify(this.state);
        console.log(state);
        localStorage.setItem("profile", state)
    }


    render() {
        return (
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="First name"
                            value={this.state.firstname}
                            onChange={this.handleFirstname.bind(this)} />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Last name"
                            value={this.state.lastname}
                            onChange={this.handleLasttname.bind(this)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"
                         value={this.state.email}
                         onChange={this.handleEmail.bind(this)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" 
                         value={this.state.password}
                        onChange={this.handlePassword.bind(this)} />
                    </div>
                </div>
                <button onClick={this.handleSave.bind(this)}>
                    Save
                </button>
                {this.state.firstname}, {this.state.lastname},{this.state.email},{this.state.password}

            </div>

        )
    }
}