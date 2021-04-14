import React from 'react';

//router
import { useHistory } from 'react-router-dom';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//components
import ListViewCategories from '../components/ListViewCategories';
import GridViewCategories from '../components/GridViewCategories';
import ProductsInCategory from '../components/ProductsInCategory';
import EmptyBag from '../components/EmptyBag';
import TitleWithCount from '../components/TitleWithCount';
import ProductInBag from '../components/ProductInBag';
import BagSummary from '../components/BagSummary';

//redux
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '1%',
    },
    categoriesContainer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    productsContainer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
        padding: '1%',
    },
    bagPreviewContainer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: '1%',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    },
    goToBagContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
    },
    goToBagButton: {
        width: '80%',
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.main,
    }
}));

const mapStateToProps = state => ({
    bagProducts: state.bag.products,
});

const Home = ({
    bagProducts,
}) => {
    const classes = useStyles();
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));
    const history = useHistory();

    const goToBag = () => {
        history.push('/bag');
    }
    return (
        <>
            <Grid
            container
            className={classes.root}
            >
                <Grid
                item
                lg={3}
                md={12}
                sm={12}
                xs={12}
                className={classes.categoriesContainer}
                style={{
                    borderWidth: match ? 0 : null,
                }}
                >
                    {
                        match ? 
                        <GridViewCategories /> :
                        <ListViewCategories />
                    }
                </Grid>
                <Grid
                item
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className={classes.productsContainer}
                style={{
                    borderWidth: match ? 0 : null,
                }}
                >
                    <ProductsInCategory />
                </Grid>
                <Grid
                item
                lg={3}
                sm={12}
                xs={12}
                className={classes.bagPreviewContainer}
                >
                    <TitleWithCount
                    title="Bag"
                    count={bagProducts.length}
                    />
                    {
                        bagProducts.length === 0 ? 
                        <EmptyBag /> :
                        <>
                            {
                                [0, 1, 2, 3, 4].map(position => {
                                    if(bagProducts[position]){
                                        return (
                                            <ProductInBag
                                            key={position}
                                            product={bagProducts[position]}
                                            small
                                            />
                                        )
                                    }

                                    return (
                                        <React.Fragment
                                        key={position}
                                        />
                                    );
                                })
                            }
                            <BagSummary />
                            <div
                            className={classes.goToBagContainer}
                            >
                                <Button
                                variant="contained"
                                className={classes.goToBagButton}
                                onClick={goToBag}
                                >
                                    {
                                        bagProducts.length > 5 ?
                                        `see more` : `go to bag`
                                    }
                                </Button>
                            </div>
                        </>
                    }
                </Grid>
            </Grid> 
        </>
    )
}

export default connect(
    mapStateToProps,
)(Home);
