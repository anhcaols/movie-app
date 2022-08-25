import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './components/GlobalStyles'
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <GlobalStyles>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GlobalStyles>,
)
reportWebVitals()
