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
                        I'm Sami, a Computer Science graduate from Queen Mary University of London and a software engineer who enjoys building useful products from idea to release. My experience spans mobile apps, web platforms and data automation: I started at Threepipe Reply, built websites and commerce projects for clients, and developed product features at VirtualE. Today, I work at Waracle, a digital product agency, building a mobile app for a financial services client, and develop my own products through SRMakes, including Quick Teams and Foodii.
                        <br></br>
                        <ul className='custom-list'>
                            <li><HighlightText text={"🔭 I work across React Native, React and TypeScript, from accessible interfaces and account journeys to performance, testing and release."} /></li>
                            <li><HighlightText text={"🌱 I keep learning and experimenting, including with AI coding tools and MCP integrations, while checking the results through review, tests and real-device use."} /></li>
                            <li><HighlightText text={"💼 You can explore my independent apps and current projects on SRMakes. I'm also open to opportunities to build thoughtful products with a great team."} /></li>
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
