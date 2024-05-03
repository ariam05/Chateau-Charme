import React, { useContext } from 'react'
import './ProductItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const ProductItem = ({id, name, price, description, image}) => {
    // const [itemCount, setItemCount] = useState(0)
    
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    return (
    <div className='product-item'>
        <div className="product-item-img-container">
            <img src={image} alt="" className="product-item-image" />
            {/* if product item count = 0, we will provide an item, if exist, we will add to counter */}
            {!cartItems[id]
                ?<img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" className="add" />
                :<div className="product-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="product-item-info">
            <div className="product-item-name-rating">
                {/* render the information for the items using props */}
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="product-item-description">{description}</p>
            <p className="product-item-price">${price}</p>
        </div>
    </div>
  )
}

export default ProductItem