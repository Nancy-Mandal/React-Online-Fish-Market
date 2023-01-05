import React from 'react'; //7.1K (gzipped: 3.1K)
import { BrowserRouter, Route, Switch } from 
'react-router-dom'; //47.3K (gzipped: 11.1K)

import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <switch>
            <Route exact path="/ " component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </switch>
    </BrowserRouter>
);

export default Router;