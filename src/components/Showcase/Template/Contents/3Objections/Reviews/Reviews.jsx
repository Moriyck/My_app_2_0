import React from 'react'
import classes from './Reviews.module.css'
import img from './img.png'

const Reviews = (props) => {

    return (
        <div className={classes.reviews}>
            <div>
                <h2>
                    ОТЗЫВЫ
                </h2>
            </div>
            <div className={classes.cardBox}>
                <div className={classes.card}>
                    <h3>
                        Поход по Камчатке: 160 километров пешком и подъем на один вулкан
                    </h3>
                    <img className={classes.cardImg}  src={img} />
                    <h3>Услуга товар</h3>
                    <p>
                        Наша группа прошла с ними Камчатку с севера на юг и все дико довольны! Благодарю, ребята!
                    </p>
                </div>
                <div className={classes.card}>
                    <h3>
                        Поход по Камчатке: 160 километров пешком и подъем на один вулкан
                    </h3>
                    <img className={classes.cardImg}  src={img} />
                    <h3>Заголовок</h3>
                    <p>
                    Наша группа прошла с ними Камчатку с севера на юг и все дико довольны! Благодарю, ребята!
                    </p>
                </div>
                <div className={classes.card}>
                    <h3>
                        Поход по Камчатке: 160 километров пешком и подъем на один вулкан
                    </h3>
                    <img className={classes.cardImg}  src={img} />
                    <h3>Заголовок</h3>
                    <p>
                    Наша группа прошла с ними Камчатку с севера на юг и все дико довольны! Благодарю, ребята!
                    </p>
                </div>
                <div className={classes.card}>
                    <h3>
                        Поход по Камчатке: 160 километров пешком и подъем на один вулкан
                    </h3>
                    <img className={classes.cardImg}  src={img} />
                    <h3>Заголовок</h3>
                    <p>
                    Наша группа прошла с ними Камчатку с севера на юг и все дико довольны! Благодарю, ребята!
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Reviews