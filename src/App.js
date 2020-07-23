import React from 'react'
import routes from './routes/index.js'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { GlobalStyle } from './style'
import { IconStyle } from "./assets/iconfont/iconfont";
import './fix.css'

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {renderRoutes(routes)}
    </HashRouter>
  )
}

export default App
