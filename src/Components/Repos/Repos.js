import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";




const Repos = ({repos}) => {
    const reposArray = repos.map(repo=> {
        return (
            <Button
                style={{
                    margin:5,
                    minWidth:'20%',
                    maxWidth:'100%',
                    flexGrow:1
                }}
                target={'_blank'}
                key={repo.id}
                variant={"outlined"}
                color={"primary"}
                rel={'noopener norefferrer'}
                href={repo.html_url} size="small">
                {repo.name}
            </Button>

        )
    });

    return (
        <Grid
            style={{
                justifyContent:'space-between',
                padding:10,
                marginTop:30}}
            container spacing={4}>
            {reposArray}
        </Grid>
    )
};

export default Repos;