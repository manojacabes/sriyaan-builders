// EcommerceHome.js

import React, { useState } from 'react';
import { styled } from '@mui/system';
import pic1 from '../../Images/pic1.jpg'
import ReCAPTCHA from 'react-google-recaptcha';
import pic2 from '../../Images/pic2.jpg'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import bedSlide from '../../Images/bedRoom.jpg'
import bath from '../../Images/bath.jpg';
import kitchen from '../../Images/kitchen.jpg';
import gym from '../../Images/gym.jpg'
import steelWorks from '../../Images/steelWorks.jpg'
import steelCut from '../../Images/steelCut.jpg';
import Lottie from 'react-lottie-player'
import offerBan from '../../Images/offerBanner.jpg'
import { fetchData, postData, getProductList } from '../../Services/Service';
import pic3 from '../../Images/pic3.jpg'
import ret from '../../Images/1725.jpg'
import tech1 from '../../Images/tech1.png'
import ReactCardSlider from 'react-card-slider-component';
import StarRatings from 'react-star-ratings';
import Rating from '@mui/material/Rating';
import './style.css'
import { CallEndOutlined, Share } from '@mui/icons-material'
import loader from '../loader';
import lottieJson from '../../Images/Animation - 1712235195558.json'
import { Container, Typography, Dialog, DialogActions, DialogTitle, DialogContent, CardActionArea, Button, CircularProgress, Grid, Card, CardMedia, CardContent } from '@mui/material';
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
const ConfirmOrderDialog = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirm Order</DialogTitle>
            <DialogContent>
                <p>Are you sure you want to confirm this order?</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={onConfirm} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};
