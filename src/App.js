import React from 'react'
import routes from './routes/index.js'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import './fix.css'
import store from './store/index.js'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  )
}

export default App
