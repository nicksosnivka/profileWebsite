import './Home.css'
import '../App/App.css'
import Card from '../Card/Card'
import '../Card/Card.css'
import pfp from '../../images/home/profilepic.jpeg'
import egencia from '../../images/logos/egencia.png'
import miami from '../../images/logos/miami.jpeg'
import mbhs from '../../images/logos/miamiherbert.jpeg'
import css from '../../images/logos/css.png';
import html from '../../images/logos/html.png'
import java from '../../images/logos/java.png'
import javascript from '../../images/logos/javascript.webp'
import reactPic from '../../images/logos/react.png'
import typescript from '../../images/logos/typescript.png'

function HomePage() {
    return (
        <div className='home'>
            <h1>About Me</h1>
            <div className='line'></div>
            <Card className='cardContainerRight' pic={pfp} picStyle='primary' alt="pic of Nicky">
                <h2>Nicholas Sosnivka</h2>
                <p>I am a fourth year undergraduate student at the University of Miami studying computer 
                    science and minoring in mathematics. I am an aspiring software engineer and will be
                    returning to Egencia this July as a Software Development Engineer I. I have been involved 
                    in technology my whole life, and I was pretty much the "tech nerd" in my family growing up. 
                    Right now I mainly focus on improving my web development skills as I will be using React 
                    and TypeScript for my full-time job. 
                </p>
            </Card>
            <h2 className='secondaryHeader'>Experiences</h2>
            <Card className='cardContainerLeft' pic={egencia} picStyle='secondary' alt="egencia logo">
                <h3 className='smallerH2'>
                    Egencia <span>- Software Development Engineer Intern</span>
                </h3>
                <ul>
                    <li>
                        Deployed front-end features for GUIE components using React, TypeScript, HTML, and CSS
                    </li>
                    <li>
                        Performed unit tests for components before deployment to ensure reliability and allow for future changes
                    </li>
                    <li>
                        Collaborated with team members on sprint tasks and using git as source control for the repository
                    </li>
                </ul>
            </Card>
            <Card className='cardContainerLeft' pic={miami} picStyle='secondary' alt='miami logo'>
                <h3 className='smallerH2'>
                    Department of Computer Science <span> - Teaching Assistant</span>
                </h3>
                <ul>
                    <li>
                        Provide feedback and guidance to students enrolled in Computer Science courses, ranging from introductory to upper-level courses
                    </li>
                    <li>
                        Assist students in understanding weekly concepts by providing tutored sessions
                    </li>
                    <li>
                        Collaborate with lead teachers to recognize issues students are facing and recommend solutions
                    </li>
                </ul>
            </Card>
            <Card className='cardContainerLeft' pic={mbhs} picStyle='secondary' alt='miami business logo'>
                <h3 className='smallerH2'>
                    Miami Herbert Business School <span> -  IT Technician</span>
                </h3>
                <ul>
                    <li>
                        Serve as the point of contact for computer hardware, software, printers and active directory users and groups
                    </li>
                    <li>
                        Perform diagnostics for software/hardware/network in a fast-paced, high-pressure environment
                    </li>
                </ul>
            </Card>
            <h2 className='secondaryHeader'>Skills</h2>
            <div className='skillsContainer'>
                <img src={java} alt='java icon'></img>
                <img src={html} alt='html icon'></img>
                <img src={css} alt='css icon'></img>
                <img src={javascript} alt='javascript icon'></img>
                <img src={typescript} alt='typescript icon'></img>
                <img src={reactPic} alt='react icon'></img>
            </div>
        </div>

    );
}

export default HomePage;