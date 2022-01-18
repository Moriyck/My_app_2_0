import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import SecondPreloader from './secondPreloader'

import { startCounter } from '../../redux/Reduser/Preloader/preloaderReduser'

class PreloaderContainer extends React.Component {

    componentDidMount() {

    }

    startCounter = (preloader, counter) => {
        this.props.startCounter(preloader, counter)
    }

    render() {
        return (
            <div>
                <SecondPreloader
                    {...this.props}
                    startCounter={this.startCounter}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        preloaderState: state.preloaderState
    }
}

export default compose(
    connect(mapStateToProps, { startCounter }),

)(PreloaderContainer)