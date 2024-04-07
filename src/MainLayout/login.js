import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Snackbar, Typography, Link } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import backgrd from '../Images/bg-login.png'
import { fetchData, postData } from '../Services/Service';
import './anima.css'
// const useStyles = styled((theme) => ({
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginTop: theme.spacing(8),
//     },
//     form: {
//         width: '100%',
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

const LoginScreen = () => {
    // const classes = useStyles();
    // const history = useHistory();
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        phoneNo: '',
        profileType: 'CLIENT',
    });
    const [signValue, setSignValue] = React.useState(0)
    const handleSignIn = (e) => {
        e.preventDefault();
        // Add your sign-in logic here
        console.log('Sign In clicked');
    };
    // useEffect(() => {
    //     const fetchDataFromApi = async () => {
    //         try {
    //             const result = await fetchData('https://api.example.com/data');
    //             setData(result);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchDataFromApi();
    // }, []);
    const handleLogin = async () => {
        // e.preventDefault();
        if (signValue === 0) {
            if (email && password) {
                try {
                    const response = await postData('http://localhost:8081/kit/profile/v1/profile/signin', { email: email, password: password });
                    console.log('Response from POST request:', response);
                    if (response?.response === 'SUCCESS') {
                        navigate('/home', { state: { response: response } });
                        enqueueSnackbar(response?.response, { variant: 'success' })
                    } else {
                        enqueueSnackbar(response?.response, { variant: 'warning' })
                    }
                } catch (error) {
                    console.error('Error posting data:', error);
                }
            } else {
                enqueueSnackbar('Enter the details', { variant: 'warning' })
            }
        } else {
            setSignValue(0)
        }
    };
    const postDataToApiSignUp = async () => {
        try {
            const response = await postData('http://localhost:8081/kit/profile/v1/profile/signup', formData);
            console.log('Response from POST request:', response);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    // const handleLogin = async () => {
    //     try {
    //         let data = {
    //             email: email, password: password
    //         }
    //         const response = await postData(data);
    //         console.log('Response from POST request:', response);
    //     } catch (error) {
    //         console.error('Error posting data:', error);
    //     }
    // };
    const handleSignUp = async () => {
        // Navigate to the sign-up page
        // history.push('/signup');
        // navigate('/signup');

        if (signValue === 1) {
            console.log(formData, 'formData')
            if (formData.email && formData.firstName && formData.lastName && formData.phoneNo && formData.password) {
                console.log(formData, 'formData 1')
                try {
                    const response = await postData('http://localhost:8081/kit/profile/v1/profile/signup', formData);
                    if (response?.response === 'SUCCESS') {
                        setSignValue(0)
                        enqueueSnackbar(response?.response, { variant: 'success' })
                    } else {

                        enqueueSnackbar(response?.response, { variant: 'warning' })
                    }

                    console.log('Response from POST request:', response);
                } catch (error) {
                    console.log(formData, 'formData 2')
                    console.error('Error posting data:', error);
                }
            } else {
                enqueueSnackbar('Enter the details', { variant: 'warning' })
            }
        } else {
            setSignValue(1)
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const signin = () => {
        return (
            <Grid>
                <Grid className="login__inputs">
                    <Grid>
                        <label htmlFor="input-email" className="login__label">Email</label>
                        <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" required className="login__input" id="input-email" />
                    </Grid>

                    <Grid>
                        <label htmlFor="input-pass" className="login__label">Password</label>

                        <Grid className="login__box">
                            <input type="password" name="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required className="login__input" id="input-pass" />
                            <i className="ri-eye-off-line login__eye" id="input-icon"></i>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className="login__check">
                    <input type="checkbox" className="login__check-input" id="input-check" />
                    <label htmlFor="input-check" className="login__check-label">Remember me</label>
                </Grid>
            </Grid>
        )
    }
    const signUp = () => {
        return (
            <Grid>
                <Grid className="login__inputs">
                    <Grid>
                        <label htmlFor="input-email" className="login__label">Email</label>
                        <input type="email" value={formData.email} name="email" onChange={handleChange} placeholder="Enter your email address" required className="login__input" id="input-email" />
                    </Grid>
                    <Grid>
                        <label htmlFor="input-email" className="login__label">First Name</label>
                        <input type="firstName" value={formData.firstName} name="firstName" onChange={handleChange} placeholder="Enter your email address" required className="login__input" id="input-email" />
                    </Grid>
                    <Grid>
                        <label htmlFor="input-email" className="login__label">Last Name</label>
                        <input type="lastName" value={formData.lastName} name="lastName" onChange={handleChange} placeholder="Enter your email address" required className="login__input" id="input-email" />
                    </Grid>
                    <Grid>
                        <label htmlFor="input-email" className="login__label">Mobile Number</label>
                        <input type="phone" value={formData.phoneNo} name="phoneNo" onChange={handleChange} placeholder="Enter your email address" required className="login__input" id="input-email" />
                    </Grid>
                    <Grid>
                        <label htmlFor="input-pass" className="login__label">Password</label>

                        <Grid className="login__box">
                            <input type="password" name="password" value={formData.password}
                                onChange={handleChange} placeholder="Enter your password" required className="login__input" id="input-pass" />
                            <i className="ri-eye-off-line login__eye" id="input-icon"></i>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
    return (
        // <Container style={{
        //     height: '100vh',
        //     width: '100vw'
        // }} component="main" maxWidth="xs">
        //     <Grid style={{
        //         display: 'flex',
        //         flexDirection: 'column',
        //         alignItems: 'center',
        //         marginTop: 8,
        //     }}>
        //         <Typography component="h1" variant="h5">
        //             Sign in
        //         </Typography>
        //         <form style={{
        //             width: '100%',
        //             marginTop: 1
        //         }} onSubmit={handleLogin}>
        //             <TextField
        //                 variant="outlined"
        //                 margin="normal"
        //                 required
        //                 fullWidth
        //                 id="email"
        //                 label="Email Address"
        //                 name="email"
        //                 autoComplete="email"
        //                 autoFocus
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //             />
        //             <TextField
        //                 variant="outlined"
        //                 margin="normal"
        //                 required
        //                 fullWidth
        //                 name="password"
        //                 label="Password"
        //                 type="password"
        //                 id="password"
        //                 autoComplete="current-password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //             />
        //             <Button
        //                 type="submit"
        //                 fullWidth
        //                 variant="contained"
        //                 color="primary"
        //                 style={{ margin: '3px, 0px, 2px' }}
        //             >
        //                 Sign In
        //             </Button>
        //             <Grid container justifyContent="flex-end">
        //                 <Grid item>
        //                     <Link href="#" variant="body2" onClick={handleSignUp}>
        //                         Don't have an account? Sign up
        //                     </Link>
        //                 </Grid>
        //             </Grid>
        //         </form>
        //     </Grid>
        // </Container>
        <Grid className="container" >
            <Grid className="login__content">
                {/* <img src={backgrd} alt="login image" className="login__img" /> */}

                <form action="" className="login__form" >
                    <Grid>
                        <h1 className="login__title">
                            <span>Welcome</span> Back
                        </h1>
                        <p className="login__description">
                            Welcome! Please login to continue.
                        </p>
                    </Grid>

                    {/* <Grid>
                        <Grid className="login__inputs">
                            <Grid>
                                <label htmlFor="input-email" className="login__label">Email</label>
                                <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" required className="login__input" id="input-email" />
                            </Grid>

                            <Grid>
                                <label htmlFor="input-pass" className="login__label">Password</label>

                                <Grid className="login__box">
                                    <input type="password" name="password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required className="login__input" id="input-pass" />
                                    <i className="ri-eye-off-line login__eye" id="input-icon"></i>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid className="login__check">
                            <input type="checkbox" className="login__check-input" id="input-check" />
                            <label htmlFor="input-check" className="login__check-label">Remember me</label>
                        </Grid>
                    </Grid> */}
                    {signValue === 1 && signUp()}
                    {signValue === 0 && signin()}
                    <Grid>
                        <Grid className="login__buttons">
                            <Button className="login__button" style={{ color: '#ffffff' }} onClick={() => handleLogin()} >Log In</Button>
                            <Button className="login__button login__button-ghost" onClick={handleSignUp}>Sign Up</Button>
                        </Grid>

                        <a href="#" className="login__forgot">Forgot Password?</a>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default LoginScreen;
