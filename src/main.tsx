import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/app.scss'
import { BrowserRouter } from 'react-router-dom'
import StylesContext from './contexts/StyleContext.tsx'
import AuthContext from './contexts/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <StylesContext>
        <AuthContext>
          <App />
        </AuthContext>
      </StylesContext>
    </React.StrictMode>
  </BrowserRouter>
,
)
