// React
import React from 'react'

import './App.css'

// Components
import Home from './screens/Home'
import LoginRegister from './screens/Sign'

// Store
import { Provider } from 'react-redux'
import store from './store'

// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Private Routing
import PrivateRoute from './screens/PrivateRoute';

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/login" component={LoginRegister} />
        <PrivateRoute path="/" exact component={Home} />
      </Router>
    </Provider>
  )
}

export default App