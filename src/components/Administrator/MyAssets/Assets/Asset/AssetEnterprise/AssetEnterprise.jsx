import React from 'react'
import { NavLink } from 'react-router-dom'
import ModalContainer from '../../../../../../common/Modal/ModalContainer'
import AllElementsEnterprise from './AllElementsEnterprise/AllElementsEnterprise'
import classes from './AssetEnterprise.module.css'

const AssetEnterprise = (props) => {

    let namePage = props.enterpriseAssetPage.statusText
    let namePageModal = 'Add enterprise element:'
    let modalContent = null
    let pathRouteModal = props.allMenu.AssestEnterpriseModalMenu.map(am =>
        <span key={am.key}>
            <NavLink
                to={am.to}
                className={classes.button}
                activeClassName={classes.activelink}
                onClick={(e) => {
                    props.setModalActive(false)
                    if (am.name === "Save") {
                        debugger
                        props.saveNameEnterpriseElement(props.enterpriseAssetPage.name, props.assetPage.profileAsset._id)
                    }
                }}
            >
                {am.name}
            </NavLink>
        </span>)

    let enterrpriseForm =
        <div>
            <input
                name="propername"
                id="propername"
                type="text"
                placeholder="Enter a new name for the enterprise element"
                size="40"
                value={props.enterpriseAssetPage.name}
                onChange={(e) => {
                    debugger
                    props.passElementName(e.target.value)
                }}
            />
        </div>

    let pathRoute = props.allMenu.AssestEnterpriseMenu.map(am =>
        <span key={am.key}>
            <NavLink
                to={am.to}
                className={classes.button}
                activeClassName={classes.activelink}
                onClick={(e) => {
                    props.setModalActive(true, namePageModal, pathRouteModal, enterrpriseForm, modalContent)
                }}
            >
                {am.name}
            </NavLink>
        </span>)

    let modalCenter90vs90 =
        <ModalContainer
            profileAsset={props.profileAsset}
            modalPage={props.modalPage}
            passElementName={props.passElementName}
            setModalActive={props.setModalActive}
        />

    if (props.modalPage.modalActive === false) {
        modalCenter90vs90 = null
    }

    return (
        <div>
            <div className={classes.twoColumns}>
                <div>
                    <b>{namePage}</b>
                </div>
                <div>
                    {pathRoute}
                </div>
            </div>
            <div>
                <AllElementsEnterprise
                    modalPage={props.modalPage}
                    allMenu={props.allMenu}
                    enterpriseAssetPage={props.enterpriseAssetPage}
                    setModalActive={props.setModalActive}
                    passTheNameOfTheSecondLevelElement={props.passTheNameOfTheSecondLevelElement}
                    saveNameEnterpriseElementSecondLevel={props.saveNameEnterpriseElementSecondLevel}
                    getEnterpriseElementSecondLevel={props.getEnterpriseElementSecondLevel}
                />
            </div>
            {modalCenter90vs90}
        </div>
    )

}

export default AssetEnterprise