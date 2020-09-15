import React, { Component } from "react";

export default class Profile extends Component {

    state = {
       firstname:"",
       lastname:"",
       email:"",
       password:""
    }
    handleFirstname(e){
        console.log(e)
        const firstname= (e.target.value)
        this.setState(prevState =>{         
            prevState.firstname=firstname;
            return prevState;
        })
    }
    handleLasttname(e){
        console.log(e)
        const lastname =(e.target.value)
        this.setState(prevState =>{
            prevState.lastname=lastname;
            return prevState;
        })
    }
    handleEmail(e){
        console.log(e)
        const email=(e.target.value)
        this.setState(prevState =>{
            prevState.email=email;
            return prevState;
        })
    }
    handlePassword(e){
        console.log(e)
        const password=(e.target.value)
        this.setState(prevState =>{
            prevState.password=password;
            return prevState;
        })
    }
   
    
    render() {
        return (
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="First name" onChange={this.handleFirstname.bind(this)} />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Last name" onChange={this.handleLasttname.bind(this)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" onChange={this.handleEmail.bind(this)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" onChange={this.handlePassword.bind(this)}/>
                    </div>
                </div>
                {this.state.firstname }, {this.state.lastname},{this.state.email},{this.state.password}

            </div>

        )
    }
}