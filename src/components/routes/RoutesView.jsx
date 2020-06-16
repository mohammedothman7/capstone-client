import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {GamePageContainer} from "../containers";


const RoutesView = () => {
    return (
        <Switch>
            <Route exact path="/gamePage/:id" component={GamePageContainer} />
        </Switch>
    )
};

export default RoutesView;
