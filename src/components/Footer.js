import React from 'react';

import { ohnestInvestmentsStore } from '../datastore/soko-stores';

//icons
import { IconContext } from 'react-icons';
import { HiBadgeCheck } from 'react-icons/hi';
import { Ri24HoursFill } from 'react-icons/ri';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    footerBanner: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        height: '10em',
        display: 'flex',
        flexDirecion: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: theme.palette.secondary.light,
        fontSize: '2.5em',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '5%',
    },
    iconText: {
        marginTop: 5,
        color: theme.palette.primary.contrastText,
    },
    storeDetails: {
        padding: '2.5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            marginBottom: '15%',
        }
    },
    whatsAppIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#40C251',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    storeDetailsTitle: {
        color: theme.palette.divider,
        marginBottom: 10,
    },
    storeName: {
        marginBottom: 10,
    },
    storeAddress: {
        color: theme.palette.secondary.contrastText,
        marginBottom: 10,
    },
    chatWithUs: {
        color: theme.palette.primary.contrastText,
        marginLeft: 5,
    },
    whatsAppIcon: {
        color: theme.palette.primary.contrastText,
    }
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <>
            <div
            className={classes.footerBanner}
            >
                <div
                className={classes.iconContainer}
                >
                    <LocalShippingIcon
                    className={classes.icon}
                    />
                    <Typography
                    variant="body2"
                    className={classes.iconText}
                    >Fast Delivery</Typography>
                </div>
                <div
                className={classes.iconContainer}
                >
                    <IconContext.Provider
                    value={{
                        className: classes.icon
                    }}
                    >
                        <HiBadgeCheck />
                    </IconContext.Provider>
                    <Typography
                    variant="body2"
                    className={classes.iconText}
                    >Buyer Protection</Typography>
                </div>
                <div
                className={classes.iconContainer}
                >
                    <IconContext.Provider
                    value={{
                        className: classes.icon
                    }}
                    >
                        <Ri24HoursFill />
                    </IconContext.Provider>
                    <Typography
                    variant="body2"
                    className={classes.iconText}
                    >Customer Support</Typography>
                </div>
            </div>
            <div
            className={classes.storeDetails}
            >
                <Typography
                className={classes.storeDetailsTitle}
                variant="body1"
                >
                    STORE DETAILS
                </Typography>
                <Typography
                variant="h6"
                className={classes.storeName}
                >
                    {ohnestInvestmentsStore.name}
                </Typography>
                <Typography
                variant="caption"
                className={classes.storeAddress}
                >
                    {ohnestInvestmentsStore.address}
                </Typography>
                
                <div
                className={classes.whatsAppIconContainer}
                >
                    <WhatsAppIcon
                    className={classes.whatsAppIcon}
                    />
                    <Typography
                    className={classes.chatWithUs}
                    variant="body2"
                    >
                        Chat with us
                    </Typography>
                </div>
            </div>
        </>
    )
}

export default Footer;
