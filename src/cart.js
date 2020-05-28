import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: this.props.location.state.cart,
            total: this.props.location.state.total,
            discTot: this.props.location.state.discTot,
            disPrice: this.props.location.state.disPrice
        }
    }


    removeItem=(product)=>{
        let itemToRemove= this.state.cart.find(item=> product === item.id)
        let new_items = this.state.cart.filter(item=> product !== item.id)

        let newTotal = this.state.total - (itemToRemove.price.actual * itemToRemove.quantity )
        let newdiscTot = this.state.discTot - (itemToRemove.price.display * itemToRemove.quantity)
        let duplicateDisPrice = itemToRemove.price.actual + itemToRemove.price.display
        let newdisPrice = this.state.disPrice - (duplicateDisPrice * itemToRemove.quantity)
        console.log(itemToRemove)
        this.setState({
            cart : new_items,
            total : newTotal,
            discTot : newdiscTot,
            disPrice : newdisPrice
        })
    }

    plusItem=(product)=>{
        let addItem = this.state.cart.find(item => item.id === product )

        addItem.quantity += 1
        addItem.disPrice += addItem.price.actual + addItem.price.display
        this.setState({
            total : this.state.total + addItem.price.actual,
            discTot : this.state.discTot + addItem.price.display,
            disPrice : addItem.disPrice
        },console.log(this.state.disPrice,"cartplus"))
    }

    minusItem=(product)=>{
        let addItem = this.state.cart.find(item=>item.id === product)

        if(addItem.quantity === 1){
            let new_items = this.state.cart.filter(item=>item.id !== product)
            let newTotal = this.state.total - addItem.price.actual 
            let newdiscTot = this.state.discTot - addItem.price.display 
            addItem.disPrice -= addItem.price.actual + addItem.price.display 
            this.setState({
                cart : new_items,
                total : newTotal,
                discTot : newdiscTot,
                disPrice : addItem.disPrice
            },console.log(this.state.disPrice,"cartminus=1"))   
        }
        else{
            addItem.quantity -= 1
            let newTotal = this.state.total - addItem.price.actual 
            let newdiscTot = this.state.discTot - addItem.price.display 
            addItem.disPrice -= addItem.price.actual + addItem.price.display 
            this.setState({
                total : newTotal,
                discTot : newdiscTot,
                disPrice : addItem.disPrice
            },console.log(this.state.disPrice,"cartminus>1"))
        }
    }

    routeLogo=()=>{
        this.props.history.push({
            pathname : "/e-com-react"
        })
    }

    render() {
        const { cart, total, discTot, disPrice } = this.state
        return (
            <>
                <nav class="navbar navbar-dark">
                    <a class="navbar-brand" href="#">
                        <FontAwesomeIcon icon={faStar} color="gold" onClick={this.routeLogo} />
                    </a>
                    <div className="icons">
                        <FontAwesomeIcon icon={faSearch} color="white" size="2x" />
                        <FontAwesomeIcon icon={faShoppingCart} color="white" size="2x" />
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9 p-0">
                            {cart.map(item =>
                                <div className="item-block d-flex justify-content-between" key={item.id}>
                                    <div className="product-details">
                                        <img src={item.image}></img>
                                        <div className="mt-4" >
                                            <p className="brand">{item.name}</p>
                                            <div className="prices d-flex">
                                                <p>{item.price.actual}</p>
                                                <p><strike>{item.price.display}</strike><span>{item.discount}% off</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prod-quan mt-4">
                                        <ul>
                                            <li><a href="#" onClick={()=>{this.minusItem(item.id)}}>&nbsp;-&nbsp;</a></li>
                                            <li>{item.quantity}</li>
                                            <li><a href="#" onClick={()=>{this.plusItem(item.id)}}>&nbsp;+&nbsp;</a> </li>
                                        </ul>
                                    </div>
                                    <div className="remove-btn mt-5 font-weight-bold">
                                        <a href="#" onClick={()=>this.removeItem(item.id)}>Remove</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-3 tot-checq mt-3 p-0">
                            <p>Price details</p>
                            <p>price({cart.length} item):$<span>{disPrice}</span></p>
                            <p>Discount :$<span>{discTot}</span></p>
                            <p>Total Payable:$<span>{total}</span></p>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
