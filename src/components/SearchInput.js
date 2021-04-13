import React from 'react';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginBottom: '5%',
    },
    input: {
        color: theme.palette.secondary.contrastText
    }
}));

const SearchInput = () => {

    const classes = useStyles();

    return (
        <>
            <div
            className={classes.root}
            >
                <FormControl
                className={classes.form}
                variant="outlined"
                fullWidth
                >
                <OutlinedInput
                className={classes.input}
                type="text"
                fullWidth
                placeholder="Search Products"
                startAdornment={
                    <InputAdornment
                    position="start"
                    >
                        <IconButton
                        edge="start"
                        >
                            <SearchIcon
                            className={classes.icon}
                            />
                        </IconButton>
                    </InputAdornment>
                }
                />
                </FormControl>
            </div>
        </>
    )
}

export default SearchInput;
