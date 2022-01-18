import React from 'react'
import { Route } from 'react-router-dom'
import AllAssets from './Assets/AllAssets/AllAssets'
import Asset from './Assets/Asset/Asset'
import CreateAsset from './CreateNewAsset/CreateAsset/CreateAsset'
import CreateNewAsset from './CreateNewAsset/CreateNewAsset'

const MyAssets = (props) => {
  let assetsElements = props.myAssetsPage.assets.map(as =>
    <Route
      path={'/myAssets/AllAssets'}
      render={() =>
        <AllAssets
          myAssetsPage={props.myAssetsPage}
          xmlParserData={props.xmlParserData}
          match={props.match}
          assetsId={as.id}
          name={as.doc.name}
          selectAnAssetType={props.selectAnAssetType}
          publicProfile={props.publicProfile}
        />} />)
  return (
    <div>
      {assetsElements}
      <Route
        path='/myAssets/CreateNewAsset'
        render={() =>
          < CreateNewAsset
            myAssetsPage={props.myAssetsPage}
            pageCreatingNewAsset={props.pageCreatingNewAsset}
            xmlParserData={props.xmlParserData}
            allMenu={props.allMenu}
            match={props.match}
            selectAnAssetType={props.selectAnAssetType}
            onSubmit={props.onSubmit}
          />} />
      <Route
        path='/myAssets/Assets'
        render={() =>
          < Asset
            myAssetsPage={props.myAssetsPage}
            assetPage={props.assetPage}
            enterpriseAssetPage={props.enterpriseAssetPage}
            modalPage={props.modalPage}
            xmlParserData={props.xmlParserData}
            allMenu={props.allMenu}
            match={props.match}
            selectAnAssetType={props.selectAnAssetType}
            passLatterFild={props.passLatterFild}
            passElementName={props.passElementName}
            setModalActive={props.setModalActive}
            saveNameEnterpriseElement={props.saveNameEnterpriseElement}
            passTheNameOfTheSecondLevelElement={props.passTheNameOfTheSecondLevelElement}
            saveNameEnterpriseElementSecondLevel={props.saveNameEnterpriseElementSecondLevel}
            getEnterpriseElementSecondLevel={props.getEnterpriseElementSecondLevel}
          />} />
      <Route
        path='/myAssets/CreateAsset'
        render={() =>
          < CreateAsset
            myAssetsPage={props.myAssetsPage}
            xmlParserData={props.xmlParserData}
            allMenu={props.allMenu}
            match={props.match}
            selectAnAssetType={props.selectAnAssetType}
          />} />
    </div>
  )
}

export default MyAssets