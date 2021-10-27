import React from 'react'
import { NavLink , has } from "react-router-dom"


import "./Header.scss"

const Header = () => {
    return (
        <>
            <div className="nav_container">
                <div className="box">
                    <nav>
                        <a href="#home">HOME</a>
                        <a href="#about">ABOUT</a>
                        <a href="#road">ROADMAP</a>
                        <a href="#team">TEAM</a>
                        <a href="#wh">WHITEPAPER</a>
                    </nav>
                    <div className="btns">
                        <button> discord </button>
                        <button> Twitter </button>
                        <button> Ship </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
