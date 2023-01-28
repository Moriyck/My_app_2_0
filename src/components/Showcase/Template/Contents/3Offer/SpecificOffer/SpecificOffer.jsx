import React from 'react'
import classes from './SpecificOffer.module.css'

const SpecificOffer = (props) => {

    return (
        <div className={classes.specificOffer}>
            SpecificOffer
            <p />
            Оффер(Почему стоит обратиться к нам),<br />
            Это главная часть коммерческого предложения.
            Здесь описываем то, что отличает вас от других компаний,
            почему получатель письма должен обратиться именно к вам.
            В оффере используют УТП — уникальное торговое предложение:
            бесплатную доставку,
            скидку,
            гарантию качества,
            сертификат на второй заказ в подарок
            и так далее.
            <p />
            Пишите с точки зрения клиента — указывайте не свои преимущества, а его выгоды.
            Читателю неважно, сколько у вас филиалов — ему важно, сможет ли он приехать в офис в своём городе.
            Ему всё равно, что вы достигли хороших отношений с поставщиками, ему интересно, получит ли он скидку.
        </div >
    )
}

export default SpecificOffer