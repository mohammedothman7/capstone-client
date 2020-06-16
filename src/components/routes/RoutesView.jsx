import React from "react";
import { Switch, Route } from "react-router-dom";
import {GamePageContainer} from "../containers";


const RoutesView = () => {
    return (
        <Switch>
            <Route exact path="/gamePage/:id" component={GamePageContainer} />
        </Switch>
    )
};

export default RoutesView;
