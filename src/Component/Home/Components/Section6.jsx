import React from 'react'

import Mountain from "../../../assets/mountain.png"
import T1 from "../../../assets/t1.jpg"
import T2 from "../../../assets/t2.jpg"
import T3 from "../../../assets/t3.jpg"
import T4 from "../../../assets/t4.jpg"
import T5 from "../../../assets/t5.jpg"
import T6 from "../../../assets/t6.jpg"

import "./Section6.scss"

const Section6 = () => {
    return (
        <>
            <section id="team" className="section6_container">
                <div className="mountain">
                    <img src={Mountain} alt="ERROR" />
                    <div className="black"></div>
                </div>
                <div className="box">
                    <div className="heading">
                        MEET THE <span>TEAM</span>
                    </div>
                    <div className="data">
                        <div className="cards">
                            <div className="card">
                                <img src={T1} alt="ERROR" />
                                <div className="h"> Leon </div>
                                <div className="s"> Co-founder | Project Lead </div>
                                <div className="social"> link </div>
                            </div>
                            <div className="card">
                                <img src={T2} alt="ERROR" />
                                <div className="h"> Leon </div>
                                <div className="s"> Co-founder | Project Lead </div>
                                <div className="social"> link </div>
                            </div>
                            <div className="card">
                                <img src={T3} alt="ERROR" />
                                <div className="h"> Leon </div>
                                <div className="s"> Co-founder | Project Lead </div>
                                <div className="social"> link </div>
                            </div>
                            <div className="card">
                                <img src={T4} alt="ERROR" />
                                <div className="h"> Leon </div>
                                <div className="s"> Co-founder | Project Lead </div>
                                <div className="social"> link </div>
                            </div>
                            <div className="card">
                                <img src={T5} alt="ERROR" />
                                <div className="h"> Leon </div>
                                <div className="s"> Co-founder | Project Lead </div>
                                <div className="social"> link </div>
                            </div>
                            <div className="card">
                                <img src={T6} alt="ERROR" />
                                <div className="h"> Leon </div>
                                <div className="s"> Co-founder | Project Lead </div>
                                <div className="social"> link </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section6
