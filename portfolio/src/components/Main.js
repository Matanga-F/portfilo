import React from 'react'
import CurrentYear from './CurrentYear'
import Dot from './Dot'
import {AiOutlineMail, AiOutlineCodepenCircle} from "react-icons/ai"
import {GrPhone} from "react-icons/gr"
import {TfiHome} from "react-icons/tfi"
import {BsGithub, BsLinkedin, BsHddStack} from "react-icons/bs"
import {BiUser} from "react-icons/bi" 
import {VscCode} from "react-icons/vsc"

const Main = () => {
  return (
    <body>
    <main>
        <div class="main_grid">
                <div class="side_navigation">
                    <div class="side_design">
                         <div class="profile">
                            <h4>Fulufhelo Matanga</h4>
                           
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
            <div class="main_navigation">
            <section class="heading">
            <div class="head">
                <div id="head">
                    <div class="logo">
                        <h1>V</h1>
                    </div>
                    <span class="nav-menu"><i class="bi bi-list"></i></span>
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
                        <button class="resume"  href="resume">Resume</button>
                    </div>
                    <div>
                        <button class="resume" href="#project">View Project</button>
                    </div>
                    <div>
                        <button class="resume">Send Email</button>
                    </div>
                </div>
                <div id="resume"></div>
            </div>
        </section>
        <section class="about" id="about">
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

                    <p>I have experience in various programming languages such as
                         JavaScript, Java, Python and simple web based languages as HTML5,
                          CSS3 and it's libraries. and also I have few personal projects in 
                          using frameworks such as React and Django.
                    </p>
                </div>
                <div class="icon">
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
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
                <div id="project">Coming Soon...</div>
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
                <div class="first">
                    <h5>Full Stack Developer</h5>
                    <p>first solve the problem then write the code.</p>
                </div>
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