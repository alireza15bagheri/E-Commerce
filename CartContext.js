import React, { createContext, useState } from "react";
import { getProduct } from "./services/ProductService.js";

export const CartContext = createContext();

export function CartProvider(props) {

    const [items, setItems] = useState([])

    function addItemToCart(id) {
        const product = getProduct(id)
        setItems((currentItems) => {
            const item = currentItems.find((item) => (item.id == id));
            if(!item){
                return[...currentItems, {
                    id,
                    qty: 1,
                    product,
                    totalPrice: product.price
                }]
            } else {
                return currentItems.map((item) => {
                    if(item.id == id) {
                        item.qty++;
                        item.totalPrice += product.price
                    }
                    return item;
                })
            }
        })
    }

    function getItemsCount(){

    }

    function getTotalPrice(){

    }

    return(

    )

}