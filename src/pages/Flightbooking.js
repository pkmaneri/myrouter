import React from "react"

class Flightbooking extends React.Component {
    state = {
        ftext: "",
        ttext: "",
        listArr: []
    }
    handleFrom(e) {
        const ftext = (e.target.value)
        this.setState(prevState => {
            return {
                ftext: ftext,
                totext: prevState.totext
            }
        })
    }
    handleTo(e) {
        const ttext = (e.target.value)
        this.setState(prevState => {
            return {
                ttext: ttext,
                ffrom: prevState.ffrom,
            }
        })
    }
    render() {
        return (
            <div className="container">
                <div className="form-group col-md-6">
                    <input type="radio" id="round trip" value="round trip" />
                    <label htmlFor="round trip">Round trip</label>
                    <input type="radio" id="one way" value="one way" />
                    <label htmlFor="one way">One way</label>
                    <input type="radio" id="multicity" value="multicity" />
                    <label htmlFor="multicity">Multicity</label>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputName"></label>
                    <input type="text" className="form-control" placeholder="From" onChange={this.handleFrom.bind(this)} value={this.state.text}></input>
                    <label htmlFor="inputName" ></label>
                    <input type="text" className="form-control" placeholder="To" onChange={this.handleTo.bind(this)}></input>
                </div>
                <div className="form-group col-md-6">
                    <label>Departure</label>
                    <input type="date" id="departure" name="departure" />
                    <label htmlFor="exampleState">Return</label>
                    <input type="date" name="return" id="return" />
                </div>
                <div className="form-group col-md-6">
                    <input type="radio" value="adult" />
                    <label htmlFor="adult">Adult</label>
                    <input type="radio" value="child" />
                    <label htmlFor="child">Child</label>
                    <input type="radio" value="infant" />
                    <label htmlFor="infant">Infant</label>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" id="inputPrice" placeholder="Amount"
                    />
                </div>
                <button>Book Now</button>
                {this.state.ftext}
            </div>
        )
    }
}
export default Flightbooking