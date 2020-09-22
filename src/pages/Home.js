import React, { Component } from "react";

export default class Home extends Component {
    state = {
        "product": []
    }
    componentDidMount() {
        const foundState = localStorage.getItem("product")
        console.log(foundState)
        if (foundState != null) {
            const foundStateObject = JSON.parse(foundState);
            this.setState(prevState => {
                prevState.product = foundStateObject
                return prevState;
            })
        }
    }

    render() {
        console.log(typeof this.state)
        return (
            this.state.product.map((product, i) => {

                console.log(product)

                return (
                    <div className="card" key={i}>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
                            <p className="card-text">
                                {product.category}
                            </p>

                        </div>
                        Features :
                        <ul>
                            {product.featurelist.map((feature, j) => {
                                return (
                                    <li key={j}>
                                        {feature}
                                    </li>
                                )
                            })}
                        </ul>
                        Comments:
                        <ul>
                            {product.commentlist.map((comment,k)=>{
                                return(
                                <li key={k}>{comment}</li>
                                )
                            })}
                        </ul>

                    </div>

                )
            })

        )
    }
}