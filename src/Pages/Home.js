import React, {useContext} from 'react';
import Search from "../Components/Search/Search";
import Card from "../Components/CardComponent/CardComponent";
import Grid from '@material-ui/core/Grid';
import {GithubContext} from "../context/github/githubContext";
import {CircularProgress} from "@material-ui/core";

const Home = () => {

    const {loading,users}=useContext(GithubContext);

    const cards = users.map(user=>{
        return(
            <Grid key={user.id} item xs={6} sm={3}>
                <Card
                    title={user.login}
                    avatar={user.avatar_url}
                />
            </Grid>
            )}
    );



    return (
        <div style={{
            margin:'25px auto',
            width:'100%'}}>
            <Search/>
            <Grid container spacing={4}>
                {loading
                    ?<CircularProgress
                        style={{margin:'100px auto'}}
                    />
                    :cards
                }

            </Grid>
        </div>
    );
};

export default Home;