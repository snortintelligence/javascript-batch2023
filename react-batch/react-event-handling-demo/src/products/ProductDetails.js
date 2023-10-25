
import React, { useState } from 'react'
import Button from '../components/custom/Button'


const styled = {
    width: '18rem'
}

const productTitle = {
    fontSize: '14px',
    color: '#240071',
}


const ProductDetails = (props) => {

    console.log('ProductDetails component is executed!');

    // Returns a stateful value, and a function to update it. It recalls ProductDetails function when the productCount variable is getting updated. 
    // useState() - must use it inside only a Component function not outside the Component function or inside a nested function 
    // Each instance of ProductDetails initialised productCount by 0 only once.
    // useState() - It changes UI for dynamic web page
    let [productCount, updateProductCount] = useState(0); 

    const cartItemsCount = () => {
        // immeditate call this cartItemsCount function so use ()
        return productCount > 0 ? productCount : 'empty cart';
    }

    const incrementProductCount = () => {
        updateProductCount(++productCount);
        console.log('product added : ', productCount);
    }

    const decrementProductCount = () => {
        updateProductCount(--productCount);
        console.log('product removed : ', productCount);
    }

    const badgeClasses = props.inStockQuantity > 0 ? 'badge text-bg-success' : 'badge text-bg-danger';
    const isAvailableText = props.inStockQuantity > 0 ? 'In stock' : 'outof stock';
    return (
        <div className="col">
            <div className="p-3">
                <div className="card" style={styled}>
                    <img src={props.coverImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.descriptions}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span style={productTitle}>Brand</span> - {props.brand}
                        </li>
                        <li className="list-group-item">
                            <span style={productTitle}>Category</span> - {props.category}
                        </li>
                        <li className="list-group-item">
                            <span style={productTitle} className={badgeClasses}>{isAvailableText}</span> - {props.inStockQuantity}
                        </li>
                        <li className="list-group-item">
                            <span style={productTitle}>Price</span> - {props.price}
                        </li>
                    </ul>
                    <div className="card-body">
                        {/* custom Button so pass event as a props */}
                        <Button eventHandler={incrementProductCount}>+</Button>
                        <span style={{ color: 'gray', fontWeight: 'bolder', padding: '8px 14px' }}>
                            {cartItemsCount()}
                        </span>
                        <Button eventHandler={decrementProductCount}>-</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
