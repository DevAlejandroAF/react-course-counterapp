import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './components/app/App.jsx'
import './styles/styles.css'
import CounterApp from './components/counterApp/counterApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App title="Hello World!" />*/}
    <CounterApp value={10} />
  </React.StrictMode>,
)
