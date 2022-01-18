import React from 'react'
import CreateAsset from './CreateAsset/CreateAsset'
import classes from './CreateNewAsset.module.css'
import IndividualEntrepreneur from './IndividualEntrepreneur/IndividualEntrepreneur'
import LegalEntity from './LegalEntity/LegalEntity'
import SelfEmployed from './SelfEmployed/SelfEmployed'

const CreateNewAsset = (props) => {

  if (props.myAssetsPage.typeOfAsset === null) {
    return (
      <div className={classes.threeColumns}>
        <div className={classes.box}>
          < IndividualEntrepreneur
            myAssetsPage={props.myAssetsPage}
            xmlParserData={props.xmlParserData}
            match={props.match}
          />
        </div>
        <div className={classes.box}>
          <LegalEntity
            optionValueSelect={props.myAssetsPage.optionValueSelect}
            myAssetsPage={props.myAssetsPage}
            pageCreatingNewAsset={props.pageCreatingNewAsset}
            xmlParserData={props.xmlParserData}
            match={props.match.url}
            selectAnAssetType={props.selectAnAssetType}
          />
        </div>
        <div className={classes.box}>
          <SelfEmployed />
        </div>
      </div>
    )
  }
  return (
    <div>
      < CreateAsset
        pageCreatingNewAsset={props.pageCreatingNewAsset}
        optionValueSelect={props.myAssetsPage.optionValueSelect}
        profileAsset={props.myAssetsPage.profileAsset}
        allMenu={props.allMenu}
        xmlParserData={props.xmlParserData}
        selectAnAssetType={props.selectAnAssetType}
        onSubmit={props.onSubmit}
      />
    </div>

  )
}

export default CreateNewAsset