import React from "react"

class Flightbooking extends React.Component {
    state = {
        ftext: "",
        ttext: "",
        price: "",
        roundtrip: "",
        adult: "",
        departure:"",
        return:"",
        listArr: []
    }
    handleFrom(e) {
        const ftext = (e.target.value)
        this.setState(prevState => {
            return {
                ftext: ftext,
                totext: prevState.totext,
                price: prevState.price,
            }
        })
    }
    handleTo(e) {
        const ttext = (e.target.value)
        this.setState(prevState => {
            return {
                ttext: ttext,
                ftext: prevState.ftext,
                price: prevState.price,
            }
        })
    }
    handlePrice(e) {
        const price = (e.target.value)
        this.setState(prevState => {

            return {
                price: price,
                ffrom: prevState.ffrom,
                ttext: prevState.ttext

            }
        })
    }
    handleRoundtrip(e) {
        console.log(e)
        const roundtrip = (e.target.checked)
        this.setState({
            roundtrip: roundtrip
        })
    }
    handleAdult(e) {
        console.log(e)
        const adult = (e.target.checked)
        this.setState({
            adult: adult
        })
    }
    handleDepartureDate(e){
        const departuredate = (e.target.value)
        this.setState(prevState => {
            return {
                departuredate:departuredate,
            }
        })
    }
    handleReturnDate(e){
        const returndate = (e.target.value)
        this.setState(prevState => {
            return {
                returndate: returndate,
            }
        })

    }
    handleBook() {
        const state = JSON.stringify(this.state);
        console.log(state);
        localStorage.setItem("Flightbooking", state)
    }

    render() {
        return (
            <div className="container">
                <div className="form-group col-md-6">
                    <input type="radio" id="round trip" value="round trip" onChange={this.handleRoundtrip.bind(this)} />
                    <label htmlFor="round trip">Round trip</label>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputName"></label>
                    <input type="text" className="form-control" placeholder="From" onChange={this.handleFrom.bind(this)} value={this.state.text}></input>
                    <label htmlFor="inputName" ></label>
                    <input type="text" className="form-control" placeholder="To" onChange={this.handleTo.bind(this)}></input>
                </div>
                <div className="form-group col-md-6">
                    <label>Departure</label>
                    <input type="date" id="departure" name="departure" onChange={this.handleDepartureDate.bind(this)} />
                    <label htmlFor="exampleState">Return</label>
                    <input type="date" name="return" id="return" onChange={this.handleReturnDate.bind(this)} />
                </div>
                <div className="form-group col-md-6">
                    <input type="radio" value="adult" onChange={this.handleAdult.bind(this)} />
                    <label htmlFor="adult">Adult</label>
                    <input type="radio" value="child" />
                    <label htmlFor="child">Child</label>
                    <input type="radio" value="infant" />
                    <label htmlFor="infant">Infant</label>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPrice">Price</label>
                    <input type="number" className="form-control" id="inputPrice" placeholder="Amount"
                        value={this.state.price}
                        onChange={this.handlePrice.bind(this)} />
                </div>
                <button onClick={this.handleBook.bind(this)}>Book Now</button>
                {this.state.ftext}  {this.state.ttext}
            </div>
        )
    }
}
export default Flightbooking