import React from 'react';
import header from '../Images/index-header.png'

const Carousel = () => {
  return <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                            {/* <img src={header} alt="header" className='carousel-img' /> */}
                            {/* <div className="carousel-caption d-none d-md-block"> */}
                            <h1>Babcock University Computer Club</h1>
                            <button className="carouselBtn btn btn-transparent border-light px-5">Get Started</button>
                            
                    </div>
                    <div className="carousel-item">
                            {/* <img src={header} alt="header" className='carousel-img' /> */}
                            {/* <div className="carousel-caption d-none d-md-block"> */}
                            <h1>Babcock University Computer Club</h1>
                            <button className="carouselBtn btn btn-transparent border-light px-5">Get Started</button>
                            
                    </div>
                    <div className="carousel-item">
                            {/* <img src={header} alt="header" className='carousel-img' /> */}
                            {/* <div className="carousel-caption d-none d-md-block"> */}
                            <h1>Babcock University Computer Club</h1>
                            <button className="carouselBtn btn btn-transparent border-light px-5">Get Started</button>
                            {/* </div> */}
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

  </div>;
};

export default Carousel;
