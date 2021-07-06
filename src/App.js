import React from 'react'
import Home from './Pages/Home.jsx'
import LandingPage from './Pages/LandingPage.jsx'

import { Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './Styles/GlobalStyles.js'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
      </Switch>
      <GlobalStyle/>
    </>
  )
}

export default App
