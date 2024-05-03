import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // items placed within this context value will be acessable anywhere
    const [cartItems, setCartItems] = useState({});

    // const [userLoggedin, setUserLoggedin] = useState(null);
    // const [loading, setLoading] = useState(null);


    const addToCart = (itemId) => {
        if (!cartItems[itemId]) { //itemid is not available?
            // new entry for the new product
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            // if quantity already available, then add
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    const removeFromCart = (itemId) => {
        // removing, decreases the value by 1
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    // prev using to check the cart items
    // useEffect(()=>{
    //     console.log(cartItems);
    // }, [cartItems]);


    //function to return the cart total
    const getTotalCartAmount = () => {
        let totalAmount = 0; //variable w name totalamt
        for (const item in cartItems) { // cartItems is an object
            if (cartItems[item] > 0) { // only when there is > 0 quantity of the pruduct
                let itemInfo = food_list.find((product) => product._id === item) // the item is in the cart, so need to add total amount
                totalAmount += itemInfo.price * cartItems[item]; // multilpy with the quantit of that specific item
            }
        }
        return totalAmount;
    }


    // can access these values in the food item companonet, using the context api
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;