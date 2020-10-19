import React,{createContext, useState} from 'react';
export const priceContext = createContext();

export const PriceContextProvider = (props) => {
const [prices, setPrices] = useState(0);
const setWinPrice = (amount) => {
    setPrices(amount);
};
    return (
        <priceContext.Provider value = {{prices, setWinPrice}}>
            {props.children}
        </priceContext.Provider>
    );
}

