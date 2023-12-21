import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/Index.css'
import GlobalContext from './Contexts/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalContext>
        <App />
    </GlobalContext>
)
