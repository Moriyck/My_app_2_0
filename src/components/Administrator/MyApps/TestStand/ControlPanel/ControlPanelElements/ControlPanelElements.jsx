
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classes from './ControlPanelElements.module.css'
import { Textarea } from '../../../../../../common/FormsControls/FormsControls'
import { maxLengthCreator, requiredField } from '../../../../../../utils/validators/validator'

const maxLength10 = maxLengthCreator(100)

const ControlPanelForm = (props) => {
    return (
        <div>
            <form id="login" onSubmit={props.handleSubmit}>
                <Field
                    id="newThrust"
                    type="text"
                    name="newThrust"
                    placeholder=""
                    component={Textarea}
                    validate={[requiredField, maxLength10]}
                />
                <button>Send</button>
            </form>
        </div>
    )
}

const ControlPanelReduxForm = reduxForm({ form: 'newThrust' })(ControlPanelForm)

const NewThrust = (props) => {
    const onSubmit = (formData) => {
        props.onSubmit(formData.newThrust)
    }

    return (
        <div>
            <div>
            //////{props.applicationState.thrust}/////////
            </div>
            <div>
                <ControlPanelReduxForm onSubmit={onSubmit} />
            </div>
            <div className={classes.threeColumns}>
                <button>START POW</button>
                <button>STOP</button>
                <button>PAUS</button>
                <button>START POW</button>
                <button>STOP</button>
                <button>PAUS</button>
                <label for="volume">Volume</label>
                <input type="range" id="volume" name="volume"
                    min="0" max="11"></input>
                <label for="volume">Volume</label>
                <input type="range" id="volume" name="volume"
                    min="0" max="11"></input>
                <label for="volume">Volume</label>
                <input type="range" id="volume" name="volume"
                    min="0" max="11"></input>
                <label for="volume">Volume</label>
                <input type="range" id="volume" name="volume"
                    min="0" max="11"></input>
            </div>
        </div>
    )
}

export default NewThrust
