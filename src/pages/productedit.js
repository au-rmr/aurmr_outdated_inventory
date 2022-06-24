import React from 'react';
import * as Constants from "../Constants";
import { useParams } from 'react-router-dom';

const ProductEdit = () => {
    var val = useParams();
    var productInfo = Constants.rows[val["productId"]];
    return (
        
        <div id="overall">
            <h1>Edit - {productInfo.name}</h1>
        </div>
    );
}

export default ProductEdit;