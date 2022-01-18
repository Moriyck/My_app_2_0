import React from 'react'
import classes from './AllElementsEnterprise.module.css'
import Elements from './Elements/Elements'

const AllElementsEnterprise = (props) => {

    return (
        <div>
            <div className={classes.threeColumns}>
                <span className={classes.table}>
                    <b>L / i</b>
                </span>
                <span className={classes.table}>
                    <b>Name</b>
                </span>
                <span className={classes.table}>
                    <b>Doc id</b>
                </span>
            </div>
            <div>
                <Elements
                    modalPage={props.modalPage}
                    allMenu={props.allMenu}
                    enterpriseAssetPage={props.enterpriseAssetPage}
                    setModalActive={props.setModalActive}
                    passTheNameOfTheSecondLevelElement={props.passTheNameOfTheSecondLevelElement}
                    saveNameEnterpriseElementSecondLevel={props.saveNameEnterpriseElementSecondLevel}
                    getEnterpriseElementSecondLevel={props.getEnterpriseElementSecondLevel}
                />
            </div>
        </div>
    )
}

export default AllElementsEnterprise