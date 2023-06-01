
import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from './constant';
export const cartData = (data= [],action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('action.data', action.data,data)
            return [action.data,...data];
        case REMOVE_FROM_CART:
            if(data.length) {
              data.pop();  
            }            
            return   [...data];
        case EMPTY_CART:
            return [];
        default:
            return [];
    }
}

