import React from 'react'
import classes from './Header.module.css'

const Header = (props) => {

    return (
        <div className={classes.header}>
            <h1>
                Нужен лендинг<br />
                срочно<br />
                без предоплаты <br />
            </h1>
            <p>
                Доведём нужную инфоррмацию до нужного клиента.
            </p>
        </div >
    )
}

export default Header