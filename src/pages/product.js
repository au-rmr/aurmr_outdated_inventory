import React from 'react';
import "./product.css";
import * as Constants from "../Constants";
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const Product = () => {
    try {
        var val = useParams();
        var productInfo = Constants.rows[val["productId"]];
        return (
            <div id="overall">
                <h1>Product Page</h1>
                <img src={productInfo.picUrl} />
                <div id="info">
                    <h3>Product Details</h3>
                    <p>Name: {productInfo.name}</p>
                    <p>Price: {productInfo.price}</p>
                    <p>Width: {productInfo.width_size}</p>
                    <p>Length: {productInfo.length_size}</p>
                    <p>Height: {productInfo.height_size}</p>
                    <p>Units: {productInfo.size_units}</p>
                </div>
                <Button variant="contained"><Link to={`/product/${productInfo.id}/edit`}>Edit</Link></Button>
            </div>
        )
    } catch (err) {
        return (
            <div id="overall">
                <h1>Product Page</h1>
                <p>This product doesn't exist</p>
            </div>
        )
    }
}

export default Product;