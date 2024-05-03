import React, { useContext } from 'react'
import './ItemDisplay.css'
import {StoreContext} from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

const ItemDisplay = ({category}) => {
    // use the context api to get the food list display
    const {food_list} = useContext(StoreContext)

  return (
    <div className='item-display' id='item-display'>
        <h2>Products</h2>
        <div className="item-display-list">
            {food_list.map((item, index)=>{
                if(category==="All" || category===item.category) {
                    return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            })}
        </div>
    </div>
  )
}

export default ItemDisplay