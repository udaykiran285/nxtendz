import { Component } from 'react'
import { withRouter ,Link} from 'react-router-dom'
import './index.css'

class SimilarProductItem extends Component {
  similarProducts = () =>{
    const {getProductData} = this.props
    setTimeout( () =>{
      getProductData()
    },0)
  }

  renderSimilarProduct= () => {
    const {productDetails} = this.props
  const {id,title, brand, imageUrl, rating, price} = productDetails
  return (
    <li className="similar-product-item">
      <Link to={`/products/${id}`}  >
      <img
        src={imageUrl}
        className="similar-product-img"
        alt={`similar product ${title}`}
      onClick={this.similarProducts}
      />
      <p className="similar-product-title">{title}</p>
      <p className="similar-products-brand">by {brand}</p>
      <div className="similar-product-price-rating-container">
        <p className="similar-product-price">Rs {price}/-</p>
        <div className="similar-product-rating-container">
          <p className="similar-product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-product-star"
          />
        </div>
      </div>
      </Link>
    </li>)
  }

  render(){
    return this.renderSimilarProduct()
  }
}

export default withRouter(SimilarProductItem)
