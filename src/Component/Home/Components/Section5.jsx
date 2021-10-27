import React from 'react'

import Line from "../../../assets/line.jpg"
import Mountain from "../../../assets/mountain.png"

import "./Section5.scss"

const Section5 = () => {
    return (
        <>
            <section id="road" className="Section5_container">
                <div className="box">
                    <div className="title">
                        ROAD TO <span> GLORY </span>
                    </div>
                    <div className="data">
                        <div className="heading">
                            Appreciation <span> 25% Sold </span>
                        </div>
                        <div className="content">
                            8 Shogun S侍murais NFTs will be airdropped randomly to early adopters and supporters. This is to show appreciation for the OGs that have supported our project from Day 1 ありがとう!
                        </div>
                        <div className="heading">
                            Outreach  <span> 50% Sold </span>
                        </div>
                        <div className="content">
                            We will plan and collate orders for exclusive merchandise that contain the Shogun S侍murais brand starting with T-shirts and Hoodies, you can even send us your minted S侍murais to be printed! Additionally, we will be looking for potential vendors that can produce novel merchandise such as brand-engraved miniature katanas, brand-engraved straw hats and Kimonos. These will all only be available to Shogun S侍murais NFT holders.
                        </div>
                        <div className="heading">
                            Community   <span> 75% Sold </span>
                        </div>
                        <div className="content">
                            $50,000 and 1% of royalties from secondary market will be reserved for community development. These funds will go back to the Shogun S侍murais community to facilitate the building and creation of further initiatives aimed at the outreach to spread the word and introduce more individuals into our tight-knitted community. This will include all marketing initiatives and potentially even a season 2 collection.
                        </div>
                        <div className="heading">
                            Stability    <span> 100% Sold </span>
                        </div>
                        <div className="content">
                            A buy-back wallet will be used to help stabilise the price of Shogun S侍murais. We do so by buying back ALL Shogun S侍murais NFT listed below the mint price every 7 days from OpenSea. The NFTs that we buy back will then be used for future promotions and giveaways.
                        </div>
                    </div>

                    <img className="line" src={Line} alt="ERROR" />

                </div>
                <img className="mountain" src={Mountain} alt="ERROR" />
            </section>
        </>
    )
}

export default Section5
