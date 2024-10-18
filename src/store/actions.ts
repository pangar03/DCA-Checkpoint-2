import { Actions } from '../types/store';
import { getProducts } from '../services/getProducts';

export const getProductsRedux = async () => {
    const products = await getProducts();
    return {
        action: 'GETPRODUCTS',
        payload: products,
    };
};

export const addProduct = (payload: any) => {
    return {
        action: 'ADDPRODUCT',
        payload,
    }
};

export const removeProduct = (payload: any) => {
    return {
        action: 'REMOVEPRODUCT',
        payload,
    }
}