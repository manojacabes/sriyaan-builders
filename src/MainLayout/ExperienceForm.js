import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ExperienceForm = ({ onNext, onBack, onSave }) => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        company: '',
        years: '',
    });

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
        <form onSubmit={handleSubmit}>
            <TextField
                name="jobTitle"
                label="Job Title"
                variant="outlined"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                name="company"
                label="Company"
                variant="outlined"
                value={formData.company}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                name="years"
                label="Years of Experience"
                type="number"
                variant="outlined"
                value={formData.years}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            {/* <Button onClick={onBack} variant="outlined" color="primary"> */}
                {/* Back
            </Button>
            <Button type="submit" variant="contained" color="primary">
                Next
            </Button> */}
        </form>
    );
};

export default ExperienceForm;
