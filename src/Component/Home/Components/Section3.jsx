import React from 'react'

import Title from "../../../assets/title.svg"
import Blood from "../../../assets/blood2.png"

import "./Section3.scss"

const Section3 = () => {
    return (
        <>
            <div className="section3_container">
                <div className="box">
                    <div className="title">
                        WHO ARE THE
                        <img src={Title} alt="ERROR" />
                    </div>
                    <div className="data">
                        SHOGUN S侍MURAIS is a collection of 8,888 randomly generated NFT Samurais living on the Ethereum Blockchain.
                        <br />
                        <br />
                        Each of them has sworn an oath to one of the 8 Legendary Shoguns, personifying the virtue of the Shogun and dedicating themselves to a lifelong service to the Bushido code.
                        <br />
                        <br />
                        Each S侍MURAI is unique and is created from over 100 hand-drawn traits.
                    </div>
                </div>
                <img className="blood" src={Blood} alt="ERROR" />
            </div>
        </>
    )
}

export default Section3
