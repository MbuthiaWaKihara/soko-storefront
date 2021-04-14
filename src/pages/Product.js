import React from 'react';

import SwipeableViews from 'react-swipeable-views';
import { loremIpsum } from 'lorem-ipsum';

//router
import { useHistory } from 'react-router-dom';


//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//redux
import { connect } from 'react-redux';
import { setSelectedProduct } from '../redux';

//components
import RelatedProducts from '../components/RelatedProducts';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '1%',
    },
    sideGrid: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    titleText: {
        marginLeft: 10,
        width: '80%',
        textAlign: 'center',
    },
    contentContainer: {
      padding: 10,
    },
    swipeView: {
        width: '100%',
    },
    image: {
        width: '100%',
        height: '20em',
        objectFit: 'cover',
        [theme.breakpoints.only('md')]: {
            height: '25em',
        }
    },
    detailsContainer: {
        padding: 10,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    addToBagButton: {
        marginRight: 10,
        width: '40%',
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
    },
    buyNowButton: {
        marginLeft: 10,
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.light,
        width: '40%',
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    productOldPrice: {
        color: theme.palette.secondary.contrastText,
        textDecoration: 'line-through',
    },
    discountTag: {
        backgroundColor: '#DD655E',
        padding: 5,
        marginLeft: '5%',
        borderRadius: 5,
        color: theme.palette.primary.contrastText,
    },
    productDescription: {
        color: theme.palette.secondary.contrastText,
        marginTop: 10,
    },
}));

const mapStateToProps = state => ({
    selectedCategory: state.store.selectedCategory,
    selectedProduct: state.store.selectedProduct,
});

const mapDispatchToProps = dispatch => ({
    setSelectedProduct: product => dispatch(setSelectedProduct(product)), 
})

const Product = ({
    selectedCategory, selectedProduct, setSelectedProduct,
}) => {

    const classes = useStyles();
    const history = useHistory();

    const productImages = [...selectedProduct.images, ...selectedProduct.images];

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
                    <div
                    className={classes.titleContainer}
                    >
                        <IconButton
                        edge="start"
                        onClick={goBack}
                        >
                            <ChevronLeftIcon />
                        </IconButton>
                        <Typography
                        variant="h6"
                        className={classes.titleText}
                        >
                            {selectedCategory.name}
                        </Typography>
                    </div>
                    <Divider />
                    <Grid
                    container
                    className={classes.contentContainer}
                    >
                        <Grid
                        item
                        lg={4}
                        sm={12}
                        md={12}
                        >
                            <SwipeableViews
                            className={classes.swipeView}
                            >
                                {
                                    productImages.map((image, i) => (
                                        <img
                                        key={i}
                                        src={image}
                                        alt="product"
                                        className={classes.image}
                                        />
                                    ))
                                }
                            </SwipeableViews>
                        </Grid>
                        <Grid
                        item
                        lg={8}
                        sm={12}
                        md={12}
                        className={classes.detailsContainer}
                        >
                            <Typography
                            variant="h6"
                            className={classes.productName}
                            >
                                {selectedProduct.name}
                            </Typography>
                            <Typography
                            variant="body1"
                            className={classes.productDescription}
                            >
                                {loremIpsum({
                                    count: 3,
                                })}
                            </Typography>
                            <div
                            className={classes.priceContainer}
                            >
                                <Typography
                                variant="h6"
                                className={classes.productPrice}
                                >
                                    KSH {selectedProduct.discount_price ? selectedProduct.discount_price : selectedProduct.price}
                                </Typography>
                                {
                                    selectedProduct.discount_price &&
                                    <div
                                    className={classes.discountTag}
                                    >
                                        -{Math.floor(((selectedProduct.price - selectedProduct.discount_price) * 100)/ selectedProduct.price)}%
                                    </div>
                                }
                            </div>
                            {
                                selectedProduct.discount_price &&
                                <Typography
                                variant="body2"
                                className={classes.productOldPrice}
                                >
                                    KSH {selectedProduct.price}
                                </Typography>
                            }
                            <div
                            className={classes.buttonsContainer}
                            >
                                <Button
                                variant="outlined"
                                className={classes.addToBagButton}
                                >
                                    Add to bag
                                </Button>
                                <Button
                                variant="contained"
                                className={classes.buyNowButton}
                                >
                                    Buy Now
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
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
    mapDispatchToProps,
)(Product);