import React from 'react';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//icons
import AddIcon from '@material-ui/icons/Add';

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
        marginRight: 10,
    },
}));

const ProductSummary = ({
    product
}) => {
    
    const classes = useStyles();
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
                    />
                    {
                    product.discount_price &&
                    <div
                    className={classes.discountTag}
                    >
                        {Math.floor(((product.price - product.discount_price) * 100)/ product.price)}%
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
                <Button
                className={classes.addButton}
                variant="outlined"
                >
                    <AddIcon /> Add
                </Button>
            </div>
        </>
    )
}

export default ProductSummary;;
