import { Actions } from '../types/store';
import { getProducts } from '../services/getProducts';

export const navigate = (screen: string) => {
    return {
        action: 'NAVIGATION',
        payload: screen,
    };
};

export const getProductsRedux = async () => {
    const products = await getProducts();
    return {
        action: 'GETPRODUCTS',
        payload: products,
    };
};

export const addProduct = (payload: any) => {
    return {
        action: 'ADD_TASK',
        payload,
    }
};