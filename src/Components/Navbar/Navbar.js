import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
//import Link from "@material-ui/core/Link";
import {NavLink} from "react-router-dom";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        flexGrow: 10,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginRight:10,
        flexGrow: 1,
    },
    link:{
        color:'white',
    }
}));

const Navbar = props => {
    const classes = useStyles();
    const onClickHandler = event => {
        //event.preventDefault()
    };
    return (

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                   {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>*/}
                    <Typography variant="h6" className={classes.title}>
                        GitSearch
                    </Typography>
                    <Typography className={classes.root}>
                        <NavLink exact activeStyle={{color:'red'}} className={classes.link} to={'/'} onClick={onClickHandler}>
                            Home
                        </NavLink>
                        <NavLink activeStyle={{color:'red'}}  className={classes.link} to={'/about'}   onClick={onClickHandler}>
                            About
                        </NavLink>
                    </Typography>


                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;