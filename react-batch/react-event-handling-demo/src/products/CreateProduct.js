import React, { useState } from 'react'
import { products as productData } from '../data/ProductData';



// Form handling in two ways - 1. Working with multiple states | 2. Working with single state  
const CreateProduct = () => {

    //create State vars for each field
    let [productName, setProductName] = useState('');
    let [brand, setBrand] = useState('');
    let [category, setCategory] = useState('');
    let [inStockQuantity, setInStockQuantity] = useState(0);
    let [price, setPrice] = useState(0);
    let [descriptions, setDescriptions] = useState('');
    let [coverImg, setCoverImg] = useState('');


    // Create input event handler for each field
    const nameInputHandler = (event) => {
        // console.log(event.target.value);
        setProductName(event.target.value)
    }

    const brandInputHandler = (event) => {
        setBrand(event.target.value)
    }

    const categoryInputHandler = (event) => {
        setCategory(event.target.value)
    }

    const stockRangeInputHandler = (event) => {
        setInStockQuantity(event.target.value)
    }

    const priceInputHandler = (event) => {
        setPrice(event.target.value)
    }

    const descriptionInputHandler = (event) => {
        setDescriptions(event.target.value)
    }

    const coverImageInputHandler = (event) => {
        setCoverImg(event.target.value);
    }



    // Extract unique categories and brands
    const uniqueCategories = Array.from(new Set(productData.map(product => product.category)));
    const uniqueBrands = Array.from(new Set(productData.map(product => product.brand)));

    let [data, setData] = useState([]);

    const createProductEventHandler = (event) => {
        event.preventDefault();
        // let productData = {
        //     productName : productName,
        //     brand : brand,
        //     category : category,
        //     inStockQuantity : inStockQuantity,
        //     price : price,
        //     descriptions : descriptions,
        //     coverImg : coverImg
        // }
        setData([
            productName,
            brand,
            category,
            inStockQuantity,
            price,
            descriptions,
            coverImg
        ]);
        console.log(data);
    }

    return (
        <form onSubmit={createProductEventHandler}>
            <div className='conatiner col-md-4'>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control form-control-sm" id="productName" onChange={nameInputHandler} placeholder='enter product name' />
                </div>
                <div className="mb-3">
                    <select id='brand' className="form-select form-select-sm" aria-label="brand" onChange={brandInputHandler}>
                        <option defaultValue={'select brand'}>select brand</option>
                        {
                            uniqueBrands.map((brand, index) => (
                                <option key={index} id={index} value={brand}>{brand}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <select id='category' className="form-select form-select-sm" aria-label="category" onChange={categoryInputHandler}>
                        <option defaultValue={'select category'} >select category</option>
                        {
                            uniqueCategories.map((category, index) => (
                                <option key={index} id={index} value={category} >{category}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="inStockQuantity" className="form-label">Stock range</label>
                    <input type="range" className="form-range" min="0" max="50" step="2" id="inStockQuantity" onChange={stockRangeInputHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control form-control-sm" id="price" onChange={priceInputHandler} placeholder='enter product price' />
                </div>
                <div className="mb-3">
                    <label htmlFor="descriptions" className="form-label">Descriptions</label>
                    <textarea className="form-control form-control-sm" id="descriptions" rows="3" onChange={descriptionInputHandler} placeholder='type product description'></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="coverImg" className="form-label">Cover Img</label>
                    <input className="form-control form-control-sm" id="coverImg" type="file" onChange={coverImageInputHandler} />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Create Product</button>
                <div class="alert alert-primary" role="alert">
                    Form Data : {data[3]}
                </div>
            </div>
        </form>
    )
}

export default CreateProduct
