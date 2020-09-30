import React, { Component } from "react"
import "./Cart.css"

export default class Cart extends Component {
    state = {
        "productAddedToCart": [],
        total: 0,
    }

    reducer = (accumulator, product) => {
        console.log(accumulator, product)
        return accumulator + parseFloat(product.price) * product.quantity;
    }

    componentDidMount() {
        const foundState = localStorage.getItem("productAddedToCart")
        console.log(foundState)
        if (foundState != null) {
            const foundStateObject = JSON.parse(foundState);
            foundStateObject.map((product) => {
                if (!product.quantity) {
                    product.quantity = 1
                }
                return product;
            })
            var total = foundStateObject.reduce(this.reducer, 0);

            this.setState(prevState => {
                return {
                    "productAddedToCart": foundStateObject,
                    "total": total
                };
            })
        }
    }

    handleIncrement(i) {

        let productAddedToCart = [...this.state.productAddedToCart];

        let product = { ...this.state.productAddedToCart[i] };
        if (product.quantity + 1 > 10) {
            alert("Max allowed quantity is 10 !")
            return;
        }


        product.quantity = product.quantity + 1;

        productAddedToCart[i] = product;

        this.setState(prevState => {
            return {
                "productAddedToCart": productAddedToCart,
                "total": productAddedToCart.reduce(this.reducer, 0)
            };
        }, () => {
            const productdataArrstate = JSON.stringify(this.state.productAddedToCart);
            localStorage.setItem("productAddedToCart", productdataArrstate)
        }
        )
    }
    handleDecrement(i) {
        let productAddedToCart = [...this.state.productAddedToCart];

        let product = { ...this.state.productAddedToCart[i] };
        if (product.quantity - 1 < 0) {
            alert("min allowed quantity is 0 !")
            return;
        }

        product.quantity = product.quantity - 1;

        productAddedToCart[i] = product;

        this.setState(prevState => {
            return {
                "productAddedToCart": productAddedToCart,
                "total": productAddedToCart.reduce(this.reducer, 0)
            };
        }, () => {
            const productdataArrstate = JSON.stringify(this.state.productAddedToCart);
            localStorage.setItem("productAddedToCart", productdataArrstate)
        })

    }


    render() {
        console.log(this.state.productAddedToCart)
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.productAddedToCart.map((product, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    <button onClick={this.handleDecrement.bind(this, i)}>-</button>
                                    {product.quantity}
                                    <button onClick={this.handleIncrement.bind(this, i)}>+</button>
                                </td>
                                <td>
                                    {product.price}
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan="2" className="total">
                            Total:
                    </td>
                        <td >
                            {this.state.total}
                        </td>
                    </tr>

                </tbody>
            </table>
        )
    }
}