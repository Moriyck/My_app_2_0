
import React from 'react'
import { Field, reduxForm } from 'redux-form'
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
            /////////{props.applicationState.thrust}////////////
            </div>
            <div>
                <ControlPanelReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default NewThrust
