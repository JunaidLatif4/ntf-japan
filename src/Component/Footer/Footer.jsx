import React from 'react'

import Discord from "../../assets/DiscordSvg"
import TwitterSvg from '../../assets/TwitterSvg'


import "./Footer.scss"

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div className="box">
                    <p> Join our discord if you have any questions, our team will always be there to help you </p>
                    <div className="socials">
                        <Discord color="white" width="40px" />
                        <TwitterSvg color="white" width="40px" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
