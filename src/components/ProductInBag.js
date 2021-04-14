import React from 'react';

import { useHistory } from 'react-router-dom';

// MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

//redux
import { connect } from 'react-redux';
import { setSelectedProduct, increaseProductQuantity, reduceProductQuantity } from '../redux';

const useStyles = makeStyles(theme => ({
    container: {
        paddingLeft: '1%',
        marginBottom: 10,
        marginTop: 10,
        width: '90%',
        height: '30vh',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            height: '20vh'
        }
    },
    image: {
        width: '20%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 10,
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            width: '40%',
        }
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        marginLeft: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    productName: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productPrice: {
        marginBottom: 10,
    },
    quantityControl: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 5,
        height: '2em',
    },
    controlButton: {
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 5,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: theme.palette.primary.main,
    },
    quantityText: {
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    }
}));

const mapDispatchToProps = dispatch => ({
    setSelectedProduct: product => dispatch(setSelectedProduct(product)),
    increaseProductQuantity: productId => dispatch(increaseProductQuantity(productId)),
    reduceProductQuantity: productId => dispatch(reduceProductQuantity(productId)),
})

const ProductInBag = ({
    product,
    small,
    setSelectedProduct,
    increaseProductQuantity,
    reduceProductQuantity,
}) => {

    const classes = useStyles();
    const history = useHistory();

    const [quantity, setQuantity] = React.useState(product.quantity);

    const goToProduct = () => {
        setSelectedProduct(product);
        history.push(`/products/${product.id}`);
    }

    const changeProductQuantity = difference => {
        if(difference > 0) {
            increaseProductQuantity(product.id);
        }

        if(difference < 0) {
            reduceProductQuantity(product.id);
        }

        setQuantity(previousQuantity => previousQuantity + difference);
    }

    return (
        <>
            <div
            className={classes.container}
            style={{
                height: small ? '10vh' : null,
            }}
            >
                <img
                className={classes.image}
                alt={product.name}
                src={product.images[0]}
                onClick={goToProduct}
                />
                <div
                className={classes.detailsContainer}
                >
                    <Typography
                    variant="body1"
                    className={classes.productName}
                    style={{
                        marginBottom: small ? 0 : null,
                    }}
                    >
                        {product.name}
                    </Typography>
                    <Typography
                    variant="body1"
                    className={classes.productPrice}
                    style={{
                        marginBottom: small ? 0 : null,
                    }}
                    >
                        KSH {product.discount_price ? product.discount_price : product.price}
                    </Typography>
                    <div
                    className={classes.quantityControl}
                    >
                        <div
                        className={classes.controlButton}
                        >
                            <IconButton
                            onClick={() => changeProductQuantity(-1)}
                            >
                                <RemoveIcon 
                                className={classes.icon}
                                />
                            </IconButton>
                        </div>
                        <Typography
                        variant="body2"
                        className={classes.quantityText}
                        >
                            {quantity}
                        </Typography>
                        <div
                        className={classes.controlButton}
                        >
                            <IconButton
                            onClick={() => changeProductQuantity(1)}
                            >
                                <AddIcon
                                className={classes.icon}
                                />
                            </IconButton>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Divider />
        </>
    )
}

export default connect(
    null,
    mapDispatchToProps,
)(ProductInBag);
