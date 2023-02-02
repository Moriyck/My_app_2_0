import React from 'react'
import classes from './OurTeam.module.css'
import img from './img.png'

const OurTeam = (props) => {

    return (
        <div className={classes.ourTeam}>
            <div>
                <h2>
                    Наша команда
                </h2>
                <p>
                    Наша компания занимается организацией отдыха на Камчатке любой сложности.
                    На сайте вы можете найти варианты путешествий в составе группы с другими участниками,
                    или разработать вместе с нами свой собственный, уникальный маршрут.
                    Мы работаем так же с иностранными гостями из разных стран: Японии, Китая,
                    Европы и всего мира. На таких маршрутах присутствует англоговорящий гид.
                    Чтобы ваш отдых на Камчатке прошел комфортно и интересно,
                    мы учитываем физические возможности каждого туриста и стараемся сформировать
                    группы примерно с одинаковым уровнем подготовки.
                    При оформлении заказа, мы обязательно обсудим ваши пожелания и порекомендуем
                    отдых с учетом всех ваших особенностей.
                </p>
            </div>
            <div className={classes.cardBox}>
                <div className={classes.card}>
                    <h3>Омар Хайям</h3>
                    <img className={classes.cardImg} src={img} />
                    <h3>Руководитель проекта</h3>
                    <p>
                        Text text text
                    </p>
                </div>
                <div className={classes.card}>
                    <h3>Омар Хайям</h3>
                    <img className={classes.cardImg} src={img} />
                    <h3>Руководитель проекта</h3>
                    <p>
                        Text text text
                    </p>
                </div>
                <div className={classes.card}>
                    <h3>Омар Хайям</h3>
                    <img className={classes.cardImg} src={img} />
                    <h3>Руководитель проекта</h3>
                    <p>
                        Text text text
                    </p>
                </div>
                <div className={classes.card}>
                    <h3>Омар Хайям</h3>
                    <img className={classes.cardImg} src={img} />
                    <h3>Руководитель проекта</h3>
                    <p>
                        Text text text
                    </p>
                </div>
            </div>
        </div >
    )
}

export default OurTeam