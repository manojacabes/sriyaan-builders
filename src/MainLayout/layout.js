import React, { Children } from 'react';
import { styled } from '@mui/system';
import { AppBar, Box, Container, Drawer, Grid, Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
// import WorkIcon from '@mui/icons-material/Work';
import { Category, TimelineOutlined, SettingsApplications, BookOnline, JoinFullOutlined, Call } from '@mui/icons-material'
// import ContactMailIcon from '@mui/icons-material/ContactMail';
import Home from './HomeContent/Home';
import Homelayout from './HomeLayout';
import logo from '../Images/logo.png'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MultiStepForm from './JobApply';
import LoginScreen from './login';
import './style.css'

// Components for different types of content
// const HomePage = () => (
//     <Typography variant="h4" gutterBottom>
//         Welcome to the Home Page!
//     </Typography>
// );

const WorkPage = () => (
    <Typography variant="h4" gutterBottom>
        Explore the Work Page content here.
    </Typography>
);

const ContactPage = () => (
    <Typography variant="h4" gutterBottom>
        Reach out to us on the Contact Page.
    </Typography>
);

const drawerWidth = 270;

const useStyles = styled((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        // backgroundColor: '#a8a8a817',
        // backdropFilter: 'blur(20px)'
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#1a2531 !important'
    },
    content: {
        flexGrow: 1,
        padding: 0,
    },
    back: {
        background: "#ea4e25"
    }
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [path, setPath] = React.useState()
    const [activeIndex, setActiveIndex] = React.useState(0)
    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };
    const navigate = useNavigate()
    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    React.useEffect(() => {
        setPath(window.location.pathname)
    }, [path])
    console.log(path, 'window')
    const tabs = [
        { key: 0, name: '/home', label: 'Home', active: activeIndex === 0 ? true : false, icon: <HomeIcon /> },
        // { key: 1, name: '/categories', label: 'view All Categories', active: activeIndex === 1 ? true : false, icon: <Category /> },
        { key: 2, name: '/requite', label: 'Post Your Requirement', active: activeIndex === 2 ? true : false, icon: <TimelineOutlined /> },
        { key: 3, name: '/orders', label: 'My Orders', active: activeIndex === 3 ? true : false, icon: <SettingsApplications /> },
        { key: 4, name: '/about', label: 'About Us', active: activeIndex === 4 ? true : false, icon: <BookOnline /> },
        // { key: 5, name: '/career', label: 'Careers', active: activeIndex === 5 ? true : false, icon: <JoinFullOutlined /> }
        // { key: 6, name: '/login', label: 'Careers', active: activeIndex === 5 ? true : false, icon: <JoinFullOutlined /> }
    ]
    const handleSetModule = (index) => {
        setActiveIndex(index)
        setOpenDrawer(false);
    }
    console.log(window.location.pathname, 'location')
    return (
        <Box className={classes.root}>

            <div class="top-bar">
                <div class="logo">
                    <img src={logo} style={{ width: '37px', height: '37px' }} alt='...' />
                    <div class="heading">Sriyaan Connect
                    </div>
                </div>
                <div class="options">
                    <a href="/home"
                        style={window.location.pathname === '/home' ? {
                            fontSize: '24px',
                            color: '#ddd136',
                            fontWeight: 800,
                            textShadow: '0 0 10px #dcdd2f'
                        } : {}}
                        onClick={() => navigate('/home')}>Home</a>
                    <a href="/requite"
                        style={window.location.pathname === '/requite' ? {
                            fontSize: '24px',
                            color: '#ddd136',
                            fontWeight: 800,
                            textShadow: '0 0 10px #dcdd2f'
                        } : {}} onClick={() => navigate('/requite')}>Join Our team</a>
                    <a href="/orders"
                        style={window.location.pathname === '/orders' ? {
                            fontSize: '24px',
                            color: '#ddd136',
                            fontWeight: 800,
                            textShadow: '0 0 10px #dcdd2f'
                        } : {}}>My Orders</a>
                    <a href="/about"
                        style={window.location.pathname === '/about' ? {
                            fontSize: '24px',
                            color: '#ddd136',
                            fontWeight: 800,
                            textShadow: '0 0 10px #dcdd2f'
                        } : {}}>About Us</a>
                </div>
                <div class="search">
                    <input type="text" placeholder="  Enter Here . . ." />
                    <button>Search</button>
                </div>

            </div>

            <div className='content'>
                <Container style={{ padding: 0 }} maxWidth="xl">
                    <main>{children}</main>
                </Container>
            </div>
        </Box>
    );
};

export default Layout;
