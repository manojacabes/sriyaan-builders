// Dashboard.js

import React, { useState } from 'react';
import { styled } from '@mui/system';
import BackgroundImage from '../Images/offerBanner.jpg';
import { useNavigate } from 'react-router-dom';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { TextField, Button, Container, Grid, Snackbar, Typography, Link } from '@mui/material';
import { postJobData, getJobList, deleteJobData } from '../Services/Service';
import { v4 as uuid } from 'uuid';
import MUIDataTable from "mui-datatables";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditDialog from './EditDialog';
import './dashboard.css';

const useStyles = styled((theme) => ({
    root: {
        backgroundImage: `url(${BackgroundImage})`,  // Replace with the actual URL of your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
    },
    title: {
        fontSize: '12px',
        marginBottom: 2,
    },
    subtitle: {
        fontSize: '15px',
        marginBottom: 3,
    },
    exploreButton: {
        marginTop: 2,
        padding: '1.5px 4px',
        fontSize: '12px',
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    const unique_id = uuid();
    const [Loading, setLoading] = React.useState(false)
    const [products, setProducts] = React.useState()
    const [changed, setChanged] = React.useState(0)
    const [formData, setFormData] = React.useState({
        "jobDescription": "",
        "jobId": "",
        "jobImage": "",
        "jobName": "",
        "jobTitle": ""
    })
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    // Function to handle opening the edit dialog
    const handleEditClick = (itemId) => {
        setEditDialogOpen(true);
        setSelectedItemId(itemId);
    };
    const handleDeleteClick = async (itemId) => {
        if (itemId) {
            try {
                const response = await deleteJobData(`http://localhost:8083/kit/jobs/v1/posts?jobId=${itemId}`);
                console.log('Response from POST request:', response);
                if (response?.response === 'SUCCESS') {
                    //navigate('/dashboard', { state: { response: response } });
                    setChanged(changed + 1)
                    enqueueSnackbar(response?.response, { variant: 'success' })

                } else {
                    enqueueSnackbar(response?.response, { variant: 'warning' })
                }
            } catch (error) {
                console.error('Error posting data:', error);
            }
        } else {
            enqueueSnackbar('Unable to delete', { variant: 'warning' })
        }
    };
    // Function to handle closing the edit dialog
    const handleEditDialogClose = () => {
        setEditDialogOpen(false);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    React.useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await getJobList('http://localhost:8083/kit/jobs/v1/posts?limit=15');
                console.log(response, 'res')
                setProducts(response?.jobPosts || [])
                setLoading(false)
                // if (response?.response === 'SUCCESS') {
                //     enqueueSnackbar(response?.response, { variant: 'success' })
                // } else {

                //     enqueueSnackbar(response?.response, { variant: 'warning' })
                // }

                // console.log('Response from POST request:', response);
            } catch (error) {
                console.error('Error posting data:', error);
            }
        }
        fetchData()
    }, [changed])
    const gateway = process.env
    console.log(gateway, products, 'process', selectedItemId)

    const handleSubmit = async () => {
        if (formData.jobTitle && formData.jobDescription) {
            try {
                const response = await postJobData('http://localhost:8083/kit/jobs/v1/posts', { ...formData, jobId: unique_id });
                console.log('Response from POST request:', response);
                if (response?.response === 'SUCCESS') {
                    //navigate('/dashboard', { state: { response: response } });
                    setChanged(changed + 1)
                    enqueueSnackbar("Successfully Added", { variant: 'success' })
                    setFormData({
                        "jobDescription": "",
                        "jobId": "",
                        "jobImage": "",
                        "jobName": "",
                        "jobTitle": ""
                    })
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
    const columns = [
        {
            name: "jobId",
            display: false,
            options: {
                customBodyRender: (value) => <div>{value}</div> // You can render any custom content for the cell
            }
        },
        {
            name: "jobTitle",
            options: {
                customBodyRender: (value) => <div>{value}</div> // You can render any custom content for the cell
            }
        },
        {
            name: "jobDescription",
            options: {
                customBodyRender: (value) => <div>{value}</div> // You can render any custom content for the cell
            }
        },
        {
            name: "Actions",
            options: {
                customBodyRender: (value, tableMeta) => {
                    const itemId = tableMeta.rowData[0];
                    console.log(tableMeta, 'tableMeta')
                    return (
                        <div>
                            <IconButton aria-label="edit" onClick={() => handleEditClick(itemId)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => handleDeleteClick(itemId)}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    );
                }
            }
        }
    ];
    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const options = {
        selectableRows: 'none',
    };
    return (
        <div className={classes.root}>
            <Container>
                <div className='data12'>
                    <form className='formData' >
                        <Typography className='label1'>Job Title</Typography>
                        <TextField
                            name="jobTitle"
                            variant="outlined"
                            value={formData.jobTitle}
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
                            value={formData.jobDescription}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <button  onClick={() => handleSubmit()}>
                            Submit
                        </button>
                    </form>

                </div>
                <div className='data123'>
                    <MUIDataTable
                        title={"Employee List"}
                        data={products}
                        columns={columns}
                        options={options}
                    />
                    <EditDialog open={editDialogOpen} changed={changed} setChanged={setChanged} selectedItemId={selectedItemId || ''} setEditDialogOpen={setEditDialogOpen} handleClose={handleEditDialogClose} />
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;
