import { type } from "@testing-library/user-event/dist/type";
import { ActionType } from "../constants/Action-types";

export const setProducts=(products)=>{
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products
    };
};

export const selectedProducts=(products)=>{
    return{
        type:ActionType.SELECT_PRODUCT,
        payload:products
    };
};

