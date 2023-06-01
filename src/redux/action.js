import { crc32 } from "../utils";
import { ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART } from "./constant";
export const addToCart = (data) => {
    data.id = crc32(JSON.stringify(data));
    return {type:ADD_TO_CART,data};
}

export const removeFromCart = (data) => {
    console.log('remove to cart action')
    return {type:REMOVE_FROM_CART,data};
}

export const EmptyCart = (data) => {
    return {type:EMPTY_CART,data};
}