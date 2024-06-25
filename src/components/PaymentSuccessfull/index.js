import {Link} from 'react-router-dom'
import './index.css'

const PaymentSuccessfull = (props) => {
    console.log(props)
    return(
        <div className='payment-container'>
            <img src="https://i.pinimg.com/564x/c0/9c/24/c09c24d0c139b1c3273147b234a23877.jpg"
            alt="payment" className="payment-image"/>
            <h4>Payment Successfull</h4>
            <Link to="/products"><button className='payment-successfull-button'>Re Buy</button> </Link>
        </div>
    )
}

export default PaymentSuccessfull