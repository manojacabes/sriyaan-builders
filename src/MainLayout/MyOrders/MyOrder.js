import React from 'react';
import { Container, Grid, Typography, Stepper, Step, StepLabel } from '@mui/material';
import { styled } from '@mui/system';
import { fetchData, postData, getOrdersList, getProductList } from '../../Services/Service';
import './order.css'
const useStyles = styled((theme) => ({
    stepper: {
        margin: '0 auto',
        padding: '20px',
        '$ .css-zpcwqm-MuiStepConnector-root': {
            left: 'calc(-53% + 20px)',
            right: 'calc(47% + 20px)'
        },
        '& .MuiStepIcon-root': {
            color: '#ffffff !important',
            border: '3px solid',
            borderRadius: '12px',
            borderColor: '#AAAAAA'
        },
        '& .MuiStepIcon-root.MuiStepIcon-completed': {
            color: '#43a047 !important',
            border: '0px solid',
            borderRadius: '12px'
        },
        '& .MuiStepIcon-root.MuiStepIcon-active': {
            color: '#ffffff !important',
            border: '3px solid',
            borderRadius: '12px',
            borderColor: '#AAAAAA'
        },
        '& .MuiStepConnector-alternativeLabel': {
            left: 'calc(-53% + 20px)',
            right: 'calc(47% + 20px)'
        },
        '& .MuiStepConnector-lineHorizontal': {
            borderTopWidth: '2px'
        },
        '& .MuiStepConnector-line.MuiStepConnector.active': {
            borderColor: '#43a047 !important',
            // border: '0px solid',
            // borderRadius: '12px'
        },
        '& .MuiStepLabel-label.MuiStepLabel-completed': {
            color: ' rgb(67 160 71)'
        }

    },
}));
// Define the order status data
const orderStatusData = [
    { label: 'Order Placed', value: "INITIATED", description: 'Your order has been placed.' },
    { label: 'Processing', value: "PENDING_INQUIRY", description: 'We are processing your order.' },
    { label: 'Manufacturing', value: "IN_PROGRESS", description: 'Your order has been started to manufacturing.' },
    { label: 'Ready for Delivery', value: "OUT_FOR_DELIVERY", description: 'Your order has been Ready to pick up.' },
    { label: 'Delivered', value: "DELIVERED", description: 'Your order has been Ready to pick up.' },
];

const OrdersScreen = () => {
    // Simulated current order status (you can replace it with actual data)
    const currentOrderStatusIndex = 2; // Change this index to see different statuses
    const classes = useStyles();
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        async function fetchData() {
            let emailData = localStorage.getItem('user')
            if (emailData) {
                try {
                    const response = await getOrdersList(`http://localhost:8082/kit/product-purchase/v1/?email-id=${emailData}&page=0&size=100`);
                    console.log(response, 'res')
                    setProducts(response?.content)
                } catch (error) {
                    console.error('Error posting data:', error);
                }
            }

        }
        fetchData()
    }, [])
    console.log(products, 'products12')
    return (
        <Container maxWidth="md" className="orders" style={{ padding: "30px" }}>
            {products?.map((item) => {
                console.log(item, 'items')
                return (
                    <Grid className='orderData'>
                        <Grid>
                            <Typography variant="body1" style={{ marginTop: '20px', color: '#fff', fontWeight: 800 }}>
                                Order details
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: '10px' }}>
                                Order Id:<strong style={{ color: '#292608', marginLeft: '6px' }}>{item.orderId}</strong>
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: '10px' }}>
                                Product Name:<strong style={{ color: '#292608', marginLeft: '6px' }}>{item.productDetails.products.productName}</strong>
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: '10px' }}>
                                Price Amount  :<strong style={{ color: '#292608', marginLeft: '6px' }}>{item.productDetails.products.offerPrice}</strong>
                            </Typography>
                        </Grid>
                        <Stepper style={{ padding: "25px" }} className={classes.stepper} activeStep={
                            item?.deliveryStatus === 'PENDING_INQUIRY' ? 1 : item?.deliveryStatus === 'IN_PROGRESS' ? 2 :
                                item?.deliveryStatus === 'OUT_FOR_DELIVERY' ? 3 : item?.deliveryStatus === 'DELIVERED' ? 5 : 1
                        } alternativeLabel>
                            {orderStatusData.map((status, index) => (
                                <Step key={status.label}>
                                    <StepLabel>{status.label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {/* <Typography variant="body1" style={{ marginTop: '20px' }}>
                            {orderStatusData[currentOrderStatusIndex].description}
                        </Typography> */}
                        {/* <Typography variant="body1" style={{ marginTop: '20px' }}>
                            {item.deliveryStatus}
                        </Typography> */}
                    </Grid>
                )
            })
            }
        </Container>
    );
};

export default OrdersScreen;
