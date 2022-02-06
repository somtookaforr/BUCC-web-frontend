import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import contactus from '../Images/contactus.png';
import '../CSS/contact.css';

const Contact = () => {
	return (
		<>
			<Navbar />
			<body>
				<div className='contact_head'>
					<img alt="contact_us" className="contact_us_image" src={contactus} />
					<p className="contact_text">Contact Us</p>
				</div>

				<div className='contact_div'>
					<form className='contactForm'>
						<div className='contact_paragraph'>
							<p className='p1'>Let's Talk!</p><br/>
							<p className='form-text text-muted'>We do normally get back within 48hrs. Please leave a message.</p>
						</div>

						<input type="text" name="fname" placeholder='First Name' />
						<input type="text" name='country' placeholder="Country/Region" />
						<input type="text" name="department" placeholder="Department" />
						<input type="text" name="level" placeholder="Level" />
						<textarea placeholder='Your message'></textarea>

						<button className='btn btn-warning contact_btn'>Send Message</button>
					</form>

				</div>
			</body>
			<Footer />
		</>
	);
};
export default Contact;