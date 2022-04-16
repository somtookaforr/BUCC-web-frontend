import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import contactus from '../Images/contactus.png';
import '../CSS/contact.css';

const Contact = () => {
	return (
		<>
			<Navbar />
			<body className='contact'>
				<div className='contact_head'>
					<img alt="contact_us" className="contact_us_image" src={contactus} />
					<h1 className="contact_text">Contact Us</h1>
				</div>

				<div className='contact_div'>
					<form className='contactForm' method='post' action='mailto:hello@bucomputer.club'>
						<div className='contact_paragraph'>
							<p className='p1'>Let's Talk!</p><br/>
							<p className='form-text text-muted'>We do normally get back within 48hrs. Please leave a message.</p>
						</div>

						<input type="text" name="fname" placeholder='Full Name' className='form-control' />
						<input type="text" name='country' placeholder="Country/Region" className='form-control'/>
						<input type="text" name="department" placeholder="Department" className='form-control'/>
						<input type="number" name="level" placeholder="Level" className='form-control'/>
						<textarea placeholder='Your message' className='form-control'></textarea>

						<button className='btn btn-warning contact_btn'>Send Message</button>
					</form>

				</div>
			</body>
			<Footer />
		</>
	);
};
export default Contact;