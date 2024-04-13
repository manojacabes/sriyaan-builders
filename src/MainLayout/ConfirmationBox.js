import React from 'react';
import { Typography, Button } from '@mui/material';

const ConfirmationBox = ({ data, onBack }) => {
    const { aboutMe, education, experience } = data;

    const handleSubmit = () => {
        // Handle form submission here
        console.log("Form submitted:", data);
    };

    return (
        <div className='formData'>
            <Typography variant="h5" gutterBottom>
                Thanks for Confirmation
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                <strong>About Me:</strong>
            </Typography>
        </div>
    );
};

export default ConfirmationBox;
