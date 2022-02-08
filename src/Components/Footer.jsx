import React from 'react';
import logo from '../Images/bucc-logo2.svg'
import dribble from '../Images/dribble.png'
import twitter from '../Images/twitter.png'
import youtube from '../Images/youtube.png'
import facebook from '../Images/facebook.png'

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
                    <img src={facebook} alt="facebook" className='sIcons'/>
                    <img src={twitter} alt="twitter" className='sIcons'/>
                    <img src={youtube} alt="youtube" className='sIcons'/>
                    <img src={dribble} alt="dribble" className='sIcons'/>
                </div>
                
              </div>
              <div className="col-6 col-md-3">
                Quicklinks <br /><br />

                Home <br />
                Programs <br />
                About Us <br />
                Contact Us <br />
                Become A Contributor
              </div>
              <div className="col-6 col-md-3">
                Contact Us <br /><br />

                <a href="tel:+2340000000000">+234 000 0000 000</a> <br />
                <a href="tel:+2340000000000">+234 000 0000 000</a> <br />
                <a href="mailto:Info@bucc.club">Info@bucc.club</a> 

              </div>
              <div className="col-6 col-md-3">
                <img src={logo} alt="bucc-logo" /> <br />
                Terms and Conditions <br />
                Faq
              </div>
          </div>
      </div>
      </div>
      <div className="lowFooter">
        <p><small>
            <span className='lfLeft'>All Right Reserved | BUCC 2022</span>
            <span className='rfRight'>
                <span className="text-light">Privacy Policy</span>
                <span className="text-light">Site Credit</span>
            </span>
            
        </small></p>
      </div>
  </footer>;
};

export default Footer;
