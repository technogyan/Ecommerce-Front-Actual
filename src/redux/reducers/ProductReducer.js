import { ActionType } from "../constants/Action-types";

const InitialState={
    products:[{
        id:1,
        title:"Paras",
        category:"Coder"
    }]
};

export const ProductReducer=(state,{type,payload})=>{
    switch(type){
        case ActionType.ADD_PRODUCT :  
            return state;
        
        // case ActionType.DELETE_PRODUCT :  
        //     let newProducts = state.filter((product)=> product.id !== payload); 
        //     return newProducts;
            
        // case ActionType.EDIT_PRODUCT :
        //     let editedProduct=state.map((   product) =>  
        //         product.id === payload.id ? payload : product    
        //       );     
        //     return editedProduct;      
              
        default:return state;
    }
}