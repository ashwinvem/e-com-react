
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            sortData:[],
            cart:[],
            total : 0,
            discTot : 0,
            disPrice : 0
        }
    }


    addToCart(product){
        let addItem = this.state.data.find((item)=>item.id===product)
        let existItem = this.state.cart.find((item)=>item.id===product)

        if(existItem){
            addItem.quantity += 1
            addItem.disPrice += addItem.price.actual + addItem.price.display
            this.setState({
                total : this.state.total + addItem.price.actual,
                discTot : this.state.discTot + addItem.price.display,
                disPrice : addItem.disPrice
            },console.log(this.state.disPrice,"homeexist"))
                
            
        }
        else{
            addItem.quantity = 1
            addItem.disPrice = addItem.price.actual + addItem.price.display
            this.setState({
                cart:[...this.state.cart,addItem],
                total : this.state.total + addItem.price.actual,
                discTot : this.state.discTot + addItem.price.display,
                disPrice :  addItem.disPrice
            },()=>console.log(this.state.disPrice,"homenew"))
        }
    }


    routeCart=()=>{
        this.props.history.push({
            pathname: "/cart",
            state:{
                cart : this.state.cart,
                total : this.state.total,
                discTot : this.state.discTot,
                disPrice : this.state.disPrice
            }
        })
    }


    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/prograk/demo/items')
            .then(res => { this.setState({ data: res.data }) })
            .catch(err => { console.log(err) })
    }

    ascSort=()=>{
        const {data} = this.state
        this.state.sortData = data.sort((a,b)=>Number(a.price.actual) - Number(b.price.actual))
        this.setState({
            data : this.state.sortData
        })
    }
    descSort=()=>{
        const {data} = this.state
        this.state.sortData = data.sort((a,b)=>Number(b.price.actual) - Number(a.price.actual))
        this.setState({
            data : this.state.sortData
        })
    }

    render() {
        return (
            <>
                <nav class="navbar navbar-dark">
                    <a class="navbar-brand" href="#">
                        <FontAwesomeIcon icon={faStar} color="gold" />
                    </a>
                    <div className="icons">
                        <FontAwesomeIcon icon={faSearch} color="white" size="2x" />
                        <FontAwesomeIcon icon={faShoppingCart} color="white" size="2x" cursor='pointer' onClick={this.routeCart} />
                    </div>
                </nav>
                
                <div className="content-wrapper">
                    <div className="conatiner">
                        <div className="row">
                            <div className="col-4 col-md-2">
                                <aside id="page_sidebar">
                                    <section class="menu-section">
                                        <div className="ml-2 mt-2 d-flex justify-content-start"><span>Filters</span></div>
                                        <ul className="ml-2 pl-0 d-flex justify-content-between mt-3">
                                            <li><span className="bubble m-2"></span></li>
                                            <li><span className="bubble m-2"></span></li>
                                        </ul>
                                        <p>price</p>
                                        <button className="btn btn-primary">Apply</button>
                                    </section>
                                </aside>
                            </div>
                            <div className="col-8 col-md-10 px-0">
                                <ul className='item-filters'>
                                    <li><a href="#">Sort By</a></li>
                                    <li><a href="#" onClick={this.ascSort}>Price --High Low</a></li>
                                    <li><a href="#" onClick={this.descSort}>Price --Low High</a></li>
                                    <li><a href="#">Discount</a></li>
                                </ul>
                                <div className="items-list">
                                    {this.state.data.map(data => <div key={data.id} className="item">
                                        <img src={data.image}></img>
                                        <p>{data.name}</p>
                                        <div className="d-flex justify-content-between">
                                            <p>{data.price.actual}<span><strike>{data.price.display}</strike></span></p>
                                            <p>{data.discount}% off</p>
                                        </div>
                                        <button className="btn" onClick={()=>this.addToCart(data.id)}>Add to Cart</button>
                                    </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
