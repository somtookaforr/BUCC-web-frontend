import React from 'react';
import logo from '../Images/bucc-logo2.svg'
import twitter from '../Images/twitter.png'
import youtube from '../Images/youtube.png'
import facebook from '../Images/facebook.png'
import instagram from '../Images/instagram.png'
import linkedin from '../Images/linkedin.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer>
  <div className='topFooter'>
      <div className="container">
          <div className="row">
              <div className="col-6 col-md-3">
                  <br /><br />
                The Babcock University Computer Club is a student chapter of the University's Computing and Engineering Sciences Department.

                <br /> <br />
                <div className="socialIcons pb-5">
                    <a href="https://twitter.com/bu_computerclub"><img src={twitter} alt="twitter" className='sIcons'/></a>
                    <a href="https://www.facebook.com/Babcock-University-Computer-Club-135064969872124/"><img src={facebook} alt="facebook" className='sIcons'/></a>
                    <a href="https://www.youtube.com/channel/UCwmM4cQ4_acxSYfMm8BIn6w"><img src={youtube} alt="youtube" className='sIcons'/></a>   
                    <a href="https://instagram.com/bu_computerclub?igshid=YmMyMTA2M2Y="><img src={instagram} alt="instagram" className='sIcons extIcon'/></a>
                    <a href="https://ng.linkedin.com/company/bucomputerclub"><img src={linkedin} alt="linkedin" className='sIcons extIcon'/></a>
                </div>
                
              </div>
              <div className="col-6 col-md-3">
                Quicklinks <br /><br />
              <div className="quicklinks">
                <Link to="/" className="nav-link" aria-current="page"> Home </Link>
                <Link to="/programs" className="nav-link" aria-current="page"> Programs </Link>
                <Link to="/about" className="nav-link" aria-current="page"> About Us </Link>
                <Link to="/contact" className="nav-link" aria-current="page"> Contact Us </Link>
                <Link to="/contact" className="nav-link" aria-current="page"> Become a Contributor </Link>
              </div>
              </div>
              <div className="col-6 col-md-3">
                Contact Us <br /><br />

                <a href="tel:+2348163513389">+234 816 351 3389 -Sponsor</a><br />
                <a href="tel:+2347038022071">+234 703 802 2071 -Dean</a><br />
                <a href="tel:+2349030609267">+234 903 060 9267</a> -President<br />
                <a href="Hello@bucomputer.club">Hello@bucomputer.club</a> 

              </div>
              <div className="col-6 col-md-3">
                <img src={logo} alt="bucc-logo" /> <br />
              </div>
          </div>
      </div>
      </div>
      <div className="lowFooter">
        <p><small>
            <span className='lfLeft'>All Right Reserved | BUCC 2022</span>
            <span className='rfRight'>
                <span className="text-light">Site Credit : BUCC Dev Team</span>
            </span>
            
        </small></p>
      </div>
  </footer>;
};

export default Footer;
