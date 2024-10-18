import ProductCard from "../components/product/product";
import { Actions } from "../types/store";

export const reducer = (currentAction: any, currentState: any) => {

    const {action, payload} = currentAction;

    switch (action) {
        case Actions.GETPRODUCTS:
            return {
                ...currentState,
                products: payload,
            }

        case Actions.ADDPRODUCT:
            console.log('PAYLOAD', payload);
            
        return {
            ...currentState,
            taskList: [...currentState.products, payload],
        };

        case Actions.REMOVEPRODUCT:
            return {
                ...currentState,
                products: currentState.products.filter((product: ProductCard) => product.uid !== payload.uid)
            };

        default: 
            return currentState;
    }
}