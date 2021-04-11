/**
 * contains general store details
 * static in most pages
 */
import React from 'react';

//react router dom
import {
    useHistory,
    useLocation,
} from 'react-router-dom';

//icons
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

//redux
import { fetchStoreDetails } from '../redux';
import { connect } from 'react-redux';

//datastore
import { ohnestInvestmentsStore } from '../datastore/soko-stores';
import storeNoImage from '../images/store-no-image.jpg';

//mui
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';

const mapDispatchToProps = dispatch => ({
    fetchStoreDetails: () => dispatch(fetchStoreDetails()),
});

const useStyles = makeStyles(theme => ({
    titleWrapper: {
        // borderWidth: 2,
        // borderColor: 'black',
        // borderStyle: 'solid',
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '5em',
        // paddingTop: '1%',
        [theme.breakpoints.only('md')]: {
            marginTop: '6%',
        },
        [theme.breakpoints.only('sm')]: {
            marginTop: '8%',
        },
        [theme.breakpoints.only('xs')]: {
            marginTop: '15%',
        }
    },
    storeDetailsContainer: {
        // borderWidth: 2,
        // borderColor: 'red',
        // borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '10%',
        height: '100%',
        width: '40%',
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            width: '97%',
            marginLeft: '3%',
        }
    },
    storeNameContainer: {
        marginLeft: '5%',
        width: '65%',
    },
    storeImage: {
        width: '15%',
        borderRadius: '50%',
        objectFit: 'cover',
        [theme.breakpoints.only('md')]: {
            width: '5%',
        },
        [theme.breakpoints.only('xs')]: {
            height: '80%',
        }
    },
    storeName: {
        fontWeight: 'bolder',
    },
    address: {
        color: theme.palette.secondary.contrastText,
        fontWeight: 500,
    },
    miniNav: {
        // borderWidth: 2,
        // borderColor: 'green',
        // borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        width: '30%',
        // alignItems: 'center',
        marginLeft: '15%',
        // marginTop: '1%',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    linkContainer: {
        // borderWidth: 2,
        // borderColor: 'blue',
        // borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        height: '60%',
        width: '30%',
        borderRadius: 50,
    },
    linkDescription: {
        color: theme.palette.secondary.contrastText,
        // marginRight: '10%',
        marginTop: '2.5%',
        fontSize: '1em',
    },
    navIcon: {
        fontSize: '2em',
        marginRight: '10%',
        color: theme.palette.secondary.contrastText,
    }
}));

const StoreTitle = ({
    fetchStoreDetails,
}) => {
    
    //on mount simulate fetching of store details
    React.useEffect(() => {
        fetchStoreDetails();
    //eslint-disable-next-line
    }, []);

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const theme = useTheme();

    const routeToPage = page => {
        if(page === 'home' && location.pathname !== ''){
            history.push('/');
            return
        }

        if(!location.pathname.startsWith(`/${page}`)) {
            history.push(`/${page}`);
        }
    }

    return (
        <>
            <div
            className={classes.titleWrapper}
            >
                <div
                className={classes.storeDetailsContainer}
                onClick={() => routeToPage('home')}
                >
                    <img
                    src={ohnestInvestmentsStore.image_url ? ohnestInvestmentsStore.image_url : storeNoImage}
                    alt="store"
                    className={classes.storeImage}
                    />
                    <div
                    className={classes.storeNameContainer}
                    >
                            <Typography
                            variant="h6"
                            className={classes.storeName}
                            >
                                {ohnestInvestmentsStore.name}
                            </Typography>
                            <Typography
                            variant="caption"
                            className={classes.address}
                            >
                                {ohnestInvestmentsStore.address}
                            </Typography>
                    </div>
                </div>
                <div
                className={classes.miniNav}
                >
                    <div
                    className={classes.linkContainer}
                    onClick={() => routeToPage('bag')}
                    style={{
                        backgroundColor: location.pathname.startsWith('/bag') ? '#E9EFF9': null,
                    }}
                    >
                        <LocalMallOutlinedIcon 
                        className={classes.navIcon}
                        style={{
                            color: location.pathname.startsWith('/bag') ? theme.palette.primary.main: null,
                        }}
                        />
                        <Typography
                        variant="body1"
                        className={classes.linkDescription}
                        style={{
                            color: location.pathname.startsWith('/bag') ? theme.palette.primary.main: null,
                        }}
                        >
                            Bag
                        </Typography>
                    </div>
                    <div
                    className={classes.linkContainer}
                    onClick={() => routeToPage('account')}
                    style={{
                        marginLeft: '10%',
                        backgroundColor: location.pathname.startsWith('/account') ? '#E9EFF9': null,
                    }}
                    >
                        <AccountCircleOutlinedIcon 
                        className={classes.navIcon} 
                        style={{
                            color: location.pathname.startsWith('/account') ? theme.palette.primary.main: null,
                        }}
                        />
                        <Typography
                        variant="body1"
                        className={classes.linkDescription}
                        style={{
                            color: location.pathname.startsWith('/account') ? theme.palette.primary.main: null,
                        }}
                        >
                            Account
                        </Typography>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default connect(
    null,
    mapDispatchToProps,
)(StoreTitle);
