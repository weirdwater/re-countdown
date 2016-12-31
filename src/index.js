import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './components/App';
import CountdownPage from './components/CountdownPage'
import NotFound from './components/NotFound'
import './sass/main.sass';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/:year" component={CountdownPage}>
            <Route path="/:year/:month" component={CountdownPage}>
                <Route path="/:year/:month/:day" component={CountdownPage} />
            </Route>
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
),
  document.getElementById('root')
);
