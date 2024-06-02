import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { TextField, Button, Container, Grid, Snackbar, Typography, Link } from '@mui/material';
import { postJobData, getJobList, putJobData } from '../Services/Service';
import { v4 as uuid } from 'uuid';

const EditDialog = ({ open, selectedItemId, setEditDialogOpen, handleClose, changed, setChanged }) => {
    const unique_id = uuid();
    const [formData, setFormData] = React.useState({
        "jobDescription": "",
        "jobId": "",
        "jobImage": "",
        "jobName": "",
        "jobTitle": ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    console.log(selectedItemId, 'selectedItemIds')
    React.useEffect(() => {
        async function fetchData() {
            try {
                // setLoading(true)
                const response = await getJobList('http://localhost:8083/kit/jobs/v1/posts?limit=15');
                console.log(response, 'res')
                let filterData = response?.jobPosts?.find(item => item.jobId === selectedItemId)
                console.log(filterData, 'filterData')
                setFormData(filterData)
            } catch (error) {
                console.error('Error posting data:', error);
            }
        }
        fetchData()
    }, [selectedItemId])
    const handleSubmit = async () => {
        if (formData?.jobTitle && formData?.jobDescription) {
            try {
                const response = await putJobData('http://localhost:8083/kit/jobs/v1/posts', { ...formData, jobId: selectedItemId });
                console.log('Response from POST request:', response);
                if (response?.response === 'SUCCESS') {
                    setChanged(changed + 1)
                    enqueueSnackbar('Successfully Edited', { variant: 'success' })
                    setEditDialogOpen(false)
                } else {
                    enqueueSnackbar(response?.response, { variant: 'warning' })
                }
            } catch (error) {
                console.error('Error posting data:', error);
            }
        } else {
            enqueueSnackbar('Enter the details', { variant: 'warning' })
        }
    };
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Job Details</DialogTitle>
            <DialogContent>
                <div className='data12'>
                    <form className='formData' >
                        <Typography className='label1'>Job Title</Typography>
                        <TextField
                            name="jobTitle"
                            variant="outlined"
                            value={formData?.jobTitle}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <Typography className='label1'>Job Description</Typography>
                        <TextField
                            name="jobDescription"
                            multiline
                            maxRows={3}
                            minRows={2}
                            variant="outlined"
                            value={formData?.jobDescription}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        {/* <Button className='label1' onClick={() => handleSubmit()}>
                            Submit
                        </Button> */}
                    </form>

                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => handleSubmit()} variant="contained" color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditDialog;
