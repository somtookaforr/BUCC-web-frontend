import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import blessed from '../Images/excos/blessed.jpg'
import esther from '../Images/excos/esther.jpg'
import dada from '../Images/excos/dara.jpg'
import patrick from '../Images/excos/patrick.jpg'
import bernice from '../Images/excos/Bernice.jpg'
import sharon from '../Images/excos/sharon.jpg'
import wetti from '../Images/excos/wetti.jpeg'
import esthersports from '../Images/excos/Esther-sports.jpg'
import david from '../Images/excos/david.jpg'
import yoma from '../Images/excos/yoma.jpeg'
import estherpro from '../Images/excos/esther-pro.jpeg'
import samuel from '../Images/excos/samuel.jpg'
import timi from '../Images/excos/Timi.jpg'
import '../CSS/about.css';

const About = () => {

        // Set the date we're counting down to
    var countDownDate = new Date("July 31, 2022 12:00:00").getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var currentDate = new Date().getTime();

        // Find the distance between currentDate and the count down date
        var distance = countDownDate - currentDate;

        // Time calculations for days, hours, minutes and seconds
        var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="counter"
        document.getElementById("dayss").innerHTML = dayss
        document.getElementById("days").innerHTML = ("0"+days).slice(-2)
        document.getElementById("hours").innerHTML = ("0"+hours).slice(-2)
        document.getElementById("minutes").innerHTML = ("0"+minutes).slice(-2)
        document.getElementById("seconds").innerHTML = ("0"+seconds).slice(-2)
  
    }, 1000);

	return (
		<>
			<Navbar />
			<body className='about'>
                <div className="about">
                    <h1>About Us</h1>
                </div>
        
                <p>The Babcock University Computer Club is a student chapter of the University's Computing and Engineering Sciences Department.
                The mission of this club is to make possible the needs and interests of the computer science and engineering students as well as anybody with an interest in software development.
                It is not necessary for any club member to be a student of the department nor is knowledge of any programming language required.
                <br /><br />
                The club has sponsored events such as exhibitions, programming competitions, hackathons, guest speakers, tech talks, and trips for teams to Silicon Valley.
                If you have a general interest in computing and want to join, feel free to contact the club at the BUCC secretariat and we'll include your name on our mailing list so you can stay informed of upcoming events.</p>

                <h3 className='header'>Our Representatives</h3>

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="container excos">
                                <div className="row">
                                    <div className="col-6 col-md-4">
                                        <img src={blessed} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>Blessed Madukouma</span> <br />
                                        <span>Executive President</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <img src={esther} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>Abiola Esther Adebiyi</span> <br />
                                        <span>Vice President Administrative</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <img src={dada} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>Ezekiel Dada</span> <br />
                                        <span>Vice President Academics</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <img src={estherpro} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>John Esther</span> <br />
                                        <span>Public Relation Officer</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <img src={sharon} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>Sharon Ogboli</span> <br />
                                        <span>General Secretary</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <img src={esthersports} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>Esther Akinlabi</span> <br />
                                        <span>Female Sport Director</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="container excos">
                                <div className="row">
                                    <div className="col-6 col-md-4">
                                        <img src={patrick} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>Patrick Igoh</span> <br />
                                        <span>Male Sport Director</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <img src={wetti} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>Thomas Chiwetalu</span> <br />
                                        <span>Provost</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <img src={samuel} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>Samuel Akujor</span> <br />
                                        <span>Welfare Director</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <img src={bernice} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>Bernice Bathnna</span> <br />
                                        <span>Treasurer</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <img src={yoma} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>David Eyoma</span> <br />
                                        <span>Social Director</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <img src={david} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>David Okiy</span> <br />
                                        <span>Chaplain</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <img src={timi} alt="img" className='excoimg'/><br />
                                        <span className='exconame'>Timilehin Ogunme</span> <br />
                                        <span>Lead Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                </div>

                <div className='counter'>
                    <div className="row">
                        <div className="col-12 col-lg-6 align-self-center">
                        <h2>Our Graduation is coming up in <span id='dayss'></span> days</h2>
                        </div>
                        <div className="col-12 col-lg-6">
                        <div className="container">
                            <div className="row boxes">
                                <div className="col box"><span className='datetime' id='days'></span> <br /> Days</div>
                                <div className="col box"><span className='datetime' id='hours'></span> <br /> Hours</div>
                                <div className="col box"><span className='datetime' id='minutes'></span> <br /> Mins</div>
                                <div className="col box"><span className='datetime' id='seconds'></span> <br /> Secs</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
			</body>
			<Footer />
		</>
	);
};
export default About;