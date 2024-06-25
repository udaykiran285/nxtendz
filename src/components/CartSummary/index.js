import {Link} from 'react-router-dom'

import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
    <CartContext.Consumer>
        {value =>  {
            const {cartList} = value
            const totalCartItems = cartList.length
            const orderTotal = cartList
            .map(eachItem => eachItem.price * eachItem.quantity)
            .reduce((accurate,currentValue) =>  accurate + currentValue)
            return(
                <div className='cart-summary-container'>
                <h1 className="order-total-heading">Order Total  :<span className='span-el'>Rs. {orderTotal}/-</span></h1>
                <p className="total-cart-items-section">{totalCartItems} items in cart</p>
                <Link to="/payment"><button className="proceed-to-payment-button">Procced To Payment</button></Link>
                </div>
            )
        }}
    </CartContext.Consumer>
)

export default CartSummary