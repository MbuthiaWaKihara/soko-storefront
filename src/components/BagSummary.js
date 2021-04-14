import React from 'react';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

//redux
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        width: '95%',
        padding: '2.5%',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        position: 'relative',
    },
    leftText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    rightText: {
        textAlign: 'center',
        position: 'absolute',
        right: 0,
    },
    caption: {
        color: theme.palette.divider,
        fontStyle: 'italic',
        marginBottom: 10,
    }
}));

const mapStateToProps = state => ({
    bag: state.bag,
});

const BagSummary = ({
    bag,
}) => {

    const classes = useStyles();

    return (
        <>
            <div
            className={classes.root}
            >
                <div
                className={classes.row}
                >
                    <Typography
                    className={classes.leftText}
                    >
                        Item Total
                    </Typography>
                    <Typography
                    className={classes.rightText}
                    >
                        KSH {bag.itemTotal}
                    </Typography>
                </div>
                <div
                className={classes.row}
                >
                    <Typography
                    className={classes.leftText}
                    >
                        Delivery
                    </Typography>
                    <Typography
                    className={classes.rightText}
                    >
                        KSH {bag.delivery}
                    </Typography>
                </div>
                <div
                className={classes.row}
                >
                    <Typography
                    className={classes.leftText}
                    >
                        Total
                    </Typography>
                    <Typography
                    className={classes.rightText}
                    >
                        KSH {bag.itemTotal + bag.delivery}
                    </Typography>
                </div>
                <Typography
                className={classes.caption}
                variant="body2"
                >
                    Inclusive of all taxes
                </Typography>
                <Divider />
                <div
                className={classes.row}
                >
                    <Typography
                    className={classes.leftText}
                    >
                        Total
                    </Typography>
                    <Typography
                    className={classes.rightText}
                    >
                        KSH {bag.itemTotal + bag.delivery}
                    </Typography>
                </div>
            </div>
        </>
    )
}

export default connect(
    mapStateToProps,
)(BagSummary);
