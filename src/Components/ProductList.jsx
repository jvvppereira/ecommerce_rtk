import React from 'react';
import './ProductList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';// Action to add product to cart

const ProductList = () => {

    const products = [
        { id: 1, name: 'Product A', price: 60 },
        { id: 2, name: 'Product B', price: 75 },
        { id: 3, name: 'Product C', price: 30 },
    ];

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems); // Get cart items globally

    const handleAddToCart = product => {
        dispatch(addItemToCart(product));// Add product to cart
    };

    return (
        <div className="product-list">
            <h2 className="product-list-title">Products</h2>
            <ul className="product-list-items">
                {products.map(product => {
                    const wasAdded = cartItems.some(item => item.id === product.id)
                    return (
                        <li key={product.id} className="product-list-item">
                            <span>{product.name} - ${product.price}</span>
                            <button
                                className={`add-to-cart-btn ${wasAdded ? 'disabled' : ''}`}
                                onClick={() => handleAddToCart(product)}
                                disabled={wasAdded} // Disable if already in cart
                            >
                                {wasAdded ? 'Added' : 'Add to Cart'}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ProductList;
