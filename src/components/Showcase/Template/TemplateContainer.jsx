import React from 'react'
import classes from './Template.module.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

import {
    fileTheDownload,
    getPosts,
    getProfile,
    postPost,
    updateNewPostText,
    updateStatus
} from "../../../redux/Reduser/profilReduser"
import Contents from './Contents/Contents'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'

class TemplateContainer extends React.Component {

    componentDidMount() {

    }

    render() {

        return (
            <div className={classes.wrapper}>
                <Navbar />
                <Header />
                <Contents />
                <Footer />
            </div >
        )
    }
}

let mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    isFetching: state.profilePage.isFetching
})

export default compose(
    connect(mapStateToProps, {
        updateNewPostText,
        getProfile,
        getPosts,
        postPost,
        updateStatus,
        fileTheDownload
    }),
    withRouter,

)(TemplateContainer)