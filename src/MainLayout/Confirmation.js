import React from 'react';
import { Typography, Button } from '@mui/material';

const Confirmation = ({ data, onBack }) => {
    const { aboutMe, education, experience } = data;

    const handleSubmit = () => {
        // Handle form submission here
        console.log("Form submitted:", data);
    };

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Please confirm your information:
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                <strong>About Me:</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
                Name: {aboutMe.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Age: {aboutMe.age}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Email: {aboutMe.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Bio: {aboutMe.bio}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                <strong>Education:</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
                Degree: {education.degree}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Institution: {education.institution}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Graduation Year: {education.graduationYear}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                <strong>Experience:</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
                Job Title: {experience.jobTitle}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Company: {experience.company}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Years of Experience: {experience.years}
            </Typography>
            <Button onClick={onBack} variant="outlined" color="primary">
                Back
            </Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Confirm & Submit
            </Button>
        </div>
    );
};

export default Confirmation;
