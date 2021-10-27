import React from 'react'
import Hero from './Components/Hero'
import Section2 from './Components/Section2'

import "./Home.scss"

const Home = () => {
    return (
        <>
        <div className="home_container">
        <Hero/>
        <Section2/>
        </div>
        </>
    )
}

export default Home
