import React from 'react'
import CurrentYear from './CurrentYear'
import Dot from './Dot'
import {AiOutlineMail, AiOutlineCodepenCircle} from "react-icons/ai"
import {GrPhone} from "react-icons/gr"
import {TfiHome, TfiArrowUp} from "react-icons/tfi"
import {BsGithub, BsLinkedin, BsHddStack} from "react-icons/bs"
import {BiUser} from "react-icons/bi" 
import {ImCodepen} from 'react-icons/im'
import  {SlSocialLinkedin} from 'react-icons/sl'
import  {FiGithub} from 'react-icons/fi'
import {AiOutlineMenu, AiOutlineArrowUp} from "react-icons/ai";
import {VscCode} from "react-icons/vsc"

const Main = () => {
  return (
    <body>
    <main>
        <div class="main_grid">
                <div class="side_navigation">
                    <div class="side_design">
                         <div class="profile">
                            <div class="profiles">
                            <h4>Fulufhelo Matanga</h4>
                            <div className= "awesome" id = 'icons'>
                            <FiGithub className= "icons"/>
                            <SlSocialLinkedin className= "icons"/>
                            <ImCodepen className= "icons"/>
                        </div>
                            </div>
                           
                         
                         <div class="nav" id="navigations">
                                <a href="#home"><TfiHome  class="font_awesome" />Home</a>
                                <a href="#about"><BiUser class="font_awesome" />About</a>
                                <a href="#skill"><BsHddStack class="font_awesome" />Skills</a>
                                <a href="#project"><VscCode  class="font_awesome" />Projects</a>
                                <a href="#contact"><AiOutlineMail class="font_awesome" />Contact</a>
                            </div>
                            <div class="copy" id="first">
                                <p>All rights reserved. fulufhelo matanga</p>
                                <CurrentYear />
                            </div>
                        </div>
                    </div>
                    
                </div>
            <div class="main_navigation">
            <section class="heading" id="home">
            <div class="head">
                <div id="head">
                    <div class="logo">
                        <h1>V</h1>
                    </div>
                    <AiOutlineMenu className='menu'/>
                    <div class="nav" id="navigation">
                        <a href="#about"><i class='bx bx-user'>About</i></a>
                        <a href="#skill"><i class="bi bi-hdd-stack">Skills</i></a>
                        <a href="#project"><i class="bx bx-book-content">Projects</i></a>
                        <a href="#contact"><i class="bx bx-envelope">Contact</i></a>
                    </div>
                </div>
                <div class="menu_nav">
                    <a href="#about"><Dot /></a>
                    <a href="#skill"><Dot /></a>
                    <a href="#project"><Dot /></a>
                    <a href="#contact"><Dot /></a>
                </div>
                
                <div class="name">
                    <h1>Fulufhelo Matanga</h1>
                    <h4>Aspiring Full Stack Developer</h4>
                    <p>Clean efficient code and software development.</p>
                    
                </div>
                <div class="links">
                    <div class="cv">
                        <a href= ''><button class="resume"  href="resume">Resume</button></a>
                    </div>
                    <div>
                        <a href='#project'><button class="resume" href="#project">View Project</button></a>
                    </div>
                    <div>
                        <a href= '#contact' ><button class="resume">Send Email</button></a>
                    </div>
                </div>
                <div id="resume"></div>
            </div>
        </section>
        <section class="about" id="about">
        <div class="back-to-top">
                    <div>
                        <a href ="#home" ><AiOutlineArrowUp className='up-arrow' /></a>
                    </div>          
                </div>
                
            <div class="grid_view">

                <div id="about_me">
                    <h5>About Me</h5>
                </div>

                <div id="about_me">


                    <p>I am self driven individual who is passionate
                         in software development, I thrive off problem-solving
                          through programming. I enjoy being challenged and working
                           on projects which require me to work outside my skill and
                            knowledge set to acquire new concepts.</p>

                    <p>I have experience in working with APIs design, Https requests, relational database management systems, full
stack application development and application deployment using Docker. I have also worked with React and
Django frameworks and I am proficient in git and github.
                    </p>
                    {/* <p>I am an enthusiastic and solutions driven individual who is consistently searching for opportunities to learn to
acquire new skills.</p> */}
                        <div className= "awesome" id="awesome">
                            <FiGithub className= "icons"/>
                            <SlSocialLinkedin className= "icons"/>
                            <ImCodepen className= "icons"/>
                        </div>
                </div>
            </div>
        </section>
        <section class="skills" id="skill">
            <div class="skill">
                <h2 class="head">Skills</h2>
                <div class="grid_skills">
                    <div class="item">
                        <h6>Java</h6>
                        <button>show Credentials</button>
                    </div>
                    <div>
                        <h6>JavaScript</h6>
                        <button>show Credentials</button>
                    </div>
                    <div>
                        <h6>C-sharp (C#)</h6>
                        <button>show Credentials</button>
                    </div>
                    <div>
                        <h6>Python</h6>
                        <button>show Credentials</button>
                    </div>
                    <div>
                        <h6>SQL</h6>
                        <button>show Credentials</button>
                    </div>
                    <div>
                        <h6>Web Dev</h6>
                        <button>show Credentials</button>
                    </div>

                </div>
            </div>
        </section>
        <section class="projects" id="project">
            <div class="project_grid">
                <h5 >Projects</h5>
                <div id="soon">Coming Soon...</div>
            </div>
        </section>
        <section class="contact" id="contact">
            <div id="contact">
                <div class="head">
                    <h5>General Enquiries</h5>
                </div>
                <div class="form">
                    <form>
                        <label>Name</label><br />
                        <input type="text" placeholder="fulufhelo" autofocus/><br />
                        <label>Email</label><br />
                        <input type="email" placeholder="matangafulufhelo@gmail.com"/><br />
                        <label>Nature of Enquiry</label><br />
                        <input type="text" placeholder="fulufhelo" autofocus/><br />
                        <label>Message</label><br />
                        <textarea cols="30" rows="5" autocomplete="additional-name"></textarea><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
        <section class="footer">
            <div>
                {/* <div class="first">
                    <h5>Full Stack Developer</h5>
                    <p>first solve the problem then write the code.</p>
                </div> */}
                    
                <div class="copy" id="first">
                    <p>All rights reserved. fulufhelo matanga</p>
                    <CurrentYear />
                </div>
                <div>

                </div>
            </div>
        </section>
            </div>
            
        </div>

        
    
    </main>
</body>
  )
}

export default Main