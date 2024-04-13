import React from 'react';
import { Typography, Button } from '@mui/material';

const Confirmation = ({ data, onBack }) => {

    const handleSubmit = () => {
        // Handle form submission here
        console.log("Form submitted:", data);
    };

    return (
        <div className='formData'>
            <Typography variant="h5" style={{ display: 'flex', margin: '15px', justifyContent: 'center', color: '#ffffff' }} gutterBottom>
                Please confirm your information
            </Typography>
            <div style={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'space-around'
            }}>
                <div>
                    <Typography className="subtitle1" gutterBottom>
                        <strong>About Me</strong>
                    </Typography>
                    <div>
                        <Typography className='label2'>Name</Typography>
                        <Typography className='label3'>{data?.name || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>Age</Typography>
                        <Typography className='label3'>{data?.age || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>Gender</Typography>
                        <Typography className='label3'>{data?.gender || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>Phone Number</Typography>
                        <Typography className='label3'>{data?.mobileNumber || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>Email</Typography>
                        <Typography className='label3'>{data?.email || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>Address</Typography>
                        <Typography className='label3'>{data?.address || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>Bio</Typography>
                        <Typography className='label3'>{data?.bio || "123"}</Typography>
                    </div>

                </div>
                <div>
                    <Typography className="subtitle1" gutterBottom>
                        <strong>Education</strong>
                    </Typography>
                    <div>
                        <Typography className='label2'>Degree</Typography>
                        <Typography className='label3'>{data?.degree || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>10th Percentage</Typography>
                        <Typography className='label3'>{data?.tenPercent || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>12th Percentage</Typography>
                        <Typography className='label3'>{data?.twoPercent || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>Institution</Typography>
                        <Typography className='label3'>{data?.institution || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>Graduation Year</Typography>
                        <Typography className='label3'>{data?.graduationYear || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>Skill Set</Typography>
                        <Typography className='label3'>{data?.skillSet || "123"}</Typography>
                    </div>
                </div>
                <div>
                    <Typography className="subtitle1" gutterBottom>
                        <strong>Experience</strong>
                    </Typography>
                    <div>
                        <Typography className='label2'>Job Title</Typography>
                        <Typography className='label3'>{data?.jobTitle || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>Company Name</Typography>
                        <Typography className='label3'>{data?.company || "123"}</Typography>
                    </div>
                    <div>
                        <Typography className='label2'>Years of Experience</Typography>
                        <Typography className='label3'>{data?.years || "123"}</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
