import { Product } from "./products";

export type AppState = {
    screen: string;
    products: Product[];
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
    'GETPRODUCTS' = 'GETPRODUCTS',
    'ADDPRODUCT' = 'ADDPRODUCT',
}

export enum Screens {
    'DASHBOARD' = 'DASHBOARD',
}