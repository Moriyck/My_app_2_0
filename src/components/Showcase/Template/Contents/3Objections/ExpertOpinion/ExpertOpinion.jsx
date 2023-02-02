import React from 'react'
import classes from './ExpertOpinion.module.css'
import img from './img.png'

const ExpertOpinion = (props) => {

    return (
        <div className={classes.expertOpinion}>
            <h2>
                МНЕНИЕ ЭКСПЕРА
            </h2>
            <div className={classes.cardBox}>
                <div className={classes.card}>
                    <img className={classes.cardImg} src={img} />
                    <h3>Бывалый Вася</h3>
                    <p>
                        Маркетолог
                    </p>
                </div>
                <div>
                    <p >
                        "  Камчатский проект сразу понравился мне тем, что ни слова не говорил о поварских навыках,
                        а обещал работу «в полях».
                        Да, он требовал специальных умений, но, как оказалось,
                        я со своими тремя походами и опытом жизни в деревне оказалась для парка интереснее альпинистов-разрядников.
                        Мне долго не отвечали, но потом всё завертелось. Написали, что из более чем четырёхсот анкет выбрана моя и,
                        если я согласна провести на Камчатке три месяца,
                        нужно выслать данные для покупки авиабилета "
                    </p>
                </div>
            </div>
        </div >
    )
}

export default ExpertOpinion