import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import AboutMeForm from './AboutMe';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import Confirmation from './Confirmation';

const steps = ['About Me', 'Education', 'Experience', 'Confirmation'];

function MultiStepForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        aboutMe: {},
        education: {},
        experience: {},
    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

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
                return <AboutMeForm onNext={handleNext} onSave={handleFormData} />;
            case 1:
                return <EducationForm onNext={handleNext} onBack={handleBack} onSave={handleFormData} />;
            case 2:
                return <ExperienceForm onNext={handleNext} onBack={handleBack} onSave={handleFormData} />;
            case 3:
                return <Confirmation data={formData} onBack={handleBack} />;
            default:
                return 'Unknown step';
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
                    <div>
                        <Button onClick={() => setActiveStep(0)}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep)}
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                            <Button variant="contained" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MultiStepForm;
