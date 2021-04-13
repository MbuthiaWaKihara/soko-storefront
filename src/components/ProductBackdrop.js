import React from 'react';

import SwipeableViews from 'react-swipeable-views';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//redux
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
    },
    container: {
        height: '60%',
        width: '90%',
        [theme.breakpoints.up('lg')]: {
            width: '30%',
        },
        [theme.breakpoints.only('md')]: {
            width: '50%'
        },
        [theme.breakpoints.only('sm')]: {
            width: '70%',
        }
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryName: {
        color: theme.palette.secondary.contrastText,
        textAlign: 'center',
        width: '80%',
    },
    imagesContainer: {
        width: '100%',
        marginTop: '1%',
    },
    image: {
        width: '80%',
        height: '200px',
        objectFit: 'cover',
        marginLeft: '10%',
    },
    contentContainer: {
        padding: '5%',
    },
    productName: {
        color: theme.palette.secondary.contrastText,
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    productPrice: {
        color: theme.palette.secondary.contrastText,     
    },
    productOldPrice: {
        color: theme.palette.secondary.contrastText,
        textDecoration: 'line-through',
    },
    discountTag: {
        backgroundColor: '#DD655E',
        padding: 1,
        marginLeft: '5%',
        borderRadius: 5,
        color: theme.palette.primary.contrastText,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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
    }
}));

const mapStateToProps = state => ({
    category: state.store.selectedCategory,
    product: state.store.selectedProduct,
})

const ProductBackdrop = ({
    open,
    onClick,
    category,
    product,
}) => {

    const classes = useStyles();
    const productImages = [...product.images, ...product.images];

    return (
        <>
            <Backdrop
            open={open}
            onClick={onClick}
            className={classes.backdrop}
            >
                <Paper
                className={classes.container}
                elevation={10}
                >
                    <div
                    className={classes.title}
                    >
                        <IconButton
                        edge="start"
                        onClick={onClick}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                        variant="h6"
                        className={classes.categoryName}
                        >
                            {category.name}
                        </Typography>
                    </div>
                    <Divider />
                    <SwipeableViews
                    className={classes.imagesContainer}
                    >
                        {productImages.map((image, i) => (
                            <img
                            key={i}
                            src={image}
                            alt={product.name}
                            className={classes.image}
                            />
                        ))}
                    </SwipeableViews>
                    <div
                    className={classes.contentContainer}
                    >
                        <Typography
                        variant="h6"
                        className={classes.productName}
                        >
                            {product.name}
                        </Typography>
                        <div
                        className={classes.priceContainer}
                        >
                            <Typography
                            variant="body1"
                            className={classes.productPrice}
                            >
                                KSH {product.discount_price ? product.discount_price : product.price}
                            </Typography>
                            {
                                product.discount_price &&
                                <div
                                className={classes.discountTag}
                                >
                                    -{Math.floor(((product.price - product.discount_price) * 100)/ product.price)}%
                                </div>
                            }
                        </div>
                        {
                            product.discount_price &&
                            <Typography
                            variant="body2"
                            className={classes.productOldPrice}
                            >
                                KSH {product.price}
                            </Typography>
                        }
                    </div>
                    <Divider />
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
                </Paper>
            </Backdrop>
        </>
    )
}

export default connect(
    mapStateToProps,
)(ProductBackdrop);
