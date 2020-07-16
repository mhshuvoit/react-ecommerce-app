import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Details from './pages/Details'
import NotFound from './components/NotFound'

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/details" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  )
}

export default App
