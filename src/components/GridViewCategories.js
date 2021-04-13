import React from 'react';

import { ohnestInvestmentsStore } from '../datastore/soko-stores';
import SwipeableViews from 'react-swipeable-views';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

//redux
import { connect } from 'react-redux';
import { fetchCategories, setSelectedCategory } from '../redux';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
        color: theme.palette.divider,
    },
    slideContainer: {
        width: '100%',
        marginTop: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    groupContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    categoryContainer: {
        height: '100%',
        width: '28%',
        marginLeft: '1%',
        marginRight: '1%',
        position: 'relative',
    },
    categoryImage: {
        width: '100%',
        height: '80%',
        objectFit: 'cover',
        borderRadius: 10,
        cursor: 'pointer',
    },
    categoryName: {
        width: '100%',
        textAlign: 'center',
        color: theme.palette.primary.contrastText,
        position: 'absolute',
        bottom: '25%',
        fontWeight: 'bolder',
    }
}));

const mapStateToProps = state => ({
    selectedCategory: state.store.selectedCategory,
});

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories()),
    setSelectedCategory: category => dispatch(setSelectedCategory(category)),
});

const GridViewCategories = ({
    fetchCategories, 
    //eslint-disable-next-line
    setSelectedCategory,
}) => {

    //on mount simulate fetching of categories
    React.useEffect(() => {
        fetchCategories();
        //eslint-disable-next-line
    }, []);

    const classes = useStyles();

    const selectCategory = event => {
        let selectedCategory;
        ohnestInvestmentsStore.categories.forEach(category => {
            if(category.id === event.target.name){
                selectedCategory = category;
            }
        });
        setSelectedCategory(selectedCategory);
    }

    const generateCategoriesMarkup = () => {
        const categoriesMarkup = [];
        let categoriesLength = ohnestInvestmentsStore.categories.length;
        let currentPosition = 0;

        while(categoriesLength > 0) {
            let counterArray = [0, 1, 2]
            let threeCategoriesGroupMarkup = (
                <div
                className={classes.groupContainer}
                >
                    {
                        
                        //eslint-disable-next-line
                        counterArray.map( position => {
                            if(!ohnestInvestmentsStore.categories[currentPosition]){
                                return <React.Fragment key={Math.random()}></React.Fragment>
                                
                            }
                            const categoryMarkup = (
                                <div
                                className={classes.categoryContainer}
                                key={ohnestInvestmentsStore.categories[currentPosition].id}
                                name={ohnestInvestmentsStore.categories[currentPosition].id}
                                >
                                    <img
                                    src={ohnestInvestmentsStore.categories[currentPosition].image_url}
                                    alt={ohnestInvestmentsStore.categories[currentPosition].name}
                                    className={classes.categoryImage}
                                    name={ohnestInvestmentsStore.categories[currentPosition].id}
                                    onClick={selectCategory}
                                    />
                                    <Typography
                                    className={classes.categoryName}
                                    >
                                        {ohnestInvestmentsStore.categories[currentPosition].name}
                                    </Typography>
                                </div>
                            );
                            
            
                            currentPosition++
                            return categoryMarkup;
                        })
                    }
                </div>
            );

            categoriesMarkup.push(threeCategoriesGroupMarkup);
            categoriesLength -= 3;
        }
        return categoriesMarkup;
    }

    return (
        <>
            <Typography
            variant="h6"
            className={classes.title}
            >
                CATEGORIES
            </Typography>
            <SwipeableViews
            className={classes.slideContainer}
            >
                {
                    generateCategoriesMarkup().map((group, i) => (
                        <React.Fragment key={i}>
                            {group}
                        </React.Fragment>
                    ))
                }
            </SwipeableViews>
        </>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GridViewCategories);
