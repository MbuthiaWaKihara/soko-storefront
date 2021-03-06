import React from 'react';

//router
import { useHistory } from 'react-router-dom';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

//redux
import { connect } from 'react-redux';

//components
import TitleWithBackIcon from '../components/TitleWithBackIcon';
import EmptyBag from '../components/EmptyBag';
import ProductInBag from '../components/ProductInBag';
import BagSummary from '../components/BagSummary';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '1%',
    },
    sideGrid: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    backToHomeButtonContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%',
    },
    backToHomeButton: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.main,
    },
    checkoutContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        marginBottom: '5%',
    },
    checkoutButton: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.main,
        width: '60%',
    }
}));

const mapStateToProps = state => ({
    bagProducts: state.bag.products,
});

const mapDispatchToProps = dispatch => ({

})

const Bag = ({
    bagProducts,
}) => {

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
                title="Bag"
                />
                <Divider />
                {
                    bagProducts.length === 0 ?
                    <>
                        <EmptyBag />
                        <div
                        className={classes.backToHomeButtonContainer}
                        >
                            <Button
                            variant="contained"
                            className={classes.backToHomeButton}
                            onClick={goBack}
                            >
                                Back to homepage
                            </Button>
                        </div>
                    </> :
                    <>
                        {
                            bagProducts.map(product => (
                                <ProductInBag
                                key={product.id}
                                product={product}
                                />
                            ))
                        }
                        <BagSummary />
                        <div
                        className={classes.checkoutContainer}
                        >
                            <Button
                            variant="contained"
                            className={classes.checkoutButton}
                            >
                                checkout
                            </Button>
                        </div>
                    </>
                }
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

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Bag);