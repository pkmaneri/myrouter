import React, { Component } from "react";

export default class Home extends Component {
    state = {
        "product": [],
        "addToCart": []
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
    handleAddToCart(product, index) {
        this.setState(prevState => {
            return {
                addToCart: [...prevState.addToCart, product],
                product: prevState.product,

            };
        }, () => {
            const productdataArrstate = JSON.stringify(this.state.addToCart);
            localStorage.setItem("productAddedToCart", productdataArrstate)

        })
    }
    handleRemoveFromCart(productToBeRemoved) {
        var addToCartArr = [...this.state.addToCart];
        
        const findFn = function (product  ) {
            console.log(product, productToBeRemoved)
            return product.name === productToBeRemoved.name;
        }

        const index = addToCartArr.findIndex(findFn);
        console.log(index)

        // if (index > -1) {

            addToCartArr.splice(index, 1);

            this.setState(prevState => {
                return {
                    addToCart: addToCartArr,
                    product: prevState.product,

                };
            }, () => {
                const productdataArrstate = JSON.stringify(this.state.addToCart);
                localStorage.setItem("productAddedToCart", productdataArrstate)

            })
        // }
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
                            {product.commentlist.map((comment, k) => {
                                return (
                                    <li key={k}>{comment}</li>
                                )
                            })}
                        </ul>
                        <button onClick={this.handleAddToCart.bind(this, product, i)}>AddToCart</button>
                        <button onClick={this.handleRemoveFromCart.bind(this, product)}>RemoveFromCart</button>
                    </div>
                )
            })
        )
    }
}