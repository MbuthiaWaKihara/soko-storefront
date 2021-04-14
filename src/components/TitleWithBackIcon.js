import React from 'react';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    titleText: {
        marginLeft: 10,
        width: '80%',
        textAlign: 'center',
    },
}));

const TitleWithBackIcon = ({
    onClick,
    title,
}) => {

    const classes = useStyles();

    return (
        <>
           <div
            className={classes.titleContainer}
            >
                <IconButton
                edge="start"
                onClick={onClick}
                >
                    <ChevronLeftIcon />
                </IconButton>
                <Typography
                variant="h6"
                className={classes.titleText}
                >
                    {title}
                </Typography>
            </div> 
        </>
    )
}

export default TitleWithBackIcon;
