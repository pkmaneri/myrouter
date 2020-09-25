import React, { Component } from "react";

export default class Home extends Component {
    state = {
        "product": [],
        "addToCart" : []
    
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
                addToCart : [...prevState.addToCart, product],
                product : prevState.product
            };
        }, () => {
            const productdataArrstate = JSON.stringify(this.state.addToCart);
            localStorage.setItem("productAddedToCart", productdataArrstate)
           
        })
    }
    handleRe(product, index) {
        this.setState(prevState => {
            return {
                remove : [...prevState.remove, product],
                product : prevState.product,
                AddToCart: prevState.addToCart
            };
        }, () => {
            const productdataArrstate = JSON.stringify(this.state.remove);
            localStorage.setItem("productremoveToCart", productdataArrstate)
           
        })
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
    2                        {product.featurelist.map((feature, j) => {
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
                        <button onClick={this.handleAddToCart.bind(this, product , i)}>AddToCart</button>
    

                    </div>

                )
            })

        )
    }
}