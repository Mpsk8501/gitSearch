import React, {useContext, useEffect} from 'react';
import {GithubContext} from "../context/github/githubContext";
import {CircularProgress} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Repos from "../Components/Repos/Repos";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:50,
        marginBottom:50,
        flexGrow: 1,

    },
    paper: {
        backgroundColor:'rgba(204,204,204,0.3)',
        padding: theme.spacing(2),

        width: '100%',
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    chip:{
        marginBottom: 3
    }
}));


const Profile = (props) => {

    const classes = useStyles();
    const {getUser,getRepos,loading,user,repos} = useContext(GithubContext);
    const urlName = props.match.params.name;


    useEffect(()=>{
        getUser(urlName);
        getRepos(urlName);
        // eslint-disable-next-line
    },[]);

    const {
        name,company,avatar_url,
        location, bio, blog,
        login,html_url,followers,
        public_repos,public_gists,
        following
    } = user;


    if(loading){
        return <div style={{width:'100%',textAlign:"center"}}>
            <CircularProgress
                style={{
                    margin:'150px auto'}}
            />
        </div>
    }else

    return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid  container spacing={2}>
                        <Grid  item>
                            <ButtonBase
                                rel={'noopener norefferrer'}
                                target={'_blank'}
                                href={html_url}
                                className={classes.image}>
                                <img className={classes.img} alt={name||login} src={avatar_url} />
                            </ButtonBase>
                        </Grid>
                        <Grid  item xs={12} sm container>
                            <Grid   item xs={10} container direction="column" spacing={2}>
                                <Grid  item xs>
                                    <Typography  gutterBottom variant="h4">
                                        {name||login}
                                    </Typography>
                                    {location &&
                                        <Typography variant="body2" gutterBottom>
                                            <strong>Location: </strong>{location}
                                        </Typography>
                                    }
                                    {company &&
                                        <Typography  variant="body2" gutterBottom>
                                            <strong>Company: </strong>{company}
                                        </Typography>
                                    }
                                    {blog &&
                                    <Typography  variant="body2" gutterBottom>
                                        <strong>Website: </strong>{blog}
                                    </Typography>
                                    }

                                </Grid>
                            </Grid>
                            <Grid style={{justifyContent:"right"}} container direction={"column"} xs={2}  item>
                                <Chip className={classes.chip} color="primary" label="Followers" avatar={<Avatar>{followers}</Avatar>}/>
                                <Chip className={classes.chip} color="secondary" label="Following" avatar={<Avatar>{following}</Avatar>}/>
                                <Chip className={classes.chip} variant={"outlined"} color="primary" label="Public repos" avatar={<Avatar>{public_repos}</Avatar>}/>
                                <Chip variant={"outlined"} color="secondary" label="Public gists" avatar={<Avatar>{public_gists}</Avatar>}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    {bio && <Grid container direction={"column"}  style={{marginTop:20}}>
                            <strong>BIO:</strong>
                            <p>{bio}</p>
                    </Grid>}
                    {<Repos repos={repos}/>}
                </Paper>
                <div
                    style={{
                        textAlign:'right',
                        marginTop:20}}
                >
                    <Button
                        href={''}
                        variant={"outlined"}
                        color={"primary"}
                        onClick={()=>props.history.push('/')}>
                        Return Home
                    </Button>
                </div>

            </div>
    );
};

export default withRouter(Profile);