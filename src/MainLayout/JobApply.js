import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import AboutMeForm from './AboutMe';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import Confirmation from './Confirmation';
import ConfirmationBox from './ConfirmationBox';

const steps = ['About Me', 'Education', 'Experience', 'Confirmation'];

function MultiStepForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        bio: '',
        degree: '',
        tenPercent: '',
        twoPercent: "",
        institution: '',
        graduationYear: '',
        skillSet: "",
        jobTitle: '',
        company: '',
        years: '',
    });
    console.log(formData, activeStep, steps.length, 'formData')
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleConfirm = () => {
        setActiveStep(4);
    }
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleFormData = (data) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            ...data,
        }));
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <AboutMeForm formData={formData} setFormData={setFormData} onNext={handleNext} onSave={handleFormData} />;
            case 1:
                return <EducationForm formData={formData} setFormData={setFormData} onNext={handleNext} onBack={handleBack} onSave={handleFormData} />;
            case 2:
                return <ExperienceForm formData={formData} setFormData={setFormData} onNext={handleNext} onBack={handleBack} onSave={handleFormData} />;
            case 3:
                return <Confirmation data={formData} onBack={handleBack} />;
            default:
                return <ConfirmationBox data={formData} onBack={handleBack} />;
        }
    };

    return (
        <div style={{ padding: '50px' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div className='confirmBox'>
                        <Typography >Thanks For Confirmation</Typography>
                        <Typography style={{ color: '#ffffff' }} >We will connect you within 2 Working days</Typography>
                        {/* <ConfirmationBox data={formData} onBack={handleBack} /> */}
                        {/* <Button onClick={() => setActiveStep(0)}>Reset</Button> */}
                    </div>
                ) : (
                    <div style={{ padding: '25px' }}>
                        {getStepContent(activeStep)}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '20px'
                        }}>
                            <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                            <Button variant="contained" onClick={activeStep === 3 ? handleConfirm : handleNext}>
                                {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MultiStepForm;
