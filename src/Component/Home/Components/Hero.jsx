import React from 'react'

import Title from "../../../assets/title.svg"
import B1 from "../../../assets/b1.png"
import B2 from "../../../assets/b2.png"
import B3 from "../../../assets/b3.png"
import B4 from "../../../assets/b4.png"
import Tree from "../../../assets/tree.png"


import './Hero.scss'

const Hero = () => {
    return (
        <>
        <section id="home" className="hero_container">
            <div className="box">
                <img src={Title} alt="ERROR" />
                <div className="btns">
                    <a href="#"> Join us on Discord </a>
                    <a href="#"> Follow us on Twitter </a>
                </div>
            </div>
                <img className="b1" src={B1} alt="ERROR" />
                <img className="b2" src={B2} alt="ERROR" />
                <img className="b3" src={B3} alt="ERROR" />
                <img className="b4" src={B4} alt="ERROR" />
                <img className="tree" src={Tree} alt="ERROR" />
        </section>
        </>
    )
}

export default Hero
