import React, { useState } from 'react';
import { TextField, Typography, Button, MenuItem } from '@mui/material';

const EducationForm = ({ onNext, formData, setFormData, onBack, onSave }) => {
    // const [formData, setFormData] = useState({
    //     degree: '',
    //     institution: '',
    //     graduationYear: '',
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
        onSave({ education: formData });
        onNext();
    };

    return (
        <form className='formData' onSubmit={handleSubmit}>
            <Typography className='label1'>Degree</Typography>
            <TextField
                name="degree"
                // label="Degree"
                variant="outlined"
                value={formData.degree}
                onChange={handleChange}
                required
                select
                fullWidth
                margin="normal"
            >
                {[{ value: 'IT', label: 'IT' }, { value: 'DIPLAMO', label: 'DIPLAMO' }].map((item) => {
                    return (
                        <>
                            <MenuItem value={item.value}>
                                {item.label}
                            </MenuItem>
                        </>
                    )
                })}
            </TextField>
            <Typography className='label1'>10th Percentage</Typography>
            <TextField
                name="tenPercent"
                // label="10th Percentage"
                variant="outlined"
                value={formData.tenPercent}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>12th Percentage</Typography>
            <TextField
                name="twoPercent"
                // label="12th Percentage"
                variant="outlined"
                value={formData.twoPercent}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>Institution</Typography>
            <TextField
                name="institution"
                // label="Institution"
                variant="outlined"
                value={formData.institution}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>Graduation Year</Typography>
            <TextField
                name="graduationYear"
                // label="Graduation Year"
                type="number"
                variant="outlined"
                value={formData.graduationYear}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>Skill Set</Typography>
            <TextField
                name="skillSet"
                // label="Skill Set"
                multiline
                rows={2}
                variant="outlined"
                value={formData.skillSet}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
        </form>
    );
};

export default EducationForm;
