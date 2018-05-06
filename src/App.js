import React, { Component } from 'react';
import Home from './routes/Home';
import Search from './routes/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

import './App.css';

class App extends Component {

  render() {
    return <Router>
        <MuiThemeProvider>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
          </div>
        </MuiThemeProvider>
      </Router>;
  }
}

export default App;
