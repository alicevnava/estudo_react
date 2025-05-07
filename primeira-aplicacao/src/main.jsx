import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//paar exportar mais de um componente, usar: import { App, App2 } from './App.jsx'
//import {App} from './App.jsx' // importando o componente App, evitando erro de importação
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
