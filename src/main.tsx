import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/app.scss'
import { BrowserRouter } from 'react-router-dom'
import StylesContext from './contexts/StyleContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <StylesContext>
        <App />
      </StylesContext>
    </React.StrictMode>
  </BrowserRouter>
,
)
