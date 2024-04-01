import React from 'react';
import { Container, Typography, Stepper, Step, StepLabel } from '@mui/material';

// Define the order status data
const orderStatusData = [
    { label: 'Order Placed', description: 'Your order has been placed.' },
    { label: 'Processing', description: 'We are processing your order.' },
    { label: 'Shipped', description: 'Your order has been shipped.' },
    { label: 'Delivered', description: 'Your order has been delivered.' },
];

const OrdersScreen = () => {
    // Simulated current order status (you can replace it with actual data)
    const currentOrderStatusIndex = 2; // Change this index to see different statuses

    return (
        <Container maxWidth="md">
            {/* <Typography variant="h4" gutterBottom>
                My Orders
            </Typography> */}
            <Stepper activeStep={currentOrderStatusIndex} alternativeLabel>
                {orderStatusData.map((status, index) => (
                    <Step key={status.label}>
                        <StepLabel>{status.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Typography variant="body1" style={{ marginTop: '20px' }}>
                {orderStatusData[currentOrderStatusIndex].description}
            </Typography>
        </Container>
    );
};

export default OrdersScreen;
