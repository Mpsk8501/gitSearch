import React, {useContext, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {AlertContext} from "../../context/alert/alertContext";
import {GithubContext} from "../../context/github/githubContext";


const Search = () => {

    const [value,setValue]=useState('');
    const alert = useContext(AlertContext);

    const github = useContext(GithubContext);

    const onSubmit = event => {
        if(event.key==='Enter'){
            if(value.trim()){
                alert.hide();
                github.search(value.trim())

            }else {
                github.clearUsers();
                alert.show('The input must not be empty','error')
            }

        }

    };


    return (

            <TextField
                style={{
                    marginBottom: 15,
                    width: '100%',
                }}
                value={value}
                onChange={event=>setValue(event.target.value)}
                onKeyPress={onSubmit}
                label="Add user nickname"
                variant="outlined"/>

    );
};

export default Search;