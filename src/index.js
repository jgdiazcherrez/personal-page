import React from 'react'
import './services/i18n'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'

ReactDOM.render(<App />, document.getElementById('app'))

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept()
}
