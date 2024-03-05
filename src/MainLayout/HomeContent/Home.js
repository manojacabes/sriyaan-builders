// EcommerceHome.js

import React from 'react';
import { styled } from '@mui/system';
import pic1 from '../../Images/pic1.jpg'
import ReCAPTCHA from 'react-google-recaptcha';
import pic2 from '../../Images/pic2.jpg'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { fetchData, postData, getProductList } from '../../Services/Service';
import pic3 from '../../Images/pic3.jpg'
import StarRatings from 'react-star-ratings';
import Rating from '@mui/material/Rating';
import './style.css'
import { CallEndOutlined, Share } from '@mui/icons-material'
import { Container, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
// import CallButton from './CallButton';

const useStyles = styled((theme) => ({
    root: {
        // padding: 4,
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        color: '#333',
        '&::-webkit-scrollbar': {
            width: '12px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
        },
    },
    section: {
        marginTop: 4,
    },
    title: {
        fontSize: '47px !important',
        padding: '20px',
        paddingBottom: '4px',
        marginBottom: '0px',
        fontFamily: 'system-ui !important',
        color: '#ea4e25'
    },
    subtitle: {
        fontSize: "14px",
        color: '#ffffff',
        marginBottom: 3,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    cardMedia: {
        paddingTop: '75%', // 4:3 aspect ratio
    },
    cardContent: {
        flexGrow: 1,
    },
    productTitle: {
        lineHeight: '1.2em',
        // height: '2.4em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginBottom: 0.5,
        color: '#d5b093',
    },
    productPrice: {
        fontWeight: 'bold',
        color: '#f50057', // Secondary color
    },
    exploreButton: {
        marginTop: 2,
        padding: 1.5,
        fontSize: "12px",
        backgroundColor: '#f50057', // Secondary color
        color: '#fff',
        '&:hover': {
            backgroundColor: '#d50000', // Darken the color on hover
        },
    },
}));

const featuredProducts = [
    { id: 1, name: 'Kitchen Design', price: '$19.99', imageUrl: pic1 },
    { id: 2, name: 'Steel Chairs', price: '$29.99', imageUrl: pic2 },
    { id: 3, name: 'Dining Tables', price: '$39.99', imageUrl: pic3 },
    { id: 4, name: 'Kitchen Design', price: '$19.99', imageUrl: pic1 },
    { id: 5, name: 'Steel Chairs', price: '$29.99', imageUrl: pic2 },
    { id: 6, name: 'Dining Tables', price: '$39.99', imageUrl: pic3 },
];

//const featuredCategories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Sports & Outdoors'];

const EcommerceHome = () => {
    const classes = useStyles();
    const [products, setProducts] = React.useState()
    const handleCall = (phoneNumber) => {
        // Construct the tel URL with the phone number
        const telUrl = `tel:${phoneNumber}`;

        // Open the phone dialer with the tel URL
        window.open(telUrl);
    };
    const handleShare = async (share) => {
        try {
            await navigator.share(share);
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };
    React.useEffect(() => {
        async function fetchData() {
            try {
                const response = await getProductList('http://localhost:8082/kit/product-purchase/v1/product?limit=15');
                console.log(response, 'res')
                setProducts(response?.products)
                // if (response?.response === 'SUCCESS') {
                //     enqueueSnackbar(response?.response, { variant: 'success' })
                // } else {

                //     enqueueSnackbar(response?.response, { variant: 'warning' })
                // }

                // console.log('Response from POST request:', response);
            } catch (error) {
                console.error('Error posting data:', error);
            }
        }
        fetchData()
    }, [])
    console.log(products, 'rr')
    const shareData = {
        title: 'Example Title',
        text: 'Check out this awesome content!',
        url: 'https://example.com'
    };
    const onchange = (value) => {
        console.log(value, 'value')
    }
    return (
        <div className={classes.root}>
            <Grid style={{
                background: '#ffffff',
                minHeight: '90.8vh',
                maxWidth: '-webkit-fill-available'
            }}>
                <Typography variant="h1" className='HomeHeader' gutterBottom>
                    Welcome to Our Online Store
                </Typography>
                <Typography variant="subtitle1" className='HomeSub' paragraph>
                    Discover a world of amazing products and exclusive deals. Shop with confidence!
                </Typography>
                <Typography variant="h1" className='title1' gutterBottom>
                    Featured Products
                </Typography>
                <div style={{ margin: '10px' }}>

                    {/* <ReCAPTCHA
                        sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                        onChange={onchange}
                    /> */}
                    <Grid container spacing={3}>
                        {products?.map((product) => (
                            <>
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Card className={classes.card} style={{ borderRadius: '20px', maxWidth: '100%', background: '#ffffff', padding: '0px 10px 15px 10px', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ' }}>

                                        <img alt='123' src={product.productImage.FRONT_VIEW} />
                                        <CardContent style={{ padding: '0px' }}>
                                            {/* <Grid container style={{
                                                display: 'flex', justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}> */}
                                            <Typography variant="h6" gutterBottom className='proTitle'>
                                                {product.productName}
                                            </Typography>
                                            <Grid style={{
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                <Rating
                                                    name="hover-feedback"
                                                    value={product.rating}
                                                    defaultValue={0}
                                                    precision={product.rating}
                                                // getLabelText={getLabelText}
                                                // onChange={(event, newValue) => {
                                                //     setValue(newValue);
                                                // }}
                                                // onChangeActive={(event, newHover) => {
                                                //     setHover(newHover);
                                                // }}
                                                // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                            </Grid>
                                            <Typography variant="h6" gutterBottom className='proCost'>
                                                ${product.orgPrice} <del style={{ color: '#afafaf' }}> ${product.offerPrice}</del>
                                            </Typography>
                                            {/* </Grid> */}



                                            <Grid style={{
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }}>
                                                <Button className='btn1' onClick={() => handleCall('9487828735')} startIcon={<CallEndOutlined />} variant="contained" color="primary">
                                                    Call Now
                                                </Button>
                                                <Button className='btn2' onClick={() => handleCall('9487828735')} variant="contained" color="primary">
                                                    Get Price
                                                </Button>
                                                {/* <Button variant="contained" startIcon={<CallEndOutlined />}  className='button-87' color="primary">
                                                    Call Now
                                                </Button>
                                                <Button variant="contained" className='button-87' color="primary">
                                                    Get Price
                                                </Button> */}
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid >
                            </>
                        ))}

                    </Grid>
                </div>

                {/* <div className={classes.section}>
                    <Typography variant="h4" gutterBottom>
                        Explore Categories
                    </Typography>
                    <Grid container spacing={3}>
                        {featuredCategories.map((category) => (
                            <Grid item key={category} xs={12} sm={6} md={4} lg={3}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h6" gutterBottom className={classes.productTitle}>
                                            {category}
                                        </Typography>
                                        <Button variant="contained" color="primary">
                                            Explore {category}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div> */}
            </Grid >

        </div >
    );
};

export default EcommerceHome;
