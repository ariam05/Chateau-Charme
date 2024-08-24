import React, { useContext, useState } from 'react';
import './ItemDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import ProductItem from '../ProductItem/ProductItem';
import { assets } from '../../assets/assets'; // Importing assets object

const ItemDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const toggleSearchVisibility = () => {
        setIsSearchVisible(!isSearchVisible);
        setSearchTerm(''); // Clear the search term when closing the search bar
    };

    const highlightText = (text, highlight) => {
        if (!highlight) return text;

        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, index) => 
            part.toLowerCase() === highlight.toLowerCase() 
                ? <span key={index} className="highlight">{part}</span> 
                : part
        );
    };

    const filteredItems = food_list.filter((item) => {
        return (
            (category === "All" || category === item.category) &&
            (item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm))
        );
    });

    return (
        <div className='item-display' id='item-display'>
            <h2>Products</h2>
            {!isSearchVisible && (
                <img 
                    src={assets.search_icon} 
                    alt="Search Icon" 
                    className="search-icon" 
                    onClick={toggleSearchVisibility} 
                />
            )}
            {isSearchVisible && (
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                        className="search-input"
                    />
                    <button 
                        className="close-button" 
                        onClick={toggleSearchVisibility}
                    >
                        X
                    </button>
                </div>
            )}
            <div className="item-display-list">
                {filteredItems.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item._id} 
                        name={highlightText(item.name, searchTerm)} 
                        description={highlightText(item.description, searchTerm)} 
                        price={item.price} 
                        image={item.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemDisplay;
