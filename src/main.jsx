import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.jsx'
import WebContextProvider from './store/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebContextProvider>
      <App />
    </WebContextProvider>
  </StrictMode>,
)
