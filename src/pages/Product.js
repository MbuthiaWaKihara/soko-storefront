import React from 'react';

//router
import { useHistory } from 'react-router-dom';


//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


//redux
import { connect } from 'react-redux';

//components
import RelatedProducts from '../components/RelatedProducts';
import TitleWithBackIcon from '../components/TitleWithBackIcon';
import ProductDetails from '../components/ProductDetails';

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

const mapStateToProps = state => ({
    selectedCategory: state.store.selectedCategory,
});

const Product = ({
    selectedCategory,  
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
                    title={selectedCategory.name}
                    />
                    <Divider />
                    <ProductDetails />
                    <RelatedProducts />
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
)(Product);