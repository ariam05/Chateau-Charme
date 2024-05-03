import React from 'react'
import "./ExploreProducts.css"
import { product_list } from '../../assets/assets'

const ExploreProducts = ({category, setCategory}) => {

  return (
    <div className='explore-product' id='explore-product'>
       <h1>Explore our home decor by category</h1> 
       <p className='explore-product-text'>Discover the Essence of Home Decor Excellence with Our Diverse Collection. Explore a Fusion of Styles, from Chic Minimalism to Luxurious Elegance. Delve into Each Category, Curated to Transform Your Space into a Haven of Beauty and Comfort.</p>
       <p className='categories'>Categories</p>
       <hr />
        <div className="explore-product-list">
            {product_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.product_name?"All":item.product_name)} key={index} className="explore-product-list-item">
                        <img className={category===item.product_name?"active":""} src={item.product_image} alt="" />
                        <p>{item.product_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreProducts