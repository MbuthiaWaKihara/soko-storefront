import React from 'react';

//router
import { useHistory } from 'react-router-dom';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

//redux
import { connect } from 'react-redux';
import { setSelectedProduct } from '../redux';

const useStyles = makeStyles(theme => ({
    relatedProductsContainer: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    relatedProductsText: {
        color: theme.palette.divider,
        marginLeft: 5,
    },
    relatedProductsImages: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
        scrollbarColor: '#f1f1f1 #555',
        scrollbarWidth: 'thin',
        scrollbarTrackColor: '#ffffff',
    },
    relatedProductContainer: {
        marginLeft: 5,
        marginRight: 5,
    },
    relatedProductImage: {
        width: '10em',
        height: '10em',
        objectFit: 'cover',
        cursor: 'pointer',
        borderRadius: 10,
    },
    relatedProductName: {
        fontWeight: 'bold',
        width: '10em',
        textAlign: 'center',
    }
}));

const mapStateToProps = state => ({
    selectedCategory: state.store.selectedCategory,
    selectedProduct: state.store.selectedProduct,
});

const mapDispatchToProps = dispatch => ({
    setSelectedProduct: product => dispatch(setSelectedProduct(product)), 
})

const RelatedProducts = ({
    selectedCategory, selectedProduct, setSelectedProduct
}) => {

    const classes = useStyles();
    const history = useHistory();

    const relatedProducts = selectedCategory.products.filter(product => product.id !== selectedProduct.id);

    const selectProduct = product => {
        setSelectedProduct(product);
        history.push(`/products/${product.id}`);
    }

    return (
        <>
            <div
            className={classes.relatedProductsContainer}
            >
                <Typography
                className={classes.relatedProductsText}
                variant="body1"
                >
                    RELATED PRODUCTS
                </Typography>
                <div
                className={classes.relatedProductsImages}
                >
                    {
                        relatedProducts.map(product => (
                            <div
                            className={classes.relatedProductContainer}
                            key={product.id}
                            >
                                <img
                                src={product.images[0]}
                                alt="product"
                                className={classes.relatedProductImage}
                                onClick={() => selectProduct(product)}
                                />
                                <Typography
                                variant="body2"
                                className={classes.relatedProductName}
                                >
                                    {product.name}
                                </Typography>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RelatedProducts);
