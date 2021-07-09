import React from 'react'
import LandingPage from './Pages/LandingPage.jsx'
import Ship from './Pages/Ship.jsx'
import Config from './Pages/Config.jsx'

import { Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './Styles/GlobalStyles.js'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/ship' component={Ship}/>
        <Route exact path='/config' component={Config}/>
      </Switch>
      <GlobalStyle/>
    </>
  )
}

export default App
