import React from 'react'
import classes from './AssetSettings.module.css'

const AssetSettings = (props) => {
    debugger
    const optionValueSelect = props.optionValueSelect.map(ovs =>
        <option>
            {ovs.option}
        </option>
    )
    debugger
    return (
        <div>
            <div>
                <b>
                    Settings
                </b>
                <p />
            </div>
            <div className={classes.twoColumns}>
                <div>
                    Choose the legal status:
                </div>
                <div>
                    <select value={props.INN}>
                        {optionValueSelect}
                    </select>
                </div>
            </div>
            <div className={classes.twoColumns}>
                <div>
                    ИНН:
                </div>
                <div>
                    <input value={props.profileAsset.INN} onChange={(e) => { props.passLatterFild(e.target.value) }} />
                    <button
                        onClick={(e) => { props.selectAnAssetType(props.match) }}
                    >Fill in automatically</button>
                </div>
            </div>
            <div className={classes.twoColumns}>
                <div>
                    Вид:
                </div>
                <div>
                    <input value={props.profileAsset.TypeAsset} />
                </div>
            </div>
            <div className={classes.twoColumns}>
                <div>
                    Abbreviated name:
                </div>
                <div>
                    <input value={props.profileAsset.nameAbbreviated} />
                </div>
            </div>
            <div className={classes.twoColumns}>
                <div>
                    Full name:
                </div>
                <div>
                    <input value={props.profileAsset.nameFull} />
                </div>
            </div>
            <div className={classes.twoColumns}>
                <div>
                    Name in the program
            </div>
                <div>
                    <input value={props.profileAsset.nameInTheProgram} />
                </div>
            </div>
            <div className={classes.twoColumns}>
            </div>
            <div className={classes.twoColumns}>
                <div>
                    KPP
            </div>
                <div>
                    <input value={props.profileAsset.KPP} />
                </div>
            </div>
            <div className={classes.twoColumns}>
                <div>
                    OGRN
            </div>
                <div>
                    <input value={props.profileAsset.OGRN} />
                </div>
            </div>
            <div className={classes.twoColumns}>
                <div>
                    Tax system
            </div>
                <div>
                    <input value={props.profileAsset.taxSystem} />
                </div>
            </div>
        </div>

    )
}

export default AssetSettings