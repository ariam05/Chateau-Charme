import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreProducts from '../../components/ExploreProducts/ExploreProducts'
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    const [category, setCategory] = useState("All");
  return (
    <div>
        <Header/>
        <ExploreProducts category={category} setCategory={setCategory}/>
        <ItemDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home