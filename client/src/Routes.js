import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostsList from './Components/PostsList';
import AddNewPage from './Components/AddNewPage';
import EditPost from './Components/EditPost';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PostsList} />
                <Route path="/details/:id"  component={() => <h1>Details Page</h1>} />
                <Route path="/new"  component={AddNewPage} />
                <Route path="/edit/:id"  component={EditPost}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;