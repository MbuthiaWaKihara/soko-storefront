/**
 * small screen bottom navigation
 */

import React from 'react';

//react router dom
import { useHistory, useLocation } from 'react-router-dom';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Badge from '@material-ui/core/Badge';

//MUI icons
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

//redux
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: '#ebebeb',
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        }
    },
    icon: {
        color: theme.palette.secondary.contrastText,
    }
}));

const mapStateToProps = state => ({
    bagProducts: state.bag.products,
})

const BottomNav = ({
    bagProducts
}) => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();

    const [activeTab, setActiveTab] = React.useState('home');

    //listen to changes in location, and change active tab
    React.useEffect(() => {
        if(location.pathname === '/') {
            setActiveTab('home');
        }
        if(location.pathname.startsWith('/bag')) {
            setActiveTab('bag');
        }
        if(location.pathname.startsWith('/account')) {
            setActiveTab('account');
        }
    }, [location.pathname]);

    const handleChange = (_, value) => {
        setActiveTab(value);
        if(value === 'home' && location.pathname !== '') {
            history.push('/');
            return;
        }

        if(!location.pathname.startsWith(`/${value}`)){
            history.push(`/${value}`);
            return;
        }
    }
    return (
        <>
            <BottomNavigation value={activeTab} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Home" value="home" icon={<HomeOutlinedIcon className={classes.icon}/>} />
                <BottomNavigationAction label="Bag" value="bag" icon={
                    <Badge
                    badgeContent={bagProducts.length}
                    color="secondary"
                    >
                        <LocalMallOutlinedIcon className={classes.icon}/>
                    </Badge>
                } />
                <BottomNavigationAction label="Account" value="account" icon={<AccountCircleOutlinedIcon className={classes.icon}/>} />
            </BottomNavigation>
        </>
    )
}

export default connect(
    mapStateToProps,
)(BottomNav);
