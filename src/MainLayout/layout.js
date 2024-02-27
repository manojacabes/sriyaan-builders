import React, { Children } from 'react';
import { styled } from '@mui/system';
import { AppBar, Box, Container, Drawer, Grid, Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
// import WorkIcon from '@mui/icons-material/Work';
import { Category, TimelineOutlined, SettingsApplications, BookOnline, JoinFullOutlined } from '@mui/icons-material'
// import ContactMailIcon from '@mui/icons-material/ContactMail';
import Home from './Home';
import Homelayout from './HomeLayout';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MultiStepForm from './JobApply';
import LoginScreen from './login';

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
    console.log(window.location, 'location')
    return (
        <Box className={classes.root}>
            <AppBar position="fixed" style={{ padding: 0 }} className={classes.appBar}>
                <Toolbar style={{ background: '#384b70' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ marginRight: '36px', ...(openDrawer && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid>
                        <Typography variant="h6" style={{
                            fontSize: '27px',
                            fontFamily: 'inherit',
                            fontWeight: 800,
                            
                        }} noWrap>
                            Sriyaan Connect
                        </Typography>
                    </Grid>
                    {/* <Grid>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Requite Your Employes</Button>
                        <Button color="inherit">My Orders</Button>
                        <Button color="inherit"></Button>
                    </Grid> */}
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="temporary"
                anchor="left"
                open={openDrawer}
                onClose={handleDrawerClose}
                classes={{
                    paper: classes.drawerPaper,
                }}
                style={{
                    backgroundColor: '#a8a8a817',
                    backdropFilter: 'blur(20px)'
                }}
                ModalProps={{ keepMounted: true }}
            >
                <List style={{ padding: 0, }}>
                    {tabs.map((item, index) => {
                        return (
                            <ListItem button component={Link} style={activeIndex === index ? { background: '#ffffff', color: '#2423d5' } : { background: '#ffffff', color: '#384b70' }} to={item.name} onClick={() => handleSetModule(index)}>
                                <ListItemIcon style={activeIndex === index ? { color: '#2423d5' } : { color: '#384b70' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item?.label} style={activeIndex === index ? { fontSize: '10px !important', color: '#2423d5' } : { color: '#384b70' }} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>

            <Box component="main" className={classes.content}>
                <Toolbar />
                <Container style={{ padding: 0 }} maxWidth="xl">
                    <main>{children}</main>
                </Container>
            </Box>
        </Box>
    );
};

export default Layout;
