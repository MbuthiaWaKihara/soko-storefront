import React from 'react';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    count: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        padding: '.3em',
        marginLeft: '1%',
        borderRadius: 5,
    },
}));

const TitleWithCount = ({
    title, count
}) => {

    const classes = useStyles();

    return (
        <>
            <div
            className={classes.titleContainer}
            >
                <Typography
                variant="h6"
                className={classes.title}
                >
                    {title}
                </Typography>
                <Typography
                className={classes.count}
                >
                    {count}
                </Typography>
            </div>
        </>
    )
}

export default TitleWithCount;
