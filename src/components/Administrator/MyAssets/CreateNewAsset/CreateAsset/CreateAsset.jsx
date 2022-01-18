import React from 'react'
import userPhoto from '../../../../../assets/img/logoSubstitute.png'
import classes from './CreateAsset.module.css'
import CreateAssetMenu from './CreateAssetMenu/CreateAssetMenu'
import NameAsset from './NameAsset/NameAsset'

const CreateAsset = (props) => {

  return (
    <div className={classes.asset}>
      <div>
        <div>pageCreatingNewAsset={props.pageCreatingNewAsset.textError}</div>
      </div>
      <div className={classes.threeColumns}>
        <div>
          <img alt={props.name} className={classes.logo} src={props.logo || userPhoto} />
          <samp>111</samp>
        </div>
        <div>
          <NameAsset
            onSubmit={props.onSubmit}
          />
        </div>
        <div>Description</div>
      </div>
      <div className={classes.twoColumns}>
        <div>
          <CreateAssetMenu
            optionValueSelect={props.optionValueSelect}
            profileAsset={props.profileAsset}
            allMenu={props.allMenu}
            xmlParserData={props.xmlParserData}
            selectAnAssetType={props.selectAnAssetType}
          />
        </div>
        <div>Structure</div>
      </div>
    </div>
  )
}

export default CreateAsset