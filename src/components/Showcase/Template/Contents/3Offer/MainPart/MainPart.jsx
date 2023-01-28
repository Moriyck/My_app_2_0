import React from 'react'
import classes from './MainPart.module.css'

const MainPart = (props) => {

    return (
        <div className={classes.mainPart}>
            MainPart
            <p />
            Основная часть
            <h2>
                (Мы предлагаем)
            </h2>
            <p />
            В ней подробно описываем продукт, товар или услугу, которую предлагаем.
            Если это услуга — пишем, что в неё входит. Если товар — говорим о его характеристиках.
            <p />
            Пишите только то, что важно клиенту. Ему не важно, сколько лет вы на рынке и какие трудности есть на производстве.
            Описывайте продукт с выгодной стороны и показывайте преимущества.
            Расскажите, какие именно работы входят в комплексное сопровождение,
            какой бренд поставляет расходники, организуете ли доставку для оптовых покупок.
            <p />
        </div >
    )
}

export default MainPart