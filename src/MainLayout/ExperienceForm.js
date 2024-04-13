import React, { useState } from 'react';
import { TextField, Typography, Button } from '@mui/material';

const ExperienceForm = ({ onNext, formData, setFormData, onBack, onSave }) => {
    // const [formData, setFormData] = useState({
    //     jobTitle: '',
    //     company: '',
    //     years: '',
    // });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ experience: formData });
        onNext();
    };

    return (
        <form className='formData' onSubmit={handleSubmit}>
            <Typography className='label1'>Job Title</Typography>
            <TextField
                name="jobTitle"
                variant="outlined"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>Company Name</Typography>
            <TextField
                name="company"
                variant="outlined"
                value={formData.company}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>Years of Experience</Typography>
            <TextField
                name="years"
                type="number"
                variant="outlined"
                value={formData.years}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
        </form>
    );
};

export default ExperienceForm;
