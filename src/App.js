import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"
import './App.css'
import TheFirstDirectoryContainer from './components/TheFirstDirectoryContainer'
import store from './redux/reduxStore'

const App = () => {

    // 
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div>
                    <TheFirstDirectoryContainer />
                </div>
            </Provider>
        </BrowserRouter>
    )
}
export default App