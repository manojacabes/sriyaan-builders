import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useAccess } from 'react-access-control';
import AuthLoader from './AuthLoader';
// import { useSnackbar } from 'notistack';
// import { RoutingContext } from '../../components';

const PrivateRouteWithLayout = (props) => {
    const { layout: Layout, component: Component, ...other } = props;
    const { moduleName, usesAllPermissions, oldModulesToRoute, ...rest } = other;
    // const { enqueueSnackbar } = useSnackbar();
    // let { setModules } = React.useContext(RoutingContext);

    const [authed] = React.useState(true);
    // const { define /*, isLoaded*/ } = useAccess();

    // React.useEffect(() => {
    // setAuthed(null); // causes unnecesary re renders

    // let mounted = true;

    // (async function () {
    //     try {
    //         let user = await AuthService.getAuthedUser();

    //         if (user && user.modules) {
    //             let newModulesToRoute = [];
    //             user.modules.forEach((m) => {
    //                 if (m.subModules) {
    //                     let subroutes = processRoutesForSingleModule(m);
    //                     newModulesToRoute = [...newModulesToRoute, ...subroutes];
    //                 } else {
    //                     if (m.route) {
    //                         newModulesToRoute.push({
    //                             moduleId: m.moduleId,
    //                             moduleName: m.moduleName,
    //                             route: m.route
    //                         });
    //                     }
    //                 }
    //             });
    //             newModulesToRoute = newModulesToRoute.sort((a, b) => a.route.length > b.route.length);

    //             // collects all groups regardless of current module and defines the permissions
    //             if (usesAllPermissions) {
    //                 let allGroupsAssignedToUser = [];
    //                 user.modules.forEach((m) => {
    //                     if (m.groups && Array.isArray(m.groups))
    //                         allGroupsAssignedToUser = [...allGroupsAssignedToUser, ...m.groups];
    //                     else if (m.subModules && Array.isArray(m.subModules)) {
    //                         m.subModules.forEach((sm) => {
    //                             if (sm.groups) allGroupsAssignedToUser = [...allGroupsAssignedToUser, ...sm.groups];
    //                         });
    //                     }
    //                 });
    //                 let permissions = getPermissionsFromGroupList(allGroupsAssignedToUser);
    //                 define({ permissions });
    //             } else if (moduleName) {
    //                 let currentModule = user.modules.find((m) => m.moduleName === moduleName);
    //                 if (currentModule) {
    //                     let permissions = getPermissionsFromGroupList(currentModule.groups);
    //                     define({ permissions });
    //                 }
    //                 // else {
    //                 //     define()
    //                 // }
    //             }
    //             if (JSON.stringify(newModulesToRoute) !== JSON.stringify(oldModulesToRoute)) {
    //                 setModules(user.modules);
    //             }
    //             if (mounted) setAuthed(true);
    //         } else {
    //             if (mounted) setAuthed(false);
    //         }
    //         // if (user && user.access) {
    //         //     define(user.access);
    //         //     if(mounted) setAuthed(true);
    //         // } else {
    //         //     if(mounted) setAuthed(false);
    //         // }
    //     } catch (e) {
    //         enqueueSnackbar('Could not get current authentication status', {
    //             variant: 'warning'
    //         });
    //         if (mounted) setAuthed(false);
    //     }
    // })();
    // return () => {
    //     mounted = false;
    //     AuthService.aborter.abort();
    // };
    //eslint-disable-next-line
    // }, [Component]);

    // if (!isLoaded)
    //     return (
    //         <Layout>
    //             <AuthLoader />
    //         </Layout>
    //     );
    // else

    return authed === true ? (
        // <Route
        //     {...rest}
        //     render={(matchProps) => (
                <Layout>
                    <Component {...props} />
                </Layout>
        //     )}
        // />
    ) : authed === false ? (
        <Navigate to="/dashboard" />
    ) : (
        // <Route
        //     {...rest}
        //     render={() => (
                <Layout>
                    <AuthLoader />
                </Layout>
        //     )}
        // />
    );
};

PrivateRouteWithLayout.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string
};

export default PrivateRouteWithLayout;