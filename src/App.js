import React from 'react'
import LandingPage from './Pages/LandingPage.jsx'
import Ship from './Pages/Ship.jsx'
import Config from './Pages/Config.jsx'

import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, defaultTheme, goodTheme, openTheme, badTheme, alienTheme } from './Styles/GlobalStyles.js'

const switchTheme = (theme) => {
  switch (theme) {
    case 'default':
      return defaultTheme
    case 'good':
      return goodTheme
    case 'open':
      return openTheme
    case 'bad':
      return badTheme
    case 'alien':
      return alienTheme
    default:
      return defaultTheme
  }
}

const App = () => {

  const theme = useSelector(state => state.theme.theme)

  return (
    <>
    <ThemeProvider theme={switchTheme(theme)}>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/ship' component={Ship}/>
        <Route exact path='/config' component={Config}/>
      </Switch>
      <GlobalStyle/>
    </ThemeProvider>
    </>
  )
}

export default App
