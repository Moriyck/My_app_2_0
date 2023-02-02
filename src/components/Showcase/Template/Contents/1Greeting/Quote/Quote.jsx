import React from 'react'
import classes from './Quote.module.css'

const Quote = (props) => {

    return (
        <div className={classes.quote}>
            "   Ветер жизни иногда свиреп.<br />
            В целом жизнь, однако, хороша.<br />
            И не страшно, когда чёрный хлеб,<br />
            Страшно, когда чёрная душа..."<p />

            Омар Хайям
        </div >
    )
}

export default Quote