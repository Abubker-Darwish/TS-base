import React, { FC, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const AppRoot: FC = () => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  )
}

const rootElement = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(rootElement).render(<AppRoot />)
