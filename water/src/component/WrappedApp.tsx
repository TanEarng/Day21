import React from 'react'
import { BrowserRouter } from 'react-router'
import App from '../App'
function WrappedApp() {
  return (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  )
}

export default WrappedApp