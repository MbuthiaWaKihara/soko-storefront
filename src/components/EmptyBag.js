import React from 'react';

//images
import SadFace from '../images/sad_face.jpg';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%',
    },
    image: {
        width: '6em',
        height: '6em',
    },
    firstText: {
        marginTop: 10,
    },
    secondText: {
        marginTop: 10,
        color: theme.palette.secondary.contrastText,
    },
}));

const EmptyBag = () => {

    const classes = useStyles();

    return (
        <>
            <div
            className={classes.root}
            >
                <img
                className={classes.image}
                src={SadFace}
                alt="sad face"
                />
                <Typography
                variant="body1"
                className={classes.firstText}

                >
                    It's empty here
                </Typography>
                <Typography
                variant="body1"
                className={classes.secondText}
                >
                    Start shopping to add items to your bag
                </Typography>
            </div>
        </>
    )
}

export default EmptyBag;
