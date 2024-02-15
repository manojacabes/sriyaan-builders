import React from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

const products = [
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, imageUrl: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 39.99, imageUrl: 'product3.jpg' },
    // Add more products as needed
];

const Body = () => {
    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <ProductCard {...product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Body;
