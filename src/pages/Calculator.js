import React from "react"
class calculator extends React.Component {
    state = {
        text: "",
        result: [],
        prevResult: []
    }
    handleChange(event) {
        const text = event.target.value
        this.setState({
            text: text
        })
    }
    calculate(event) {
        this.setState((prevState) => ({

            text: ((this.state.text) || "") + "",
            result: [...prevState.result, this.state.text + "   "],
            // eslint-disable-next-line
            prevResult: [...prevState.prevResult, + (eval(this.state.text) || "") + "  "]
        })
        )
    }
    back(event) {
        const text = event.target.value
        this.setState({
            text: text
        })
    }
    render() {
        return (
            <div >
                <div className="resultbar">
                    <input style={{ height: "30px", width: "200px", font: "20px" }}
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
                <div className="calculator his">
                    <h1>calculator</h1>
                    <h3 style={{ color: "red" }}>{this.state.result} </h3>
                    <p>{this.state.prevResult}</p>

                </div>

                <div className="button">
                    <div>
                        <button name="text"
                            onClick={this.back.bind(this)}
                        >C</button>
                        <button name="text" value={this.state.text}
                            onClick={this.calculate.bind(this)}>=</button>
                        <button name="text" value={this.state.text + "+"}
                            onClick={this.handleChange.bind(this)}>+</button>
                        <button name="text" value={this.state.text + "."}
                            onClick={this.handleChange.bind(this)}>.</button>
                    </div>
                    <button name="text" value={this.state.text + "7"}
                        onClick={this.handleChange.bind(this)}>7</button>
                    <button name="text" value={this.state.text + "8"}
                        onClick={this.handleChange.bind(this)}>8</button>
                    <button name="text" value={this.state.text + "9"}
                        onClick={this.handleChange.bind(this)}>9</button>
                    <button type="adbc" name="text" value={this.state.text + "*"}
                        onClick={this.handleChange.bind(this)}>*</button>
                    <div>
                        <button name="text" value={this.state.text + "4"}
                            onClick={this.handleChange.bind(this)}>4</button>
                        <button name="text" value={this.state.text + "5"}
                            onClick={this.handleChange.bind(this)}>5</button>
                        <button name="text" value={this.state.text + "6"}
                            onClick={this.handleChange.bind(this)}>6</button>
                        <button name="text"
                            value={this.state.text + "-"}
                            onClick={this.handleChange.bind(this)}>-</button>
                    </div>
                    <div>
                        <button name="text" value={this.state.text + "1"}
                            onClick={this.handleChange.bind(this)}>1</button>
                        <button name="text" value={this.state.text + "2"}
                            onClick={this.handleChange.bind(this)}>2</button>
                        <button name="text" value={this.state.text + "3"}
                            onClick={this.handleChange.bind(this)}>3</button>
                        <button name="text" value={this.state.text + "/"}
                            onClick={this.handleChange.bind(this)}>/</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default calculator