import React from 'react'
import { Route } from 'react-router-dom'
import classes from './Asset.module.css'
import AssetData from './AssetData/AssetData'
import AssetMenu from './AssetMenu/AssetMenu'
import AssetSettings from './AssetSettings/AssetSettings'
import AssetWarehouse from './AssetWarehouse/AssetWarehouse'
import AssetShop from './AssetShop/AssetShop'
import AssetSalary from './AssetSalary/AssetSalary'
import AssetPersonnel from './AssetPersonnel/AssetPersonnel'
import AssetEnterprise from './AssetEnterprise/AssetEnterprise'
import AssetAccountingPolicy from './AssetAccountingPolicy/AssetAccountingPolicy'
import AssetBankAccounts from './AssetBankAccounts/AssetBankAccounts'

const Asset = (props) => {

  return (
    <div className={classes.asset}>
      <div>
        <AssetData
          myAssetsPage={props.myAssetsPage}
          assetPage={props.assetPage}
          xmlParserData={props.xmlParserData}
          match={props.match}
          selectAnAssetType={props.selectAnAssetType}
        />
      </div>
      <div className={classes.twoColumns}>
        <div>
          <AssetMenu
            profileAsset={props.profileAsset}
            allMenu={props.allMenu}
            match={props.match} />
        </div>
        <div>
          <Route
            path={`/myAssets/Assets/AssetBankAccounts`}
            render={() =>
              < AssetBankAccounts

              />} />
          <Route
            path={`/myAssets/Assets/AssetAccountingPolicy`}
            render={() =>
              < AssetAccountingPolicy

              />} />
          <Route
            path={`/myAssets/Assets/AssetEnterprise`}
            render={() =>
              < AssetEnterprise
                myAssetsPage={props.myAssetsPage}
                assetPage={props.assetPage}
                enterpriseAssetPage={props.enterpriseAssetPage}
                modalPage={props.modalPage}
                optionValueSelect={props.assetPage.optionValueSelect}
                profileAsset={props.assetPage.profileAsset}
                allMenu={props.allMenu}
                xmlParserData={props.xmlParserData}
                passLatterFild={props.passLatterFild}
                passElementName={props.passElementName}
                selectAnAssetType={props.selectAnAssetType}
                setModalActive={props.setModalActive}
                saveNameEnterpriseElement={props.saveNameEnterpriseElement}
                passTheNameOfTheSecondLevelElement={props.passTheNameOfTheSecondLevelElement}
                saveNameEnterpriseElementSecondLevel={props.saveNameEnterpriseElementSecondLevel}
                getEnterpriseElementSecondLevel={props.getEnterpriseElementSecondLevel}
              />} />
          <Route
            path={`/myAssets/Assets/AssetPersonnel`}
            render={() =>
              < AssetPersonnel

              />} />
          <Route
            path={`/myAssets/Assets/AssetSalary`}
            render={() =>
              < AssetSalary

              />} />
          <Route
            path={`/myAssets/Assets/AssetWarehouse`}
            render={() =>
              < AssetWarehouse

              />} />
          <Route
            path={`/myAssets/Assets/AssetShop`}
            render={() =>
              < AssetShop

              />} />
          <Route
            path={`/myAssets/Assets/AssetSettings`}
            render={() =>
              < AssetSettings
                optionValueSelect={props.assetPage.optionValueSelect}
                profileAsset={props.assetPage.profileAsset}
                xmlParserData={props.xmlParserData}
                selectAnAssetType={props.selectAnAssetType}
                passLatterFild={props.passLatterFild}
              />} />
        </div>
      </div>
    </div>
  )
}

export default Asset