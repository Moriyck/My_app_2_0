import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirectComponent'
import {
  getAllMenu,
} from '../../../redux/Reduser/menuReduser'

import {
  getMyAssets,
  toResetTheTypeOfAsset,
  changeTheTypeOfAsset,
} from '../../../redux/Reduser/MyAssets/myAssetsReduser'

import {
  getProfileAsset,
  passLatterFild,
} from '../../../redux/Reduser/MyAssets/Asset/assetReduser'

import {
  getNameAssets,
  creatingNewAsset,
  saveChanges,
} from '../../../redux/Reduser/MyAssets/creatingNewAssetReduser'

import {
  modalActive,
  setModalActiveElements,
} from '../../../redux/Reduser/Modal/modalReduser'

import {
  createAnEnterpriseElement,
  createASecondLevelElement,
  addTheNameOfTheSecondLevelElement,
  addEnterpriseElement,
  getEnterpriseElement,
  getEnterpriseElementSecondLevel,
} from '../../../redux/Reduser/MyAssets/Asset/Enterprise/enterpriseAssetReduser'

import {
  getXmlText,
  parserXmlData
} from "../../../redux/Reduser/xmlPsrserReduser"
import MyAssets from './MyAssets'
import AssetManagementPanel from './AssetManagementPanel/AssetManagementPanel'

class myAssetsContainer extends React.Component {

  componentDidMount() {
    this.props.getMyAssets(this.props.nameMy)
  }

  publicProfile = (assetsId) => {
    this.props.getProfileAsset(assetsId)
    this.props.getEnterpriseElement(50, 0, assetsId)
  }

  getEnterpriseElementSecondLevel = (idAncestor) => {
    debugger
    this.props.getEnterpriseElementSecondLevel(50, 0, idAncestor)
  }

  toResetTheTypeOfAsset = (typeOfAsset) => {
    this.props.toResetTheTypeOfAsset(typeOfAsset)
    this.props.parserXmlData(this.props.xmlParserData.xmlText)
  }

  saveChanges = (doc, newDate) => {
    this.props.saveChanges(doc, newDate)
  }

  passLatterFild = (latter) => {
    this.props.passLatterFild(latter)
  }

  selectAnAssetType = (typeOfAsset, INN) => {
    this.props.changeTheTypeOfAsset(typeOfAsset)
  }

  onSubmit = (name, taxSystem, idAsset) => {
    this.props.creatingNewAsset(name, this.props.nameMy, taxSystem, idAsset)
  }

  setModalActive = (statusModal, modalContent) => {
    debugger
    this.props.modalActive(statusModal, modalContent)
  }

  saveNameEnterpriseElement = (name, idAncestor) => {
    this.props.createAnEnterpriseElement(name, idAncestor)
  }

  saveNameEnterpriseElementSecondLevel = (name, idAncestor) => {
    this.props.createASecondLevelElement(name, idAncestor)
  }

  passElementName = (name) => {
    this.props.addEnterpriseElement(name)
  }

  passTheNameOfTheSecondLevelElement = (name, idAncestor) => {
    this.props.addTheNameOfTheSecondLevelElement(name, idAncestor)
  }

  render() {
    return (
      <div>
        <AssetManagementPanel
          {...this.props}
          toResetTheTypeOfAsset={this.toResetTheTypeOfAsset}
          saveChanges={this.saveChanges}
        />
        <MyAssets
          {...this.props}
          publicProfile={this.publicProfile}
          selectAnAssetType={this.selectAnAssetType}
          onSubmit={this.onSubmit}
          passLatterFild={this.passLatterFild}
          passElementName={this.passElementName}
          saveNameEnterpriseElement={this.saveNameEnterpriseElement}
          setModalActive={this.setModalActive}
          passTheNameOfTheSecondLevelElement={this.passTheNameOfTheSecondLevelElement}
          saveNameEnterpriseElementSecondLevel={this.saveNameEnterpriseElementSecondLevel}
          getEnterpriseElementSecondLevel={this.getEnterpriseElementSecondLevel}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  myAssetsPage: state.myAssetsPage,
  assetPage: state.assetPage,
  pageCreatingNewAsset: state.pageCreatingNewAsset,
  xmlParserData: state.xmlParserData,
  allMenu: state.allMenu,
  enterpriseAssetPage: state.enterpriseAssetPage,
  modalPage: state.modalReduser,
})

export default compose(
  connect(mapStateToProps, {
    getMyAssets,
    getProfileAsset,
    toResetTheTypeOfAsset,
    getXmlText,
    getAllMenu,
    getNameAssets,
    creatingNewAsset,
    parserXmlData,
    changeTheTypeOfAsset,
    saveChanges,
    modalActive,
    setModalActiveElements,
    passLatterFild,
    createAnEnterpriseElement,
    createASecondLevelElement,
    addTheNameOfTheSecondLevelElement,
    addEnterpriseElement,
    getEnterpriseElement,
    getEnterpriseElementSecondLevel,
  }),
  withRouter,
  withAuthRedirect
)(myAssetsContainer)