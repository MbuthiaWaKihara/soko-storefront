import React from 'react';

// MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

//redux
import { connect } from 'react-redux';
import { fetchProductsInCategory } from '../redux';

//components
import ProductSummary from './ProductSummary';
import ProductBackdrop from './ProductBackdrop';
import SearchInput from './SearchInput';

const useStyles = makeStyles(theme => ({
    categoryTitle: {
        display: 'flex',
        flexDirection: 'row',
    },
    productsNumber: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        padding: '.3em',
        marginLeft: '1%',
        borderRadius: 5,
    },
    productsContainer: {
        width: '100%',
        // maxHeight: window.innerHeight,
        // overflowY: 'scroll',
        marginTop: '1%',
        // scrollbarColor: '#f1f1f1 #555',
        // scrollbarWidth: 'thin',
        // scrollbarTrackColor:'#ffffff',
    }
}));

const mapStateToProps = state => ({
    selectedCategory: state.store.selectedCategory,
});

const mapDispatchToProps = dispatch => ({
    fetchProductsInCategory: () => dispatch(fetchProductsInCategory()),
})

const ProductsInCategory = ({
    selectedCategory, fetchProductsInCategory
}) => {

    //on mount simulate fetching products in a category
    React.useEffect(() => {
        fetchProductsInCategory();
        //eslint-disable-next-line
    }, []);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const openProductBackdrop = () => {
        setOpen(true);
    }

    const onBackdropClick = () => {
        setOpen(false);
    }

    return (
        <>
            <SearchInput />
            <div
            className={classes.categoryTitle}
            >
                <Typography
                variant="h6"
                className={classes.categoryName}
                >
                    {selectedCategory.name}
                </Typography>
                <Typography
                className={classes.productsNumber}
                >
                    {selectedCategory.products.length}
                </Typography>
            </div>
            <div
            className={classes.productsContainer}
            >
                {
                    selectedCategory.products.map(product => (
                    <ProductSummary 
                    product={product} 
                    key={product.id}
                    openProductBackdrop={openProductBackdrop}
                    />
                    ))
                }
            </div>
            <ProductBackdrop 
            open={open}
            onClick={onBackdropClick}
            />
        </>
    );
}

export default connect(
mapStateToProps,
mapDispatchToProps,
)(ProductsInCategory);
