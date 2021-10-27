import React from 'react'

import Blood from "../../../assets/blood.png"
import C1 from "../../../assets/c1.png"

import "./Section2.scss"

const Section2 = () => {
    return (
        <>
            <section id="about" className="about_container">
                <div className="box">
                    <div className="title">
                        <div className="heading">
                            The 8 Bushido Codes
                        </div>
                        <div className="detail">
                            Bushidō (武士道, "The way of the warrior") is a moral code relating to 侍 (Samurai) attitudes, behaviour and lifestyle, where all Samurais live and die by.
                            <br />
                            <br />
                            These 8 virtues of the Bushido code are each embodied by the 8 legendary Shoguns (将軍, shōgun):
                        </div>
                    </div>
                    <div className="data">
                        <div className="cards">
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h"> Gi </div>
                                <div className="s"> "Shogun of Justice" </div>
                                <div className="d"> Samurais make a full commitment to their decisions. </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h"> Gi </div>
                                <div className="s"> "Shogun of Justice" </div>
                                <div className="d"> Samurais make a full commitment to their decisions. </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h"> Gi </div>
                                <div className="s"> "Shogun of Justice" </div>
                                <div className="d"> Samurais make a full commitment to their decisions. </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h"> Gi </div>
                                <div className="s"> "Shogun of Justice" </div>
                                <div className="d"> Samurais make a full commitment to their decisions. </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h"> Gi </div>
                                <div className="s"> "Shogun of Justice" </div>
                                <div className="d"> Samurais make a full commitment to their decisions. </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h"> Gi </div>
                                <div className="s"> "Shogun of Justice" </div>
                                <div className="d"> Samurais make a full commitment to their decisions. </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h"> Gi </div>
                                <div className="s"> "Shogun of Justice" </div>
                                <div className="d"> Samurais make a full commitment to their decisions. </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h"> Gi </div>
                                <div className="s"> "Shogun of Justice" </div>
                                <div className="d"> Samurais make a full commitment to their decisions. </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="blood" src={Blood} alt="ERROR" />
            </section>
        </>
    )
}

export default Section2
