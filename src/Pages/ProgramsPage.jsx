import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import man from '../Images/man-explaining.png';
import unlimited from '../Images/unlimited-access.svg';
import expert from '../Images/expert-teachers.svg';
import learn from '../Images/learn-anywhere.svg';
import '../CSS/ProgramsPage.css';
import { Link } from 'react-router-dom';
const ProgramsPage = () =>{

        return(
            <div class="programs-container">
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className="landing-section">
                        <div className="landing">
                            <h1>Our Programs</h1>
                            <div class="color-cover"></div>
                        </div>
                    </section>
                    <section className="programs-slider-section">
                        <div className="slider">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                            <div className="text">
                                                <h3>Computer Science</h3>
                                                
                                                <p>
                                                Computer Science deals with the theory and practice of computer hardware and software. 
                                                Students learn the theory that underlies computation and how to develop effective, 
                                                efficient and correct software. 
                                                The program is intensive in Mathematics and Computer Science courses.
                                                </p>

                                                <p>
                                                We offer a BSc. Degree in Computer Science and are focused on providing fluent 
                                                understanding in several programming languages and as well as offer courses such 
                                                as General Mathematics, Numerical Methods and Analysis , Data structures & algorithms, 
                                                Artificial Intelligence & Data science, Networking & Operating Systems 
                                                including numerous Programming languages to drive the economy forward.
                                                </p>

                                                <p>Computer Science careers include but are not limited to:</p>

                                                <p>Data Scientist, Software Tester, Software Developer, Web Developer, 
                                                    Computer System Analysts, Information Security Analyst, Project Manager, 
                                                    Network Administrator, Database Administrator, IT Architect, 
                                                    Computer Programmer, Hardware and Systems Engineer, UI/UX Designer.
                                                </p>
                                            </div>
                                            <div class="pic">
                                                <img src={man} alt="Man Explaining"/>
                                            </div>
                                </div>
                                <div className="carousel-item ">
                                            <div className="text">
                                                <h3>Computer Technoloy</h3>
                                                
                                                <p>
                                                Computer technology combines the hardware of computers 
                                                and computer-controlled devices with software.</p>

                                                <p>
                                                We offer a BSc. Degree in Computer Science and courses 
                                                such as Applied Electricity, Basic Electronics, Computer 
                                                Architecture, Advanced Digital Electronics, Circuit Design 
                                                & Testing, Numerical Methods and Analysis, Compiler Construction, 
                                                Fundamentals of Software Engineering, Assembly Language, Androids
                                                </p>

                                                <p>Computer Technology careers include but are not limited to:
                                                </p>

                                                <p>Systems Analyst, Network Administrator, Technician, 
                                                    Software Developer, Computer Hardware Engineers, 
                                                    Computer Network Architects, Computer Programmers, 
                                                    Database Administrators, Network and Computer Systems Administrators.
                                                </p>
                                            </div>
                                            <div className="pic">
                                                <img src={man} alt="Man Explaining"/>
                                            </div>
                                </div>
                                <div className="carousel-item ">
                                            <div className="text">
                                                <h3>Software Engineering</h3>
                                                
                                                <p>
                                                Software Engineering involves the design and development 
                                                of many types of software, including operating systems software, 
                                                network distribution software, and software for compilers. Software 
                                                engineering requires strong programming skills as well as knowledge 
                                                in mathematics, database administration, 
                                                how operating systems work and how hardware interacts.
                                                </p>

                                                <p>
                                                There are various fields in software engineering 
                                                such as requirements gathering, software design, 
                                                construction, maintenance, configuration management, 
                                                engineering management, development process management 
                                                and creation, engineering models and methods, quality etc.
                                                </p>

                                                <p>SWe offer a BSc. Degree in Software Engineering 
                                                    and courses such as Software Quality Engineering 
                                                    and Testing, Mobile App Design & Development, 
                                                    Artificial Intelligence, Software Measure and 
                                                    Metrics, Internet Technologies & Web App Development, 
                                                    Modelling & Simulation, Reverse Engineering and Malware 
                                                    Analysis and Cloud Computing Technologies.
                                                </p>

                                                <p>Software engineer careers include but are not limited to:</p>

                                                <p>Applications developer, Cyber security analyst, Game developer, 
                                                    Information systems manager, IT consultant, Multimedia programmer, 
                                                    Web developer, Web designer, Software engineer, Application analyst, 
                                                    Database administrator, Forensic computer analyst, IT technical support 
                                                    officer, Software tester, Sound designer, Systems analyst, Embedded Systems 
                                                    Engineer, Platform and Infrastructure Engineer, Software Architecture Engineer 
                                                    , Computer Systems Designer.


                                                </p>
                                            </div>
                                            <div className="pic">
                                                <img src={man} alt="Man Explaining"/>
                                            </div>
                                </div>
                                <div className="carousel-item ">
                                            <div className="text">
                                                <h3>Computer Information Systems</h3>
                                                
                                                <p>
                                                Computer Information Systems is the application of technology 
                                                in managing the needs of businesses, so one will get to put technical 
                                                skills to work in a business setting. Students in this major learn how 
                                                to work with companies' IT systems to solve operations issues.
                                                </p>

                                                <p>
                                                We offer a BSc. Degree in Computer Science (Information) which is 
                                                a blend of Computer Science as well as Management Sciences. Programming 
                                                and Managerial courses are taught such as Economics, Cost Accounting, 
                                                Enterprise Information System, Artificial Intelligence, Networking, 
                                                Operating systems, E-Commerce as well as many other Programming Languages.
                                                </p>

                                                <p>Computer Information Systems careers include but are not limited to:</p>

                                                <p>Computer Systems Analyst, Software Engineer, Web Developer, 
                                                    Database Manager, Information Security Specialist, Network 
                                                    Administrator, Game Designer, Chief Technology Officer, 
                                                    Freelance Technology Consultant.
                                                </p>
                                            </div>
                                            <div className="pic">
                                                <img src={man} alt="Man Explaining"/>
                                            </div>
                                </div>
                                <div className="carousel-item ">
                                            <div className="text">
                                                <h3>Information Computer Technology</h3>
                                                
                                                <p>
                                                The Information Communication Technology (ICT) program strives to educate 
                                                students to assume leadership roles where the application of information 
                                                technology is concerned with the ultimate goal of connecting people, organizations, 
                                                and communities to enhance their ability to succeed. It is similar to Information 
                                                Technology (IT), but focuses primarily on communication technologies.
                                                </p>

                                                <p>
                                                The course focuses on computer and network configurations, 
                                                web and application programming, and database design and maintenance. 
                                                ICT students should have an understanding of computer systems, hardware 
                                                and networks as well as problem solving, analytical skills and the ability 
                                                to grasp large amounts of information and be able to quickly learn and adapt 
                                                to new technologies and advances in the field.
                                                </p>

                                                <p>Careers in information and communication technology fields 
                                                    include a variety of roles and tasks associated with planning, 
                                                    researching, installing and monitoring the performance of IT systems. 
                                                    Careers in ICT include;</p>

                                                <p>Application analyst,Cyber security analyst,Data analyst,Database administrator,
                                                    Information systems manager,IT consultant,IT technical support officer,Information 
                                                    security analyst,Penetration tester,Systems analyst.
                                                </p>
                                            </div>
                                            <div className="pic">
                                                <img src={man} alt="Man Explaining"/>
                                            </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only"></span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only"></span>
                            </a>
                        </div>
                        </div>
                        
                        
                    </section>
                    <section className="others-section">
                    <div className="sec1">
                        <div className="row">
                        <div className="col col-4-lg unfirst">
                            <img src={unlimited} alt="" className='sec1Images'/>
                            <p className="unlimited">Unlimited Access</p>
                            <p>We provides you access to materials</p>
                        </div>
                        
                        <div className="col col-4-lg">
                            <img src={expert} alt="" className='sec1Images'/>
                            <p className="expert">Expert Teachers</p>
                            <p>Learn from industry experts who are passionate about teaching</p>
                        </div>

                        <div className="col col-4-lg">
                            <img src={learn} alt="" className='sec1Images'/>
                            <p className='learn'>Learn Anywhere</p>
                            <p>Switch between your computer, tablet, or mobile device.</p>
                        </div>
                        </div> 
                    </div>

                    </section>
                    <section className="contact-section">
                        <div className="text">
                            <p>Do you have any questions<br /> 
                            you would love to ask us?</p>
                        </div>
                        <button><Link to="/contact">Contact us now!</Link> </button>
                    </section>
                    
                </main>
                    <Footer />
            </div>
        )
}

export default ProgramsPage