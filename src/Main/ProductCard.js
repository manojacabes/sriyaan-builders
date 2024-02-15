import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ name, price, imageUrl, id }) => {
    return (
        <Card>
            <CardActionArea component={Link} to={`/product/${id}`}>
                <CardMedia component="img" height="140" image={imageUrl} alt={name} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: ${price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button component={Link} to={`/product/${id}`} size="small" color="primary">
                View Details
            </Button>
        </Card>
    );
};

export default ProductCard;
