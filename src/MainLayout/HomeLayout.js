// EcommerceHome.js

import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Button } from '@mui/material';
import BackgroundImage from '../Images/black-friday-elements-assortment.jpg'

const useStyles = styled((theme) => ({
    root: {
        backgroundImage: `url(${BackgroundImage})`,  // Replace with the actual URL of your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
    },
    title: {
        fontSize: '12px',
        marginBottom: 2,
    },
    subtitle: {
        fontSize: '15px',
        marginBottom: 3,
    },
    exploreButton: {
        marginTop: 2,
        padding: '1.5px 4px',
        fontSize: '12px',
    },
}));

const EcommerceHome = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                {/* <Typography variant="h1" className={classes.title}>
                    Welcome to Our Online Store
                </Typography> */}
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Sriyyan Industries - Manufacturer of gym stand, laser cutting services & sheet metal fabrication in Salem, Tamil Nadu.
                </Typography>
                <Button variant="contained" color="primary" className={classes.exploreButton}>
                    Explore Now
                </Button>
            </Container>
        </div>
    );
};

export default EcommerceHome;
