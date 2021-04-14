import React from 'react';

// MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
// import Typography from '@material-ui/core/Typography';

//redux
import { connect } from 'react-redux';
import { fetchProductsInCategory } from '../redux';

//components
import ProductSummary from './ProductSummary';
import ProductBackdrop from './ProductBackdrop';
import SearchInput from './SearchInput';
import TitleWithCount from './TitleWithCount';

const useStyles = makeStyles(theme => ({
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
            <TitleWithCount
            title={selectedCategory.name}
            count={selectedCategory.products.length}
            />
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
