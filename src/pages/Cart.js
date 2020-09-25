import React, { Component } from "react"

export default class Cart extends Component {
    state = {
        "productAddedToCart": [],


    }
    componentDidMount() {
        const foundState = localStorage.getItem("productAddedToCart")
        console.log(foundState)
        if (foundState != null) {
            const foundStateObject = JSON.parse(foundState);
            this.setState(prevState => {
                return {
                    "productAddedToCart": foundStateObject
                };
            })
        }
    }
    handleAmount(e) {
        const amount = (e.target.value)
        this.setState(prevState => {

            return {
                currentData: {
                    amount: amount,
                    productAddedToCart: prevState.currentData.productAddedToCart

                }
            }
        })
    }



    render() {
        console.log(typeof this.state)

        return (
            this.state.productAddedToCart.map((product, i) => {

                console.log(product)
                return (

                    <div className="card" key={i}>
                        <div className="card-body">
                            <h2 className="card-subtitle mb-2 text-muted">{product.name}
                            {product.price}</h2>
                            {/* <h3 className="card-subtitle mb-2 text-muted">{product.price}</h3> */}
                        </div>
                    </div>


                )
            })

        )
    }
}