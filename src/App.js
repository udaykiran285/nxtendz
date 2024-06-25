import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'
import PaymentSuccessfull from './components/PaymentSuccessfull'

class App extends Component {
  state = {
    cartList: [],
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity, remove cart item
  removeCartItem = product => { 
    const {cartList} = this.state

    const cartUpdatedList = cartList.filter(eachItem => eachItem.id !== product)
    this.setState({cartList : cartUpdatedList})
  }

  addCartItem = product => {
    const {cartList} = this.state
    if(cartList.length === 0) {
      this.setState({cartList : [product]})
    }else{
      let itemPresent = false
      const cartUpdatedList = cartList.map(eachItem => {
        if(eachItem.id === product.id){
          itemPresent = true
          const totalQuantity = eachItem.quantity + 1
          return ({...eachItem,quantity : totalQuantity})
        }
        return ({...eachItem})
      })
      if(itemPresent === false){
        cartUpdatedList.push(product)
      }
      
      this.setState({cartList : cartUpdatedList})}
  
    //   TODO: Update the code here to implement addCartItem
  }

  incrementCartItemQuantity = (product) => {
      const {cartList} = this.state

      const cartUpdatedList = cartList.map(eachItem => {
        if(eachItem.id === product){
          const totalQuantity = eachItem.quantity + 1
          return ({...eachItem,quantity : totalQuantity})
        }
        return ({...eachItem})
      })
      this.setState({cartList : cartUpdatedList})
  }

  decrementCartItemQuantity = (product) => {
    const {cartList} = this.state

    const cartUpdatedList = cartList.map(eachItem => {
      if(eachItem.id === product){
        const totalQuantity = eachItem.quantity - 1
        return ({...eachItem,quantity : totalQuantity})
      }
      return ({...eachItem})
    })
    this.setState({cartList : cartUpdatedList})
  }

  render() {
    const {cartList} = this.state
    
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity : this.incrementCartItemQuantity,
          decrementCartItemQuantity : this.decrementCartItemQuantity
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route exact path="/payment" component={PaymentSuccessfull}/>
          <Route path="/not-found" component={NotFound} />
          
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
