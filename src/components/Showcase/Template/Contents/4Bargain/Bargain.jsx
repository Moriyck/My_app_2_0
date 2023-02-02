import React from 'react'
import OrderButton from '../../assets/Tools/Buttons/OrderButton/OrderButton'
import classes from './Bargain.module.css'
import img from './img.png'

const Bargain = (props) => {

    return (
        <div className={classes.bargain}>
            <h3>
                Свяжитесь с нами для расчета персональной цены!
                Готовы ответить на все интересующие Вас вопросы,
                подобрать шаблон специально для вашего бизнеса или разработать проект под ваш бизнес!
                Вы можете заказать звонок и наш специалист позвонит вам в течении 15 минут!
            </h3>

            <div className={classes.cardBox}>
                <div>
                <div className={classes.cardBox}>
                    <div className={classes.cardBox}>
                        <input name='454' />
                        <input />
                    </div>
                    <OrderButton
                        value={"Отправить"}
                    />
                    </div>
                </div>
                <img className={classes.cardImg} src={img} />
            </div>           
        </div>

    )
}

export default Bargain