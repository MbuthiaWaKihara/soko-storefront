import React from 'react';

import toast from 'react-hot-toast';

//router
import { useHistory } from 'react-router-dom'

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//icons
import AddIcon from '@material-ui/icons/Add';

//redux
import { connect } from 'react-redux';
import { setSelectedProduct, addProductToBag } from '../redux';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '150px',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '1%',
        alignItems: 'center',
    },
    imageContainer: {
        width: '20%',
        height: '80%',
        position: 'relative',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            width: '40%',
        }
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 10,
    },
    discountTag: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '30%',
        padding: '1%',
        borderBottomRightRadius: 10,
        backgroundColor: '#DD655E',
        color: theme.palette.primary.contrastText,
        fontWeight: 'bold',
    },
    productDetailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%',
        height: '100%',
        paddingLeft: '5%',
    },
    productName: {
        fontWeight: 'bold',
    },
    productMainPrice: {
        color: theme.palette.secondary.contrastText,
    },
    productOldPrice: {
        color: theme.palette.secondary.contrastText,
        textDecoration: 'line-through'
    },
    addButton: {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
    },
    productActions: {
        marginRight: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    seeMore: {
        color: theme.palette.primary.main,
        cursor: 'pointer',
        marginBottom: 10,
        '&:hover': {
            textDecoration: 'underline',
        }
    }
}));

const mapStateToProps = state => ({
    bagProducts: state.bag.products,
})

const mapDispatchToProps = dispatch => ({
    setSelectedProduct: product => dispatch(setSelectedProduct(product)),
    addProductToBag: product => dispatch(addProductToBag(product)),
});

const ProductSummary = ({
    product, openProductBackdrop, setSelectedProduct, addProductToBag, bagProducts
}) => {
    
    const classes = useStyles();
    const history = useHistory();

    const clickProduct = () => {
        setSelectedProduct(product);
        openProductBackdrop();
    }

    const seeMore = () => {
        setSelectedProduct(product);
        history.push(`/products/${product.id}`);
    }

    const isProductInBag = () => {
        let productIsInBag = false;
        bagProducts.forEach(productInBag => {
            if(productInBag.id === product.id){
                productIsInBag = true;
            }
        });

        return productIsInBag;
    }

    const clickOnAdd = () => {
        addProductToBag(product);
        toast.success(`${product.name} added to bag`);
    }

    return (
        <>
            <div
            className={classes.root}
            >
                <div
                className={classes.imageContainer}
                >
                    <img
                    src={product.images[0]}
                    alt={product.name}
                    className={classes.image}
                    onClick={clickProduct}
                    />
                    {
                    product.discount_price &&
                    <div
                    className={classes.discountTag}
                    >
                        -{Math.floor(((product.price - product.discount_price) * 100)/ product.price)}%
                    </div>
                }
                </div>
                <div
                className={classes.productDetailsContainer}
                >
                    <Typography
                    className={classes.productName}
                    variant="body1"
                    >
                        {product.name}
                    </Typography>
                    <Typography
                    className={classes.productMainPrice}
                    >
                        KSH {product.discount_price ? product.discount_price : product.price}
                    </Typography>
                    {
                        product.discount_price &&
                        <Typography
                        className={classes.productOldPrice}
                        variant="body2"
                        >
                            KSH {product.price}
                        </Typography>
                    }
                </div>
                <div
                className={classes.productActions}
                >
                    <Typography
                    variant="body2"
                    className={classes.seeMore}
                    onClick={seeMore}
                    >
                        see more
                    </Typography>
                    <Button
                    className={classes.addButton}
                    variant="outlined"
                    onClick={clickOnAdd}
                    disabled={isProductInBag()}
                    >
                        {
                            !isProductInBag() ?
                            <><AddIcon /> Add</>  :
                            `already in bag`
                        }
                    </Button>
                </div>
            </div>
        </>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductSummary);
