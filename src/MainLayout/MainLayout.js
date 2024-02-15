import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Box, Container, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
// import WorkIcon from '@mui/icons-material/Work';
import { Category, TimelineOutlined, SettingsApplications, BookOnline, JoinFullOutlined } from '@mui/icons-material'
// import ContactMailIcon from '@mui/icons-material/ContactMail';
import Home from './Home';
import Homelayout from './HomeLayout';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MultiStepForm from './JobApply';

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

const MainLayout = () => {
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
        { key: 0, name: '/', label: 'Home', active: activeIndex === 0 ? true : false, icon: <HomeIcon /> },
        { key: 1, name: '/categories', label: 'view All Categories', active: activeIndex === 1 ? true : false, icon: <Category /> },
        { key: 2, name: '/requite', label: 'Post Your Requirement', active: activeIndex === 2 ? true : false, icon: <TimelineOutlined /> },
        { key: 3, name: '/orders', label: 'My Orders', active: activeIndex === 3 ? true : false, icon: <SettingsApplications /> },
        { key: 4, name: '/about', label: 'About Us', active: activeIndex === 4 ? true : false, icon: <BookOnline /> },
        { key: 5, name: '/career', label: 'Careers', active: activeIndex === 5 ? true : false, icon: <JoinFullOutlined /> }
    ]
    const handleSetModule = (index) => {
        setActiveIndex(index)
        setOpenDrawer(false);
    }
    return (
        <Router>
            <Box className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar style={{ background: '#ea4e25' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ marginRight: '36px', ...(openDrawer && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={{
                            fontSize: '27px',
                            fontFamily: 'cursive',
                            fontWeight: 800
                        }} noWrap>
                            Sriyaan Connect
                        </Typography>
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
                    ModalProps={{ keepMounted: true }}
                >
                    {/* Sidebar content */}
                    <List>
                        {tabs.map((item, index) => {
                            return (
                                <ListItem button component={Link} style={activeIndex === index ? { background: '#ea4e25' } : { background: '#1a2531', color: '#ffffff' }} to={item.name} onClick={() => handleSetModule(index)}>
                                    <ListItemIcon style={{ color: '#ffffff' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item?.label} />
                                </ListItem>
                            )
                        })}
                        {/* <ListItem button component={Link} style={path === '/home' ? { background: '#ea4e25' } : { background: '#1a2531', color: '#ffffff' }} to="/home" onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} style={path === '/work' ? { background: '#ea4e25' } : { background: '#1a2531', color: '#ffffff' }} to="/work" onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <WorkIcon />
                            </ListItemIcon>
                            <ListItemText primary="Work" />
                        </ListItem>
                        <ListItem button component={Link} style={path === '/contact' ? { background: '#ea4e25' } : { background: '#1a2531', color: '#ffffff' }} to="/contact" onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <ContactMailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItem> */}
                    </List>
                </Drawer>

                <Box component="main" className={classes.content}>
                    <Toolbar />
                    <Container style={{ padding: 0 }} maxWidth="xl">
                        <Routes>
                            <Route path="/work" element={<WorkPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/requite" element={<MultiStepForm />} />
                            <Route path="/home" element={<Homelayout />} />

                        </Routes>
                    </Container>
                </Box>
            </Box>
        </Router >
    );
};

export default MainLayout;
