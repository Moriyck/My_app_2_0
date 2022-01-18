import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent'
import { getAllMenu } from '../../redux/Reduser/menuReduser'
import { modalActive } from '../../redux/Reduser/Modal/modalReduser'
import { getMyAssets } from '../../redux/Reduser/MyAssets/myAssetsReduser'

import ModalCenter90vs90 from './ModalCenter90vs90'

class modalContainer extends React.Component {

    componentDidMount() {
        this.props.getMyAssets(this.props.nameMy)
    }

    setModalActive = (statusModal, namber) => {
        this.props.modalActive(statusModal, namber)
    }

    setModalActiveElements = (statusModal) => {
        this.props.modalDeActive(statusModal)
    }

    render() {
        return (
            <div>
                <ModalCenter90vs90
                    {...this.props}
                    setModalActive={this.setModalActive}
                    setModalActiveElements={this.setModalActiveElements}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    modalPage: state.modalReduser,

    allMenu: state.allMenu,

    myAssetsPage: state.myAssetsPage,
    assetPage: state.assetPage,
    pageCreatingNewAsset: state.pageCreatingNewAsset,
    xmlParserData: state.xmlParserData,
    enterpriseAssetPage: state.enterpriseAssetPage,
})

export default compose(
    connect(mapStateToProps, {
        modalActive,
        getAllMenu,
        getMyAssets
    }),
    withRouter,
    withAuthRedirect
)(modalContainer)