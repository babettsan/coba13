import React from 'react'
import Ship from './Pages/Ship.jsx'
import LandingPage from './Pages/LandingPage.jsx'

import { Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './Styles/GlobalStyles.js'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/ship' component={Ship}/>
      </Switch>
      <GlobalStyle/>
    </>
  )
}

export default App
