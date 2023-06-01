import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from './constant';
export const cartData = (data= [],action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('action.data', action.data,data)
            return [action.data,...data];
        case REMOVE_FROM_CART:
            let dataM = [];
            for(let i = 0; i<data.length-1;i++) {
                dataM.push(data[i])
            }      
            return   [...dataM];
        case EMPTY_CART:
            return [];
        default:
            return data;
    }
}

