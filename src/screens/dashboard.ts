import ProductCard, { Attribute as ProductCardAttribute } from "../components/product/product";
import '../components/product/product';
import ProductList from "../components/productList/productList";
import "../components/productList/productList";
import ProductForm from "../components/productForm/productForm";
import "../components/productForm/productForm";

import { getProductsRedux } from '../store/actions';
import { addObserver, appState, dispatch } from '../store/index'

import storage from "../utils/storage";

import styles from './dashboard.css';

class Dashboard extends HTMLElement {
    constructor()  {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    async connectedCallback() {
        this.render();
        console.log('DASHBOARD CONNECTED'); 
        console.log('state', appState.products);    
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <product-list></product-list>
                <product-form></product-form>
            `;
        }

        const cartContainer = this.shadowRoot?.querySelector('.cart-container');

        // CSS
        const cssDashboard = document.createElement('style');
        cssDashboard.innerHTML = styles;
        this.shadowRoot?.appendChild(cssDashboard);
    }
}

customElements.define('dashboard-component', Dashboard);
