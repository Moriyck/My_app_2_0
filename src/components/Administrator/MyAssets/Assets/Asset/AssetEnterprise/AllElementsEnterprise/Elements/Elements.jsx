import React from 'react'
import Element from './Element/Element'
import ModalContainer from '../../../../../../../../common/Modal/ModalContainer'
import ModalContent from './ModalContent/ModalContent'

const Elements = (props) => {
    let idElementSecondLevel = props.enterpriseAssetPage.elementsSecondLevel.map(am => am.key[0])[0]
    let getEnterpriseElementSecondLevel = props.getEnterpriseElementSecondLevel
    let setModalActive = props.setModalActive
    let modalContent = <ModalContent
        idElementSecondLevel={idElementSecondLevel}
        modalPage={props.modalPage}
        allMenu={props.allMenu}
        enterpriseAssetPage={props.enterpriseAssetPage}
        setModalActive={props.setModalActive}
        passTheNameOfTheSecondLevelElement={props.passTheNameOfTheSecondLevelElement}
        saveNameEnterpriseElementSecondLevel={props.saveNameEnterpriseElementSecondLevel}
    //getEnterpriseElementSecondLevel={getEnterpriseElementSecondLevel}
    />
    if (props.modalPage.modalActive === true) {
        getEnterpriseElementSecondLevel = null
        idElementSecondLevel = null
    }
    if (props.enterpriseAssetPage.idElementsSecondLevel === idElementSecondLevel) {
        props.setModalActive(true, modalContent)
    }
    let modalCenter90vs90 = <ModalContainer />

    if (props.modalPage.modalActive === false) {
        modalCenter90vs90 = null
    }
    let elements = props.enterpriseAssetPage.elements.map(am =>
        <Element
            listItems={am.doc.listItems}
            name={am.doc.name}
            id={am.id}
            enterpriseAssetPage={props.enterpriseAssetPage}
            getEnterpriseElementSecondLevel={getEnterpriseElementSecondLevel}
        />)
    return (
        <div>
            <div>
                {elements}
            </div>
            <div>
                {modalCenter90vs90}
            </div>
        </div>
    )
}

export default Elements