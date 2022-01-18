import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../../../../../common/FormsControls/FormsControls'
import { requiredField, minLengthCreator } from '../../../../../../utils/validators/validator'

//const ruleWriting = ruleWritingCreator(/^[a-z][a-z0-9_$()+/-]*$/)
const minLength10 = minLengthCreator(10)
const NameAssetForm = (props) => {

    return (
        <div >
            <form id="addAssetName" onSubmit={props.handleSubmit} >
                <div>
                    <Field
                        id="assetName"
                        type="text"
                        name="assetName"
                        placeholder="Enter the asset name"
                        value='111111'
                        size="24"
                        component={Input}
                        validate={[requiredField, minLength10]}
                    />
                </div>
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

const NameAssetReduxForm = reduxForm({ form: 'assetName' })(NameAssetForm)
const NameAsset = (props) => {
    const onSubmit = (formData) => {
        props.onSubmit(formData.assetName)
    }
    return (
        <div>
            <div>
                <b>NameAsset</b>
            </div>
            <div>
                < NameAssetReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default NameAsset