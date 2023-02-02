import React from 'react'
import ExpertOpinion from './ExpertOpinion/ExpertOpinion'
import classes from './Objections.module.css'
import OurTeam from './OurTeam/OurTeam'
import Reviews from './Reviews/Reviews'

const Objections = (props) => {

    return (
        <div className={classes.objections}>
            <OurTeam />
            <ExpertOpinion />
            <Reviews/>
        </div >
    )
}

export default Objections