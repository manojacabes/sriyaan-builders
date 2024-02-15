import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL parameter

    return (
        <div>
            <h2>Product Details for ID: {id}</h2>
            {/* Fetch and display product details based on the ID */}
        </div>
    );
};

export default ProductDetails;
