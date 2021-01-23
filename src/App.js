import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { about } from './about';
import { background } from './background';
import { activity } from './activity';
import { failed } from './failed';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';



function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={about} />
            <Route path="/background" component={background} />
            <Route path="/activity" component={activity} />
            <Route component={failed} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