const EcommerceHome = () => {
    const classes = useStyles();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [Loading, setLoading] = useState(false)
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
    const sliderClick = () => {
        console.log('item')
    }
    const slides = [
        { image: bedSlide, title: "Bed Room Accessories", description: "Looks good quaity for long life", clickEvent: sliderClick },
        { image: bath, title: "Bath Room Products", description: "Never swipe at the end", clickEvent: sliderClick },
        { image: kitchen, title: "Kitchen", description: "Authentic and sensitive", clickEvent: sliderClick },
        { image: gym, title: "Gym Products", description: "Stay Strong and healthy", clickEvent: sliderClick },
        { image: steelCut, title: "Laser Cutting Works", description: "Make your work easy", clickEvent: sliderClick },
        { image: steelWorks, title: "Steel Products and Services", description: "Good Quality Steels", clickEvent: sliderClick },
        { image: bedSlide, title: "Bed Room", description: "Never swipe at the end", clickEvent: sliderClick },
    ]
    React.useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await getProductList('http://localhost:8082/kit/product-purchase/v1/product?limit=15');
                console.log(response, 'res')
                setProducts(response?.products)
                setLoading(false)
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
    const [orderData, setOrderData] = React.useState({})
    const handleConfirmOrder = (index) => {
        console.log('Order confirmed');
        setDialogOpen(true);
        let productList = products[index]

        console.log(productList, 'productList')
        setOrderData(productList)
    };
    const handlePlaceOrder = async () => {
        let emailList = localStorage.getItem('user')
        if (emailList) {
            try {
                console.log(orderData, 'orderData')
                let body = {
                    "address": {
                        "blockNo": "string",
                        "city": "string",
                        "country": "string",
                        "districk": "string",
                        "name": "string",
                        "optionalPhoneNo": "string",
                        "phoneNo": "string",
                        "state": "string",
                        "street": "string"
                    },
                    "emailId": emailList || "",
                    "orderName": orderData?.productName,
                    "orderNotes": "string",
                    "productDetails": {
                        "products": {
                            // ...orderData
                            offer: orderData?.offer,
                            offerPrice: orderData?.offerPrice,
                            orgPrice: orderData?.orgPrice,
                            productId: orderData?.productId,
                            quantity: orderData?.quantity,
                            rating: orderData?.rating,
                            title: orderData?.title,
                            productName: orderData?.productName,
                            productDescription: orderData?.productDescription
                        }
                    }
                }
                const response = await postData('http://localhost:8082/kit/product-purchase/v1/initiate/order', body);
                console.log('Response from POST request:', response);
                if (response?.response === 'SUCCESS') {
                    // navigate('/home', { state: { response: response } });
                    enqueueSnackbar(response?.response, { variant: 'success' })
                    setDialogOpen(false);
                } else {
                    enqueueSnackbar(response?.response, { variant: 'warning' })
                }
            } catch (error) {
                console.error('Error posting data:', error);
            }
        }
    }

    return (
        <div className={classes.root}>
            {Loading ? loader : ""}
            <div className='Home1'>
                <div className='con1'>
                    <div className='welSri'>
                        Welcome to Sriyaan Connects
                    </div>
                    <div className='shop1'>
                        Shopping is a bit of a relaxing hobby for me,which is sometimes troubling for the bank balance
                    </div>
                    <div style={{ padding: '10px 80px' }}>
                        <button className='button-63'>
                            <a href='/about'>Learn More</a>

                        </button>
                    </div>


                </div>
                <div>
                    <Lottie
                        loop
                        animationData={lottieJson}
                        play
                        style={{ width: 150, height: 150 }}
                    />
                </div>
            </div>
            <div className='shopCat'>
                Shop Our Top Categories
            </div>
            <div className='slider1'>
                <ReactCardSlider slides={slides} />
            </div>
            <div className='shopCat'>
                Products and Services
            </div>
            <div style={{ margin: '10px' }}>
                {products?.length === 0 ?
                    <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                        <Typography>Products are not available, please contact support team. </Typography>
                    </Grid>
                    : <Grid container spacing={3}>
                        {products?.map((product, index) => (
                            <>
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Card className={classes.card} style={{ borderRadius: '20px', maxWidth: '100%', background: '#6600c3', padding: '0px 14px 15px', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ' }}>
                                        {/* <Grid style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: '10px',
                                        padding: '10px'
                                    }}>
                                        <img alt='123' src={product.productImage.FRONT_VIEW} />
                                    </Grid> */}
                                        <div class="container1">
                                            <img src={product.productImage.FRONT_VIEW} alt="Example Image" />
                                        </div>
                                        <CardContent style={{ padding: '0px' }}>
                                            <Typography variant="h6" style={{ color: '#ffffff' }} gutterBottom className='proTitle'>
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
                                                />
                                            </Grid>
                                            <Typography variant="h6" style={{ color: '#ffffff' }} gutterBottom className='proCost'>
                                                ${product.orgPrice} <del style={{ color: '#afafaf' }}> ${product.offerPrice}</del>
                                            </Typography>



                                            <Grid style={{
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }}>
                                                <Button className='btn1' onClick={() => handleCall('9487828735')} startIcon={<CallEndOutlined />} variant="contained" color="primary">
                                                    Call Now
                                                </Button>
                                                <Button className='btn2' onClick={() => handleConfirmOrder(index)} variant="contained" color="primary">
                                                    Place Order
                                                </Button>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid >
                            </>
                        ))}
                    </Grid>}
            </div>

            <footer>
                <div class="container2">
                    <div class="footer-content">
                        <div class="footer-section about">
                            <h2>Sriyaan Focus</h2>
                            <p>Shopping is a bit of a relaxing hobby for me,which is sometimes troubling for the bank balance</p>
                        </div>
                        <div class="footer-section links">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="/requite">Join Our Team</a></li>
                                <li><a href="/orders">My Orders</a></li>
                                <li><a href="/about">About Us</a></li>
                            </ul>
                        </div>
                        <div class="footer-section contact">
                            <h2>Contact Us</h2>
                            <p>Email: sriyaanconnect@gmail.com</p>
                            <p>Call : 08069857329</p>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    &copy; 2024 Sriyaan Connect Industries
                </div>
            </footer>
            {/* <ConfirmOrderDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onConfirm={handleConfirmOrder}
            /> */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Confirm Order</DialogTitle>
                <DialogContent>
                    <p>Are you sure you want to confirm this order?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handlePlaceOrder} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
};

export default EcommerceHome;
