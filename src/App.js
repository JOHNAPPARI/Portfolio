//import logo from './logo.svg';
import './App.css';
import logo from './img/favicon.ico';
import image1 from './img/_MG_2421.jpg';
import image2 from './img/Untitled-design.png';
import project1 from './img/to-do-list-apps.png';
import project2 from './img/food-munch-img.png';
import project3 from './img/OIP.jpg';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Value = () => {
    const textRef = useRef(null);

    useEffect(() => {
      const typed = new Typed(textRef.current, {
        strings: ['Web Development', 'Programming'], // Explicitly define the type of the array
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return <span className="text" ref={textRef} />;
}

const Home = () => {
  return(
    <div>
        <header class="header">
            <div class="profile-container">
                <img src={logo} class="profile-logo" alt=""/>
                <h1 class="profile-heading">John Appari</h1>
            </div>
            {/* <!-- <a href="#" class="logo">John Appari</a> --> */}
            <nav class="navbar" id="myLinks">
                <a href="#Home"  class="active" >Home</a>
                <a href="#About" >About</a>
                <a href="#Skills" >Skills</a>
                <a href="#Projects" >Projects</a>
                <a href="#Contact" >Contact</a>
            </nav>
        </header>


        <section class="home" id="Home">
            <div class="home-content">
                <h3>Hello, It's Me</h3>
                <h1>John Appari</h1>
                <h4>I'm a Engineering student who is<br/>
                    passionate in <span class="text"><Value /></span></h4>
                
                <div class="img">
                     <img src={image1} class="responsive" alt=""/>
                </div>

                <div class="home-sci">
                    <a href="https://www.linkedin.com/in/john-appari-53327b217/" target='_b'><i class='bx bxl-linkedin'></i></a>
                    {/* <!-- <a href="https://instagram.com/midhun_021"style="--i:8" target="_blank"><i class='bx bxl-instagram' ></i></a> -->
                    <!-- <a href="https://www.youtube.com/@Unlucky_Coder21"style="--i:9" target="_blank"><i class='bx bxl-youtube'></i></a> --> */}
                    <a href="https://github.com/JOHNAPPARI" target='_bl'><i class='bx bxl-github'></i></a>
                </div>
                <a href="https://docs.google.com/document/d/1aO2faf16Wr4FVQ4HqHIb0rvzmL_i2YD84fIqS2ki1NY/edit?usp=sharing" class="btn-box" target='_'>Download Resume</a>
            </div>
        </section>


        <section>
            <div class="about" id="About">
                <div class="about-img">
                    <img src={image2} class="abt-res" alt=""/>
                </div>
                <div class="about-text">
                    <h2>About <span>Me</span></h2>
                    <p>I'm from Visakhapatnam, Andhra Pradesh. I completed my B.Tech in Civil engineering.
                        I have hands-on experience with technologies like Python, HTML, CSS, JavaScript, Node JS, React JS and SQLite.
                        I developed many static and dynamic websites. I really enjoyed developing a website for <a href="https://johntodolist.ccbp.tech/">To-Do lists.</a> It helps users keep a track of their tasks. and many more.<br />
                        One of my biggest achievements is Completing a 30-day code challenge successfully. As part that, I practiced coding consistently every day for 30 days. <br />
                        <br />
                        <a href="https://docs.google.com/document/d/1aO2faf16Wr4FVQ4HqHIb0rvzmL_i2YD84fIqS2ki1NY/edit?usp=sharing" class="abtbtn-box" target='_'>Download Resume</a>
                    </p>
                </div>
            </div>
        </section>

        
        <section id="Skills">
            <h1 class="subtitle">My <span>Skills</span></h1>
            <div class="sec">
                <div class="container1">
                    <h1 class="heading1">Technical Skills</h1>
                    <div class="Technical-bars">

                        <div class="bar"><i class='bx bxl-html5' style={{color: "#c9332e"}}></i>
                            <div class="info">
                                <span>HTML <span class="addhtml"></span></span>
                            </div>
                            <div class="progress-line html">
                                <span></span>
                            </div>
                        </div>

                        <div class="bar"><i class='bx bxl-css3' style={{color: "#147bbc"}}></i>
                            <div class="info">
                                <span>CSS <span class="addcss"></span></span>
                            </div>
                            <div class="progress-line css">
                                <span></span>
                            </div>
                        </div>

                        <div class="bar"><i class='bx bxl-python' style={{color: "#b0bc1e"}}></i>
                            <div class="info">
                                <span>Python <span class="addpy"></span></span>
                            </div>
                            <div class="progress-line python">
                                <span></span>
                            </div>
                        </div>

                        <div class="bar"><i class='bx bxl-javascript' style={{color: "#c95d2e"}}></i>
                            <div class="info">
                                <span>JavaScript <span class="addjavascript"></span></span>
                            </div>
                            <div class="progress-line javascript">
                                <span></span>
                            </div>
                        </div>

                        <div class="bar"><i class='bx bxl-react'style={{color: "#3db2fc"}}></i>
                            <div class="info">
                                <span>React JS<span class="addreact"></span></span>
                            </div>
                            <div class="progress-line react">
                                <span></span>
                            </div>
                        </div>

                        <div class="bar"><i class='bx bxs-data' style={{color: "#0000ff"}}></i>
                            <div class="info">
                                <span>My SQL<span class="addsql"></span></span>
                            </div>
                            <div class="progress-line sql">
                                <span></span>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container2">
                    <h1 class="heading1">Professional Skills</h1>
                    <div class="radial-bars">
                        <div class="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle class="progress-bar" cx="100" cy="80" r="80"></circle>
                                <circle class="path path-1" cx="100" cy="80" r="80"></circle>
                            </svg>
                            <div class="percentage">60%</div>
                            <div class="text">Problem Solving</div>
                        </div>

                        <div class="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle class="progress-bar" cx="100" cy="80" r="80"></circle>
                                <circle class="path path-2" cx="100" cy="80" r="80"></circle>
                            </svg>
                            <div class="percentage">70%</div>
                            <div class="text">Creativity</div>
                        </div>

                        <div class="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle class="progress-bar" cx="100" cy="80" r="80"></circle>
                                <circle class="path path-3" cx="100" cy="80" r="80"></circle>
                            </svg>
                            <div class="percentage">80%</div>
                            <div class="text">Communication</div>
                        </div>

                        <div class="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle class="progress-bar" cx="100" cy="80" r="80"></circle>
                                <circle class="path path-4" cx="100" cy="80" r="80"></circle>
                            </svg>
                            <div class="percentage">90%</div>
                            <div class="text">Teamwork</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="Projects">
            <div id="portfolio" class="services">
                <div class="main-text" id="serv">
                    <h2>My <span>Projects</span></h2>
                    <div class="serv-container">
                        <div class="row">
                            <img src={project1} class="project-image" alt=""/>
                            <div class="layer">
                                <h5>Todos Application</h5>
                                <p>A robust task tracking system with CRUD capabilities, crafted to simplify task management. By using HTML, CSS, JS, Bootstrap.</p>

                                <a href="https://johntodolist.ccbp.tech/" ><i class='bx bx-list-check' style={{color: "aliceblue"}}></i></a>
                            </div>
                        </div>

                        <div class="row">
                            <img src={project2} class="project-image" alt=""/>
                            <div class="layer">
                                <h5>Food Munch</h5>
                                <p>A fully responsive website that offers a comprehensive list of food items and detailed information about each items.</p>

                                <a href="https://johnfoodmanch.ccbp.tech/" ><i class='bx bx-food-menu' style={{color: "aliceblue"}}></i></a>
                                
                            </div>
                        </div>

                        <div class="row">
                            <img src={project3} class="project-image" alt=""/>
                            <div class="layer">
                                <h5>Wikipedia Search Application</h5>
                                <p>A custom wikipedia search application that provides a simplified and intuitive way for users to access and view relevant
                                    information. 
                                </p>

                                <a href="https://johnwikipidia.ccbp.tech/"><i class='bx bxl-wikipedia' style={{color: "aliceblue"}}></i></a>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section id="Services">
            <div class="project">
                <div class="container">
                    <h1 class="sub-title">My <span>Services</span></h1>
                    <div class="prj-list">
                        <div>
                            <i class='bx bx-code' style={{color: "#00eeff"}}></i>
                            <h2>Web Development</h2>
                            {/* <!-- <p>Plan, create and code internet sites and web pages with modern and artful design. --> */}
                            <p>
                                I specialize in creating simple yet elegant websites.<br/>
                                <br/>
                                Using foundational skills in HTML, CSS, and JavaScript, I design and develop static websites.
                            </p>
                            
                        </div>

                        <div>
                            <i class='bx bx-desktop' style={{color: "#00eeff"}}></i>
                            <h2>Responsive Web Design</h2>
                            <p>I understand the importance of responsive design in today's mobile-centric world.<br/><br/>
                                Leveraging responsive design principles, I ensure that your website looks and functions 
                                seamlessly across various devices and screen sizes, providing an optimal user experience 
                                for all visitors.</p>
                            
                        </div>

                        {/* <!-- <div>
                            <i class='bx bx-cube' style="color: #00eeff;"></i>
                            <h2>UI / UX Design</h2>
                            <p>Specialized in creating clean, artful design that are both intuitive and functional.</p>
                            
                        </div> --> */}
                        <div>
                            <i class='bx bxl-android' style={{color: "#00eeff"}}></i>
                            <h2>Software Development</h2>
                            <p>Mobile application developer with basic knowledge</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="contacts" id="Contact">
            <div class="contact-text">
                <h2>Contact <span>Me</span></h2>
                <h4>Let's Work Together</h4>
                <div class="contact-list">
                    {/* <!-- <li><i class='bx bxs-send'></i>johnappari123@gmail.com</li> --> */}
                    <li><i class='bx bxs-envelope' ></i>johnappari123@gmail.com</li>
                    <li><i class="bx bxs-phone-call" ></i>+91 9010596365</li>
                </div>
                <div className="contact-icons">
                    <a href="https://www.linkedin.com/in/john-appari-53327b217" target='_b'><i class="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/JOHNAPPARI" target='_bl'><i class='bx bxl-github'></i></a>
                    {/* <!-- <a href="https://www.youtube.com/"><i class='bx bxl-youtube'></i></a>
                    <a href="https://johnappari123@gmail.com/" target="_blank"><i class="bx bxl-instagram"></i></a> --> */}
                </div>
            </div>
        </section>
        
        <div class="last-text">
            <p>Developed by John Appari  <i class='bx bx-copyright' style={{color: "white"}}></i> 2024</p>
        </div>
        <a href="#Home" class="top"><i class='bx bx-up-arrow-alt' ></i></a>

        <script src=""></script>
        </div>
  )
}

function App() {
  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
