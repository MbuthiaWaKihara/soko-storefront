import React from 'react';

import {ohnestInvestmentsStore} from '../datastore/soko-stores';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';

//redux
import { connect } from 'react-redux';
import { fetchCategories, setSelectedCategory } from '../redux';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: '10%',
    },
    categoryContainer: {
        width: '98%',
        height: '3em',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    categoryText: {
        width: '90%',
        textAlign: 'right',
        color: theme.palette.secondary.contrastText,
    }
}));

const mapStateToProps = state => ({
    selectedCategory: state.store.selectedCategory,
})

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories()),
    setSelectedCategory: category => dispatch(setSelectedCategory(category)),
});

const ListViewCategories = ({
    fetchCategories, setSelectedCategory, selectedCategory,
}) => {
    //simulate fetching of categories
    React.useEffect(() => {
        fetchCategories();
        //select first category as default selected
        setSelectedCategory(ohnestInvestmentsStore.categories[0]);
        //eslint-disable-next-line
    }, []);

    const classes = useStyles();
    const theme = useTheme();

    //callbacks
    const selectCategory = category => {
        setSelectedCategory(category);
    }

    return (
        <>
            <div
            className={classes.root}
            >
                {
                    ohnestInvestmentsStore.categories.map(category => (
                        <div 
                        key={category.id}
                        className={classes.categoryContainer}
                        onClick={() => selectCategory(category)}
                        style={{
                            borderRight: category.name === selectedCategory.name ? `.5em solid ${theme.palette.primary.main}`: null,
                            background: category.name === selectedCategory.name ? `linear-gradient(to left, ${theme.palette.primary.light}, white)`: null,
                        }}
                        >
                            <Typography
                            variant="body1"
                            className={classes.categoryText}
                            style={{
                                color: category.name === selectedCategory.name ? theme.palette.primary.main : null,
                            }}
                            >
                                {category.name} [{category.products.length}]
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListViewCategories);
