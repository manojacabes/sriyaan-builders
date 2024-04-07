// EcommerceHome.js

import React from 'react';
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
import steelCut from '../../Images/steelCut.jpg'
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
import { Container, Typography, CardActionArea, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
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
    const handlePlaceOrder = async () => {
        try {
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
                "emailId": "manojkm11301@gmail.com",
                "orderName": "test",
                "orderNotes": "string",
                "productDetails": {
                    "products": {
                        "additionalProp1": "string",
                        "additionalProp2": "string",
                        "additionalProp3": "string"
                    }
                }
            }
            const response = await postData('http://localhost:8082/kit/product-purchase/v1/initiate/order', body);
            console.log('Response from POST request:', response);
            if (response?.response === 'SUCCESS') {
                // navigate('/home', { state: { response: response } });
                enqueueSnackbar(response?.response, { variant: 'success' })
            } else {
                enqueueSnackbar(response?.response, { variant: 'warning' })
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
    }
    return (
        <div className={classes.root}>
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
                            Learn More
                        </button>
                    </div>
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
                <Grid container spacing={3}>
                    {products?.map((product, index) => (
                        <>
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <Card className={classes.card} style={{ borderRadius: '20px', maxWidth: '100%', background: '#ffffff', padding: '0px 10px 15px 10px', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ' }}>
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
                                            />
                                        </Grid>
                                        <Typography variant="h6" gutterBottom className='proCost'>
                                            ${product.orgPrice} <del style={{ color: '#afafaf' }}> ${product.offerPrice}</del>
                                        </Typography>



                                        <Grid style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                            <Button className='btn1' onClick={() => handleCall('9487828735')} startIcon={<CallEndOutlined />} variant="contained" color="primary">
                                                Call Now
                                            </Button>
                                            <Button className='btn2' onClick={() => handlePlaceOrder(index)} variant="contained" color="primary">
                                                Place Order
                                            </Button>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid >
                        </>
                    ))}

                </Grid>
            </div>

            <footer>
                <div class="container2">
                    <div class="footer-content">
                        <div class="footer-section about">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="footer-section links">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </div>
                        <div class="footer-section contact">
                            <h2>Contact Us</h2>
                            <p>Email: example@example.com</p>
                            <p>Phone: 123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    &copy; 2024 Ecommerce Website
                </div>
            </footer>
            {/* <Grid style={{
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
                    <Grid container spacing={3}>
                        {products?.map((product) => (
                            <>
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Card className={classes.card} style={{ borderRadius: '20px', maxWidth: '100%', background: '#ffffff', padding: '0px 10px 15px 10px', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ' }}>

                                        <img alt='123' src={product.productImage.FRONT_VIEW} />
                                        <CardContent style={{ padding: '0px' }}>
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
                                                />
                                            </Grid>
                                            <Typography variant="h6" gutterBottom className='proCost'>
                                                ${product.orgPrice} <del style={{ color: '#afafaf' }}> ${product.offerPrice}</del>
                                            </Typography>



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
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid >
                            </>
                        ))}

                    </Grid>
                </div>
            </Grid > */}

        </div >
    );
};

export default EcommerceHome;
