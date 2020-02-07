import * as React from 'react';
import {store} from "../../ts/store/index";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route} from "react-router";
import {BrowserRouter, Switch} from "react-router-dom";
import Login from "../login/login";

export default class App extends React.Component{
    private readonly store: any;
    constructor(props){
        super(props);
        this.store=store;
    }
    render(){
        return(
            <Provider store={this.store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={"/html/login/login.html"} component={Login}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));