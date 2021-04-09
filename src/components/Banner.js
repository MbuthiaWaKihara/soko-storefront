/**
 * This is the static banner visible in all pages
 */
import React from 'react';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//utils
import sokoLogo from '../images/logo-white.png';

const useStyles = makeStyles(theme => ({
    tmContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    sokoLogo: {
        height: '12px',
        objectFit: 'cover',
        marginLeft: 10,
    },
    playstoreLinkContaier: {
        position: 'absolute',
        right: 20,
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            right: 0,
            margin: 'auto',
        }
    },
    playstoreLink: {
        color: theme.palette.text.secondary,
        marginLeft: 5,
        marginRight: 5,
        textDecoration: 'underline',
    }
}));

const Banner = () => {
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar>
                <div
                className={classes.tmContainer}
                >
                    <Typography
                    variant="body2"
                    >
                        Store made with
                    </Typography>
                    <img
                    src={sokoLogo}
                    alt="soko"
                    className={classes.sokoLogo}
                    />
                </div>
                <div
                className={classes.playstoreLinkContaier}
                >
                    <Typography
                    variant="body2"
                    >
                        Create your own Online Shop. Get 
                        <a 
                        href="https://play.google.com/store/apps/details?id=com.soko.sokomerchant"
                        className={classes.playstoreLink}
                        >SokoApp</a> 
                        Now!
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Banner;
