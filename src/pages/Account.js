import React from 'react';

//router
import { useHistory } from 'react-router-dom';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


//components
import TitleWithBackIcon from '../components/TitleWithBackIcon';


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '1%',
    },
    sideGrid: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
}));


const Account = () => {

    const classes = useStyles();
    const history = useHistory();

    const goBack = () => {
        history.push('/');
    }

    return (
        <>
        <Grid
        container
        className={classes.root}
        >
            <Grid
            item
            lg={1}
            className={classes.sideGrid}
            />
            <Grid
            item
            lg={10}
            md={12}
            sm={12}
            xs={12}
            >
                <TitleWithBackIcon
                onClick={goBack}
                title="Account Screen Here"
                />
                <Divider />
            </Grid>
            <Grid
            item
            lg={1}
            className={classes.sideGrid}
            />
        </Grid>
        </>
    )
}

export default Account;