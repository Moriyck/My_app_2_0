import React from 'react'
import classes from './ModalCenter90vs90.module.css'

const ModalCenter90vs90 = (props) => {

    return (
        <div className={classes.modal} activeClassName={classes.active} onClick={(e) => { props.setModalActive(false) }}>
            <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
                <div className={classes.closeModal} onClick={(e) => { props.setModalActive(false) }}>
                    x
                </div>
                <div>
                    {props.modalPage.modalContent}
                </div>
            </div>
        </div>
    )
}

export default ModalCenter90vs90