import React from 'react'
import classes from './SpecificOffer.module.css'
import img from './img.png'

const SpecificOffer = (props) => {

    return (
        <div className={classes.specificOffer}>
            <div>
                <h2>
                    Оффер(Почему стоит обратиться к нам),
                </h2>
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
            </div>
            <div className={classes.cardBox}>
                <div className={classes.card}>
                    <h3>Заголовок</h3>
                    <img className={classes.cardImg} src={img} />

                    <p>
                        Text text text  Text text text Text text
                        text Text text text Text text text Text te
                        xt text Text text text Text text text Text
                        text text Text text text Text text text Text te
                        xt text Text text text Text text text Text text
                        text Text text text Text text text Text text te
                        Text text text
                        Text text text
                        Text text text
                        Text text textxt Text text text Text text text
                    </p>
                </div>
                <div className={classes.card}>
                    <h3>Заголовок</h3>
                    <img className={classes.cardImg} src={img} />
                    <p>
                        Text text text
                    </p>
                </div>
                <div className={classes.card}>
                    <h3>Заголовок</h3>
                    <img className={classes.cardImg} src={img} />
                    <p>
                        Text text text
                    </p>
                </div>
                <div className={classes.card}>
                    <h3>Заголовок</h3>
                    <img className={classes.cardImg} src={img} />
                    <p>
                        Text text text
                    </p>
                </div>
            </div>
            <div>
                <h2>
                    Категории
                </h2>
                В вввввввв ррррррррр рррррррррррр ррррррррррррррр
            </div>
            <div className={classes.categoryBox}>
                <div className={classes.category}>
                    <img className={classes.cacategoryrdImg} src={img} />
                    <h3>Заголовок</h3>
                    <p>
                        Text text text
                    </p>
                </div>
                <div className={classes.category}>
                    <img className={classes.cacategoryrdImg} src={img} />
                    <h3>Заголовок</h3>
                    <p>
                        Text text text
                    </p>
                </div>
                <div className={classes.category}>
                    <img className={classes.cacategoryrdImg} src={img} />
                    <h3>Заголовок</h3>
                    <p>
                        Text text text
                    </p>
                </div>
                <div className={classes.category}>
                    <img className={classes.cacategoryrdImg} src={img} />
                    <h3>Заголовок</h3>
                    <p>
                        Text text text
                    </p>
                </div>
            </div>
        </div >
    )
}

export default SpecificOffer