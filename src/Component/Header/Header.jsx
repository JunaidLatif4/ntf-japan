import React , {useState} from 'react'
import { NavLink, has } from "react-router-dom"

import Discord from '../../assets/DiscordSvg'
import Twitter from '../../assets/TwitterSvg'

import "./Header.scss"

const Header = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <div className="nav_container" style={{backgroundColor: colorChange ? "#bf393a" : null}}>
                <div className="box">
                    <nav>
                        <a href="#home">HOME</a>
                        <a href="#about">ABOUT</a>
                        <a href="#road">ROADMAP</a>
                        <a href="#team">TEAM</a>
                        <a href="#wh">WHITEPAPER</a>
                    </nav>
                    <div className="btns">
                        <Discord width="30px" />
                        <Twitter width="30px" />
                        {/* <button> Ship </button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
