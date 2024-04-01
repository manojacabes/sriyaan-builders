import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AboutMeForm = ({ onNext, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        bio: '',
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
        onSave({ aboutMe: formData });
        onNext();
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="name"
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                name="age"
                label="Age"
                type="number"
                variant="outlined"
                value={formData.age}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                name="bio"
                label="Bio"
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
