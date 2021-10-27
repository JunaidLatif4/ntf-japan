import React from 'react'
import Hero from './Components/Hero'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import Section5 from './Components/Section5'
import Section6 from './Components/Section6'

import "./Home.scss"

const Home = () => {
    return (
        <>
        <div className="home_container">
        <Hero/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        </div>
        </>
    )
}

export default Home
