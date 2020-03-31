import React from 'react';
import {Container} from "@material-ui/core";
import Navbar from "./Components/Navbar/Navbar";
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import AlertComponent from "./Components/AlertComponent/AlertComponent";
import AlertState from "./context/alert/alertState";
import GithubState from "./context/github/githubState";
function App() {

    return(
        <GithubState>
        <AlertState>
            <BrowserRouter>
                <Navbar/>

                <Container>
                    <AlertComponent
                        text={'Test Alert'}
                    />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/profile/:name" component={Profile}/>
                        <Redirect to={"/"}/>
                    </Switch>
                </Container>
            </BrowserRouter>
        </AlertState>
        </GithubState>
    )
}

export default App;
