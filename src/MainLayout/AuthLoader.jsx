import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Backdrop } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

// const useStyles = styled(theme => ({
//     root: {
//         width: '102%',
//         height: '102%',
//         background: '#00000075',
//         position: 'fixed',
//         top: '0',
//         left: '0',
//         zIndex: '100',
//         // background: theme.palette.background.default,
//     },
//     backdrop: {
//         zIndex: "100000000 !important",
//         color: theme.palette.primary.main,
//         backgroundColor: 'transparent !important'
//     }
// }));

//const useStyles = makeStyles((theme) => ({ backdrop: { zIndex: theme.zIndex.drawer + 1, color: '#fff', }, }));

const AuthLoader = ({ error }) => {
    // const classes = useStyles();
    return (
        <Grid
            container
            alignContent="center"
            justify="center"
            alignItems="center"
            spacing={4}
            component={Paper}
            style={{
                width: '102%',
                height: '102%',
                background: '#00000075',
                position: 'fixed',
                top: '0',
                left: '0',
                zIndex: '100',
            }}>
            <Grid item>
                {error ? (
                    <ErrorOutline />
                ) : (
                    <Backdrop style={{
                        zIndex: "100000000 !important",
                        color: '#ffffff',
                        backgroundColor: 'transparent !important'
                    }} open={true}>
                        <img alt="Loading..." style={{ height: '17rem', width: '30rem', marginInlineStart: '0rem' }} />
                    </Backdrop>
                )}
            </Grid>
            <Grid item>
                {error ? (
                    <Typography>There was an error. Please contact a system administrator.</Typography>
                ) : (
                    <></>
                    // <Typography>Loading ...</Typography>
                )}
            </Grid>
        </Grid>
    );
}

export default AuthLoader;
