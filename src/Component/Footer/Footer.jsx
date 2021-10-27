import React from 'react'

import Discord from "../../assets/discord.svg"
import Twitter from "../../assets/twitter.svg"

import "./Footer.scss"

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div className="box">
                    <p> Join our discord if you have any questions, our team will always be there to help you </p>
                    <div className="socials">
                        <img src={Discord} alt="ERROR" />
                        <img src={Twitter} alt="ERROR" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
