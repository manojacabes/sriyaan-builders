// EcommerceHome.js

import React from 'react';
import { styled } from '@mui/system';
import { Container, Grid, Typography, Button } from '@mui/material';
import BackgroundImage from '../Images/offerBanner.jpg'
import CompanyDetails from './companyAddress';

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

const EcommerceHome = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <div className='data12'>
                    Welcome to our Sriyaan Industries, where excellence is forged into every metal sheet we produce. As leaders in the industry, we blend precision engineering with innovation to deliver top-tier metal sheet solutions. With a focus on quality, sustainability, and customer satisfaction, we're your trusted partner for all your metal sheet needs.
                    Experience the difference with our Sriyaan Industries today
                </div>
                <div className='data123'>
                    <ol>
                        <li>Sriyaan Industries Private Limited is a Private incorporated on 15 January 2021. It is classified as Non-govt company and is registered at Registrar of Companies, Gwalior. Its authorized share capital is Rs. 10,000,000 and its paid up capital is Rs. 7,450,000. It is inolved in Manufacture of other food products</li>
                        <li> Sriyaan Industries Private Limited's Annual General Meeting (AGM) was last held on N/A and as per records from Ministry of Corporate Affairs (MCA), its balance sheet was last filed on 31 March 2022.</li>






                        <li>  Directors of Sriyaan Industries Private Limited are Vikas Khandelwal, Sonia Khandelwal, Sumit Kumar Khandelwal and Jagjeewan Ram Sharma.</li>

                        <li> Sriyaan Industries Private Limited's Corporate Identification Number is (CIN) U15400MP2021PTC054528 and its registration number is 54528.Its Email address is sriyaanindustries@yahoo.com and its registered address is PLOT NO.212-A, NEW INDUSTRIAL AREA-II MANDIDEEP, Mandideep Huzur Bhopal MP 462046 IN.</li>

                        <li> Current status of Sriyaan Industries Private Limited is - Active.</li>
                    </ol>
                </div>
                <div class="container123">
                    <h1>Company Information</h1>
                    <table>
                        <tr>
                            <th>CIN</th>
                            <td>U15400MP2021PTC054528</td>
                        </tr>
                        <tr>
                            <th>Company Name</th>
                            <td>SRIYAAN INDUSTRIES PRIVATE LIMITED</td>
                        </tr>
                        <tr>
                            <th>Company Status</th>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <th>RoC</th>
                            <td>RoC-Gwalior</td>
                        </tr>
                        <tr>
                            <th>Registration Number</th>
                            <td>54528</td>
                        </tr>
                        <tr>
                            <th>Company Category</th>
                            <td>Company limited by Shares</td>
                        </tr>
                        <tr>
                            <th>Company Sub Category</th>
                            <td>Non-govt company</td>
                        </tr>
                        <tr>
                            <th>Class of Company</th>
                            <td>Private</td>
                        </tr>
                        <tr>
                            <th>Date of Incorporation</th>
                            <td>15 January 2021</td>
                        </tr>
                        <tr>
                            <th>Age of Company</th>
                            <td>3 years, 3 months, 28 days</td>
                        </tr>
                        <tr>
                            <th>Activity</th>
                            <td>Manufacture of other food products <a class="activity-link" href="#">Click here to see other companies involved in same activity.</a></td>
                        </tr>
                    </table>
                </div>
                <div>
                    <CompanyDetails />
                </div>
                <Typography variant="subtitle1" className={classes.subtitle} style={{
                    padding: '30px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    Sriyyan Industries - Manufacturer of gym stand, laser cutting services & sheet metal fabrication in Salem, Tamil Nadu.
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle} style={{
                    padding: '15px',
                    fontWeight: '600',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    Our Services and sections
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* <h2>Quick Links</h2> */}
                    <ul style={{ listStyle: 'none', color: 'blue', display: 'flex' }}>
                        <li style={{ padding: '12px' }}><a href="#">Home</a></li>
                        <li style={{ padding: '12px' }}><a href="/requite">Join Our Team</a></li>
                        <li style={{ padding: '12px' }}><a href="/orders">My Orders</a></li>
                        <li style={{ padding: '12px' }}><a href="/about">About Us</a></li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default EcommerceHome;
