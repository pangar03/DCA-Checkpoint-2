import { dispatch } from "../../store/index";
import { addProduct } from "../../store/actions";
import styles from './productForm.css';
import ProductCard, {Attribute as ProductAttribute} from "../product/product";

class ProductForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <form>
                    <label for="product-title">Title</label>
                    <input type="text" id="product-title" name="product-title" required>
                    <label for="product-description">Description</label>
                    <input type="text" id="product-description" name="product-description" required>
                    <label for="product-price">Price</label>
                    <input type="number" id="product-price" name="product-price" min="0" required>
                    <label for="product-category">Category</label>
                    <input type="text" id="product-category" name="product-category" required>
                    <label for="product-rating">Rating</label>
                    <input type="number" id="product-rating" name="product-rating" min="0" max="5" required>
                    <label for="product-image">Image</label>
                    <input type="text" id="product-image" name="product-image" required>
                    <button type="submit">Create Product</button>
                </form>
            `;

            const form = this.shadowRoot.querySelector('form')!;
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const title = (form.querySelector('#product-title') as HTMLInputElement).value;
                const description = (form.querySelector('#product-description') as HTMLInputElement).value;
                const price = (form.querySelector('#product-price') as HTMLInputElement).value;
                const category = (form.querySelector('#product-category') as HTMLInputElement).value;
                const rating = (form.querySelector('#product-rating') as HTMLInputElement).value;
                const image = (form.querySelector('#product-image') as HTMLInputElement).value;
                const productId = new Date().getTime();

                const product = this.ownerDocument.createElement('product-card') as ProductCard;

                product.setAttribute(ProductAttribute.uid, String(productId));
                product.setAttribute(ProductAttribute.producttitle, title);
                product.setAttribute(ProductAttribute.description, description);
                product.setAttribute(ProductAttribute.price, String(price));
                product.setAttribute(ProductAttribute.category, category);
                product.setAttribute(ProductAttribute.rating, String(rating));
                product.setAttribute(ProductAttribute.image, image);

                dispatch(addProduct(product));
            });

            const cssForm = this.ownerDocument.createElement('style');
            cssForm.innerHTML = styles;
            this.shadowRoot.appendChild(cssForm);
        }
    }
};

customElements.define('product-form', ProductForm);
export default ProductForm;