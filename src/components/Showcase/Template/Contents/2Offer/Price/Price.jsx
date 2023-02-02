import React from 'react'
import classes from './Price.module.css'
import img from './img.png'
import OrderButton from '../../../assets/Tools/Buttons/OrderButton/OrderButton'

const Price = (props) => {

    return (
        <div className={classes.price}>
            <div>
                <h2>
                    Цена
                </h2>
                Её нужно обязательно указывать:
                так вы сразу отсеете неплатёжеспособных клиентов и не потратите на них лишнее время.
                Чтобы не напугать потенциального клиента,
                обоснуйте стоимость расскажите, что входит в эту цену.
            </div>
            <div className={classes.cardBox}>
                <div className={classes.card}>
                    <h3>
                        Тариф "Базовый"
                    </h3>
                    <img className={classes.cardImg} src={img} />
                    <p>
                        Шаблонный дизайн сайта<br/>
                        Наполнение контентом<br/>
                        Привязка метрики, аналитикс<br/>
                        Регистрация в поисковиках<br/>
                        Текстовый редактор сайта<br/>
                    </p>
                    <OrderButton
                        value={"Заказать"}
                    />
                </div>
                <div className={classes.card}>
                    <h3>
                        Тариф "Расширенный"
                    </h3>
                    <img className={classes.cardImg} src={img} />
                    <p>
                        Разработка дизайна с нуля<br/>
                        Разработка и формирование оффера<br/>
                        Анимация секций<br/>
                        Наполнение контентом<br/>
                        Привязка метрики, аналитикс<br/>
                        Регистрация в поисковиках<br/>
                        CMS (админка)<br/>
                        СМС уведомления о заявках<br/>
                    </p>

                    <OrderButton
                        value={"Заказать"}
                    />
                </div>
                <div className={classes.card}>
                    <h3>
                        Тариф "Премиум"
                    </h3>
                    <img className={classes.cardImg} src={img} />
                    <p>
                        Разработка дизайна сайта<br/>
                        Разработка и формирование оффера<br/>
                        Анимирование секций<br/>
                        Наполнение контентом<br/>
                        Привязка метрики, аналитикс<br/>
                        Регистрация в поисковиках<br/>
                        Разработка и привязка квиз-лендинга<br/>
                        200+ товаров<br/>
                        SEO оптимизация<br/>
                        CMS (админка)<br/>
                        СМС уведомления о заявках<br/>
                        Подключение любой онлайн-оплаты<br/>
                        Интеграция доставки<br/>
                    </p>

                    <OrderButton
                        value={"Заказать"}
                    />
                </div>
            </div>
        </div >
    )
}

export default Price