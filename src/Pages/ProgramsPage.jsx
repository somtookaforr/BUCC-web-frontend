import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import man from '../Images/man-explaining.png';
import unlimited from '../Images/unlimited-access.svg';
import expert from '../Images/expert-teachers.svg';
import learn from '../Images/learn-anywhere.svg';
import '../CSS/ProgramsPage.css';

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
                                                Computer Science deals with the theory 
                                                and practice of computer hardware and software. 
                                                Students learn the theory that underlies computation 
                                                and how to develop effective, efficient and correct 
                                                software. The program is intensive in Mathematics and 
                                                Computer Science courses.
                                                </p>

                                                <p>
                                                We offer a BSc. Degree in Computer Science and are focused on 
                                                providing fluent understanding in several programming languages 
                                                and as well as offer courses such as General Mathematics, Numerical 
                                                Methods and Analysis , Data structures & algorithms, Artificial Intelligence 
                                                & Data science, Networking & Operating Systems including numerous Programming 
                                                languages to drive the economy forward.
                                                </p>

                                                <p>Computer Science careers include but are not limited to:
                                                Data Scientist, Software Tester, Software Developer, Web 
                                                Developer, Computer System Analysts, Information Security
                                                Analyst, Project Manager, Network Administrator, Database 
                                                Administrator, IT Architect, Computer Programmer, Hardware 
                                                and Systems Engineer, UI/UX Designer.
                                                </p>
                                            </div>
                                            <div class="pic">
                                                <img src={man} alt="Man Explaining"/>
                                            </div>
                                </div>
                                <div className="carousel-item ">
                                            <div className="text">
                                                <h3>Computer Information System</h3>
                                                
                                                <p>
                                                Computer Science deals with the theory 
                                                and practice of computer hardware and software. 
                                                Students learn the theory that underlies computation 
                                                and how to develop effective, efficient and correct 
                                                software. The program is intensive in Mathematics and 
                                                Computer Science courses.
                                                </p>

                                                <p>
                                                We offer a BSc. Degree in Computer Science and are focused on 
                                                providing fluent understanding in several programming languages 
                                                and as well as offer courses such as General Mathematics, Numerical 
                                                Methods and Analysis , Data structures & algorithms, Artificial Intelligence 
                                                & Data science, Networking & Operating Systems including numerous Programming 
                                                languages to drive the economy forward.
                                                </p>

                                                <p>Computer Science careers include but are not limited to:
                                                Data Scientist, Software Tester, Software Developer, Web 
                                                Developer, Computer System Analysts, Information Security
                                                Analyst, Project Manager, Network Administrator, Database 
                                                Administrator, IT Architect, Computer Programmer, Hardware 
                                                and Systems Engineer, UI/UX Designer.
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
                                                Computer Science deals with the theory 
                                                and practice of computer hardware and software. 
                                                Students learn the theory that underlies computation 
                                                and how to develop effective, efficient and correct 
                                                software. The program is intensive in Mathematics and 
                                                Computer Science courses.
                                                </p>

                                                <p>
                                                We offer a BSc. Degree in Computer Science and are focused on 
                                                providing fluent understanding in several programming languages 
                                                and as well as offer courses such as General Mathematics, Numerical 
                                                Methods and Analysis , Data structures & algorithms, Artificial Intelligence 
                                                & Data science, Networking & Operating Systems including numerous Programming 
                                                languages to drive the economy forward.
                                                </p>

                                                <p>Computer Science careers include but are not limited to:
                                                Data Scientist, Software Tester, Software Developer, Web 
                                                Developer, Computer System Analysts, Information Security
                                                Analyst, Project Manager, Network Administrator, Database 
                                                Administrator, IT Architect, Computer Programmer, Hardware 
                                                and Systems Engineer, UI/UX Designer.
                                                </p>
                                            </div>
                                            <div className="pic">
                                                <img src={man} alt="Man Explaining"/>
                                            </div>
                                </div>
                                <div className="carousel-item ">
                                            <div className="text">
                                                <h3>Computer Information Technology</h3>
                                                
                                                <p>
                                                Computer Science deals with the theory 
                                                and practice of computer hardware and software. 
                                                Students learn the theory that underlies computation 
                                                and how to develop effective, efficient and correct 
                                                software. The program is intensive in Mathematics and 
                                                Computer Science courses.
                                                </p>

                                                <p>
                                                We offer a BSc. Degree in Computer Science and are focused on 
                                                providing fluent understanding in several programming languages 
                                                and as well as offer courses such as General Mathematics, Numerical 
                                                Methods and Analysis , Data structures & algorithms, Artificial Intelligence 
                                                & Data science, Networking & Operating Systems including numerous Programming 
                                                languages to drive the economy forward.
                                                </p>

                                                <p>Computer Science careers include but are not limited to:
                                                Data Scientist, Software Tester, Software Developer, Web 
                                                Developer, Computer System Analysts, Information Security
                                                Analyst, Project Manager, Network Administrator, Database 
                                                Administrator, IT Architect, Computer Programmer, Hardware 
                                                and Systems Engineer, UI/UX Designer.
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
                        <div className="unlimited">
                            <img src={unlimited} alt="Unlimited Access"/>
                        </div>
                        <div class="expert">
                            <img src={expert} alt="Expert Teachers"/>
                        </div>
                        <div class="learning">
                            <img src={learn} alt="Learn Everywhere"/>
                        </div>
                    </section>
                    <section className="contact-section">
                        <div className="text">
                            <p>Do you have any questions<br /> 
                            you would love to ask us?</p>
                        </div>
                        <button>Contact us now!</button>
                    </section>
                    
                </main>
                    <Footer />
            </div>
        )
}

export default ProgramsPage