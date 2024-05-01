// EcommerceHome.js

import React from 'react';
import { styled } from '@mui/system';
import { Container, Grid, Typography, Button } from '@mui/material';
import BackgroundImage from '../Images/offerBanner.jpg'

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
                <div className='data1'>
                    <div style={{
                        fontSize: '25px',
                        width: '50%',
                        fontFamily: 'Poppins'
                    }}>
                        "When you undervalue what you do, the world will undervalue who you are." –Oprah Winfrey
                    </div>
                </div>
                {/* <Grid>
                    <Grid>
                        <Grid></Grid>
                    </Grid>
                    <Grid>
                        <img src={BackgroundImage} alt='112x' />
                    </Grid>
                </Grid> */}
                <Typography variant="subtitle1" className={classes.subtitle} style={{
                    padding: '15px',
                    fontWeight: '600',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    Our Contact details and infos
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle} style={{
                    padding: '30px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    Sriyyan Industries - Manufacturer of gym stand, laser cutting services & sheet metal fabrication in Salem, Tamil Nadu.
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle} style={{
                    padding: '15px',
                    fontWeight: '600',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    Our Services and sections
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* <h2>Quick Links</h2> */}
                    <ul style={{ listStyle: 'none', display: 'flex' }}>
                        <li style={{ padding: '12px' }}><a href="#">Home</a></li>
                        <li style={{ padding: '12px' }}><a href="/requite">Join Our Team</a></li>
                        <li style={{ padding: '12px' }}><a href="/orders">My Orders</a></li>
                        <li style={{ padding: '12px' }}><a href="/about">About Us</a></li>
                    </ul>
                </div>
                <Typography variant="subtitle1" className={classes.subtitle} style={{
                    padding: '15px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                   Some more data will update soon...
                </Typography>
                {/* <Button variant="contained" color="primary" className={classes.exploreButton}>
                    Explore Now
                </Button> */}
            </Container>
        </div>
    );
};

export default EcommerceHome;
