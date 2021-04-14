import React from 'react';

import SwipeableViews from 'react-swipeable-views';
import { loremIpsum } from 'lorem-ipsum';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
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
    selectedProduct: state.store.selectedProduct,
})

const ProductDetails = ({
    selectedProduct,
}) => {

    const classes = useStyles();
    const productImages = [...selectedProduct.images, ...selectedProduct.images];

    return (
        <>
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
        </>
    )
}

export default connect(
    mapStateToProps,
)(ProductDetails);
