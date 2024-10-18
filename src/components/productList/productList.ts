import styles from './productList.css'
import ProductCard, {Attribute as ProductAttribute} from "../product/product";
import { addObserver } from "../../store/index";
import { AppState } from "../../types/store";
import { appState } from "../../store/index";
import { getProductsRedux } from '../../store/actions';
import { dispatch } from '../../store/index';

class ProductList extends HTMLElement {
    products?: ProductCard[];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    async connectedCallback() {
        this.render();
        if(appState.products === undefined || appState.products.length === 0) { 
            const action = await getProductsRedux();
            dispatch(action);   
            console.log(action);
            console.log('appstate', appState.products);
            console.log('EJECUTANDO GETPRODUCTS');              
        }
    }

    render() { 
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section class="product-list"></section>
            `;

            const container = this.shadowRoot?.querySelector('.product-list');
            
            const data = appState.products;
            data.forEach((product: any) => {
                const productCard = document.createElement('product-card') as ProductCard;
                productCard.setAttribute(ProductAttribute.uid, String(product.id));
                productCard.setAttribute(ProductAttribute.image, product.image);
                productCard.setAttribute(ProductAttribute.producttitle, product.title);
                productCard.setAttribute(ProductAttribute.description, product.description);
                productCard.setAttribute(ProductAttribute.category, product.category);
                productCard.setAttribute(ProductAttribute.price, product.price);
                productCard.setAttribute(ProductAttribute.rating, String(product.rating.rate));
                
                container?.appendChild(productCard);
            });
        }

        const cssProductList = document.createElement('style');
        cssProductList.innerHTML = styles;
        this.shadowRoot?.appendChild(cssProductList);
    }
};

customElements.define('product-list', ProductList);
export default ProductList;