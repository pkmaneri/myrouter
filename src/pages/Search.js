import React, { Component } from "react";

export default class Search extends Component {
    
   
    handleSearch(e){
        const searchText = e.target.value;
        this.setState({
            searchText:searchText
        })

    }

    render() {
        return (
            <div className="container">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                    </div>
                    <input  onChange={this.handleSearch.bind(this)} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
                {this.state === null ? "" : this.state.searchText}
                <img alt="" src="https://source.unsplash.com/WLUHO9A_xik/500x300"/>
            </div>
        )
    }
}