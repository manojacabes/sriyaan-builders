import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const AboutMeForm = ({ onNext, formData, setFormData, onSave }) => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     age: '',
    //     email: '',
    //     bio: '',
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
        onSave({ aboutMe: formData });
        onNext();
    };

    return (
        <form className='formData' onSubmit={handleSubmit}>
            <Typography className='label1'>Name</Typography>
            <TextField
                name="name"
                // label="Name"
                style={{ borderRadius: '15px !important' }}
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>Age</Typography>
            <TextField
                name="age"
                // label="Age"
                type="number"
                variant="outlined"
                value={formData.age}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>Gender</Typography>
            <TextField
                name="gender"
                // label="Gender"
                variant="outlined"
                value={formData.gender}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>Phone Number</Typography>
            <TextField
                name="mobileNumber"
                // label="Phone Number"
                type="number"
                variant="outlined"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>Email</Typography>
            <TextField
                name="email"
                // label="Email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>Address</Typography>
            <TextField
                name="address"
                // label="Address"
                multiline
                rows={2}
                variant="outlined"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Typography className='label1'>Bio</Typography>
            <TextField
                name="bio"
                multiline
                rows={4}
                variant="outlined"
                value={formData.bio}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            {/* <Button type="submit" variant="contained" color="primary">
                Next
            </Button> */}
        </form>
    );
};

export default AboutMeForm;
