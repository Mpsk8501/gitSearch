import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',

        '& > *': {
            margin: 'auto',
            marginTop:50,
            width: '80%',
            backgroundColor:'rgba(204,204,204,0.57)',

            //height: theme.spacing(16),
        },
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <div style={{padding:20}} className="wrapper">
                    <h1>Info</h1>
                    <h2>Version:<strong>1.01</strong></h2>
                </div>
            </Paper>
        </div>
    );
};

export default About;