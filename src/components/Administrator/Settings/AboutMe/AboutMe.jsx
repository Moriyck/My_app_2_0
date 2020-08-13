import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../../../comon/FormsControls/FormsControls'
import { requiredField } from '../../../../utils/validators/validator'

const AboutMeForm = (props) => {
    return (
        <div >
            <form id="aboutMe" onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        id="description"
                        type="text"
                        name="description"
                        placeholder="Description"
                        size="2400"
                        component={Textarea}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <Field
                        id="motto"
                        type="text"
                        name="motto"
                        placeholder="Motto"
                        size="24"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <Field
                        id="status"
                        type="text"
                        name="status"
                        placeholder="Status my"
                        size="24"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <button>Save</button>
                </div>
            </form>
             <input type={"file"} onChange={props.fileTheDownload} />
             <div>
                {props.profilePage.responseStatus}
            </div>
        </div>
    )
}

const PersInfReduxForm = reduxForm({ form: 'persInf' })(AboutMeForm)
const AboutMe = (props) => {
    const onSubmit = (formData) => {
        props.onSubmit(formData.description, formData.motto, formData.status)
    }
    return (
        <div>
            <div>
                <b>About me</b>
            </div>
            <div>
            < PersInfReduxForm onSubmit={onSubmit} profilePage={props.profilePage} />
            </div>
        </div>
    )
}

export default AboutMe