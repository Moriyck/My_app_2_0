import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Canvas from './canvas'

import { startCounter } from '../../redux/Reduser/Preloader/preloaderReduser'
import Canvas from './canvas'

class CanvasContainer extends React.Component {

    componentDidMount() {

    }

    startCounter = (preloader, counter) => {
        this.props.startCounter(preloader, counter)
    }

    render() {
        return (
            <div>
                <Canvas
                    {...this.props}
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

)(CanvasContainer)