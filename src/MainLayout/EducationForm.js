import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const EducationForm = ({ onNext, onBack, onSave }) => {
    const [formData, setFormData] = useState({
        degree: '',
        institution: '',
        graduationYear: '',
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
        onSave({ education: formData });
        onNext();
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="degree"
                label="Degree"
                variant="outlined"
                value={formData.degree}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
             <TextField
                name="tenPercent"
                label="!0th Percentage"
                variant="outlined"
                value={formData.tenPercent}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                name="twoPercent"
                label="12th Percentage"
                variant="outlined"
                value={formData.twoPercent}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                name="institution"
                label="Institution"
                variant="outlined"
                value={formData.institution}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                name="graduationYear"
                label="Graduation Year"
                type="number"
                variant="outlined"
                value={formData.graduationYear}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
             <TextField
                name="skillSet"
                label="Skill Set"
                multiline
                rows={2}
                variant="outlined"
                value={formData.skillSet}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            {/* <Button onClick={onBack} variant="outlined" color="primary">
                Back
            </Button>
            <Button type="submit" variant="contained" color="primary">
                Next
            </Button> */}
        </form>
    );
};

export default EducationForm;
