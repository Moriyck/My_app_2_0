import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/reduxStore'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'))

serviceWorker.unregister()