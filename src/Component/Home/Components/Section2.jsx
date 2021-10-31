import React, { useEffect, useState } from 'react'

import Blood from "../../../assets/blood.png"
import C1 from "../../../assets/c1.png"
import Edit from "../../../assets/EditSvg"

import { getAboutData } from "../../../api/backEndAPI"

import "./Section2.scss"

const Section2 = () => {

    const [aboutData, setAboutData] = useState(null)

    useEffect(async () => {
        let res = await getAboutData()
        if (res.error != null) {

        } else {
            console.log("RESPONSE ================== ", res.data.data)
            setAboutData(res.data.data)
        }
    }, [])
    console.log("DATA ================== ", aboutData)

    return (
        <>
            <section id="about" className="about_container">
                <div className="box">
                    <div className="title">
                        <div className="heading positionrelative">
                            {
                                <>
                                    <span className="aboutedit" > <Edit width="30px" color="green" /> </span>
                                </>
                            }
                            {
                                !aboutData || aboutData.heading == null || aboutData.heading.length < 1 ?
                                    <>
                                        The 8 Bushido Codes

                                    </>
                                    :
                                    aboutData.heading
                            }
                        </div>
                        <div className="detail">
                            <p className="positionrelative">
                                {
                                    <>
                                        <span className="aboutedit" > <Edit width="30px" color="green" /> </span>
                                    </>
                                }
                                {
                                    !aboutData || aboutData.headingData1 == null || aboutData.headingData1.length < 1 ?
                                        <>
                                            Bushidō (武士道, "The way of the warrior") is a moral code relating to 侍 (Samurai) attitudes, behaviour and lifestyle, where all Samurais live and die by.
                                        </>
                                        :
                                        aboutData.headingData1
                                }
                            </p>
                            <br />
                            <p className="positionrelative">
                                {
                                    <>
                                        <span className="aboutedit" > <Edit width="30px" color="green" /> </span>
                                    </>
                                }
                                {
                                    !aboutData || aboutData.headingData2 == null || aboutData.headingData2.length < 1 ?
                                        <>
                                            These 8 virtues of the Bushido code are each embodied by the 8 legendary Shoguns (将軍, shōgun):
                                        </>
                                        :
                                        aboutData.headingData2
                                }
                            </p>
                        </div>
                    </div>
                    <div className="data">
                        <div className="cards">
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h">
                                    {
                                        !aboutData || aboutData.card1.heading == null || aboutData.card1.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card1.heading
                                    }
                                </div>
                                <div className="s">
                                    {
                                        !aboutData || aboutData.card1.signature == null || aboutData.card1.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card1.signature
                                    }
                                </div>
                                <div className="d">
                                    {
                                        !aboutData || aboutData.card1.detail == null || aboutData.card1.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card1.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h">
                                    {
                                        !aboutData || aboutData.card2.heading == null || aboutData.card2.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card2.heading
                                    }
                                </div>
                                <div className="s">
                                    {
                                        !aboutData || aboutData.card2.signature == null || aboutData.card2.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card2.signature
                                    }
                                </div>
                                <div className="d">
                                    {
                                        !aboutData || aboutData.card2.detail == null || aboutData.card2.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card2.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h">
                                    {
                                        !aboutData || aboutData.card3.heading == null || aboutData.card3.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card3.heading
                                    }
                                </div>
                                <div className="s">
                                    {
                                        !aboutData || aboutData.card3.signature == null || aboutData.card3.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card3.signature
                                    }
                                </div>
                                <div className="d">
                                    {
                                        !aboutData || aboutData.card3.detail == null || aboutData.card3.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card3.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h">
                                    {
                                        !aboutData || aboutData.card4.heading == null || aboutData.card4.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card4.heading
                                    }
                                </div>
                                <div className="s">
                                    {
                                        !aboutData || aboutData.card4.signature == null || aboutData.card4.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card4.signature
                                    }
                                </div>
                                <div className="d">
                                    {
                                        !aboutData || aboutData.card4.detail == null || aboutData.card4.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card4.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h">
                                    {
                                        !aboutData || aboutData.card5.heading == null || aboutData.card5.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card5.heading
                                    }
                                </div>
                                <div className="s">
                                    {
                                        !aboutData || aboutData.card5.signature == null || aboutData.card5.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card5.signature
                                    }
                                </div>
                                <div className="d">
                                    {
                                        !aboutData || aboutData.card5.detail == null || aboutData.card5.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card5.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h">
                                    {
                                        !aboutData || aboutData.card6.heading == null || aboutData.card6.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card6.heading
                                    }
                                </div>
                                <div className="s">
                                    {
                                        !aboutData || aboutData.card6.signature == null || aboutData.card6.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card6.signature
                                    }
                                </div>
                                <div className="d">
                                    {
                                        !aboutData || aboutData.card6.detail == null || aboutData.card6.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card6.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h">
                                    {
                                        !aboutData || aboutData.card7.heading == null || aboutData.card7.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card7.heading
                                    }
                                </div>
                                <div className="s">
                                    {
                                        !aboutData || aboutData.card7.signature == null || aboutData.card7.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card7.signature
                                    }
                                </div>
                                <div className="d">
                                    {
                                        !aboutData || aboutData.card7.detail == null || aboutData.card7.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card7.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h">
                                    {
                                        !aboutData || aboutData.card8.heading == null || aboutData.card8.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card8.heading
                                    }
                                </div>
                                <div className="s">
                                    {
                                        !aboutData || aboutData.card8.signature == null || aboutData.card8.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card8.signature
                                    }
                                </div>
                                <div className="d">
                                    {
                                        !aboutData || aboutData.card8.detail == null || aboutData.card8.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card8.detail
                                    }
                                </div>
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
