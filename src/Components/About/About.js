import React from 'react'
import './About.css'
import HighlightText from '../SmallComponents/HighlightText/HighlightText'
import { Slide } from 'react-awesome-reveal'

export const About = () => {
    return (
        <Slide direction='right' duration={1300} triggerOnce>
            <div id='boxContainer' >
                <header className='boxHeading' id='AboutMe'>About</header>
                <div className='boxText'>
                    <div className='ExperienceBody'>
                        Hi there 👋
                        <br></br>
                        <br></br>
                        I'm Sami, a software engineer building mobile and web products with React Native, React and TypeScript. At Waracle I work on a financial technology mobile app, and through SRMakes I build and release my own products, including Quick Teams and Foodii.
                        <br></br>
                        <ul className='custom-list'>
                            <li><HighlightText text={"🔭 I work across mobile UI, account flows, reliability and performance, and I enjoy taking a feature from design through release."} /></li>
                            <li><HighlightText text={"🌱 I use AI coding tools and MCP integrations to explore and review work, while validating changes with tests and real-device checks."} /></li>
                            <li><HighlightText text={"💼 My independent apps and current projects are on SRMakes."} /></li>
                            <li><HighlightText text={"💬 Ask me about all of my many many hobbies, from running my own Youtube channels on my weekly football sessions, anime, manga, long walks, traveling, food, and the list goes on!"} /></li>
                            <li><HighlightText text={"📫 How to reach me: Best way would be through my email - samisamadur@gmail.com"} /></li>
                            <li><HighlightText text={"⚡ Fun fact: I have amassed over 23 million views on Youtube ⭐"} /></li>
                        </ul>
                        More About Me:
                        <br></br>
                        <ul className='custom-list'>
                            <li><HighlightText text={"🕋 Devote Muslim and all my decisions revolve around it"} /></li>
                            <li><HighlightText text={"🎾 Love playing sports, mainly Tennis, Football and Badminton"} /></li>
                            <li><HighlightText text={"⚽ Massive Liverpool FC fan"} /></li>
                            <li><HighlightText text={"Bangladeshi background"} /></li>
                            <li><HighlightText text={"🏋️‍♀ Gym Goer"} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Slide>
    )
}
