import React from 'react';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

//components
import ListViewCategories from '../components/ListViewCategories';

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
    },
    bagPreviewContainer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    }
}));

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Grid
            container
            className={classes.root}
            >
                <Grid
                lg={3}
                md={12}
                sm={12}
                xs={12}
                className={classes.categoriesContainer}
                >
                    {
                        match ? 
                        <p>Grid view categories</p> :
                        <ListViewCategories />
                    }
                </Grid>
                <Grid
                lg={5}
                md={12}
                sm={12}
                xs={12}
                className={classes.productsContainer}
                >
                    <p>products here</p>
                </Grid>
                <Grid
                lg={3}
                md={12}
                sm={12}
                xs={12}
                className={classes.bagPreviewContainer}
                >
                    <p>bag preview here</p>
                </Grid>
            </Grid> 
        </>
    )
}

export default Home;
