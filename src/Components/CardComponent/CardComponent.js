import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
    title:{
        maxWidth: '100%',
        wordBreak: 'break-all'
    }
});

const CardComponent = props => {
    const classes = useStyles();
    const onCardClickHandler=(login)=>{
        props.history.push(`/profile/${login}`)
    };

    return (
        <Card className={classes.root}>
            <CardActionArea
                onClick={()=>onCardClickHandler(props.title)}
            >
                <CardMedia
                    className={classes.media}
                    image={props.avatar}
                    title="Avatar"
                />
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default withRouter(CardComponent);