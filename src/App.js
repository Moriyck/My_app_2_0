import React from 'react'
import { Route } from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import Futer from './components/Futer/Futer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Friends from './components/Friends/Friends'
import NavbarContainer from './components/Navbar/NavbarConainer'
import ProfilContainer from './components/Profil/ProfilContainer'

const App = () => {

    return (
        <div className='app-wrapper' >
            <Header />
            <NavbarContainer />
            <div className='app-wrapper-content' >
                <Route path='/profil' render={() => < ProfilContainer />} />
                <Route path='/dialogs' render={() => < DialogsContainer />} />
                <Route path='/Friends' render={() => < Friends />} />
            </div>
            <Futer />
        </div>

    )
}
export default App;