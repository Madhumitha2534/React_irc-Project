import React from "react";

import '@fortawesome/fontawesome-free/css/all.css';  // Import Font Awesome CSS
import './Footer.css';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                        
                            <li><a href="#">our services</a></li>
                            <li><a href="#">(we provide)</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div> */}
                    { <div className="footer-col">
                        <h4>get help</h4>
                        {/* { <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">(Frequently asked question)</a></li>
                            <li><a href="#">return</a></li>
                            
                       
                        </ul> } */}
                        <h4>☎️CONTACT US: +91 9894790034</h4>
                      <h4>📧EMAIL ID: giftooshop@gmail.com</h4>
                    </div> }
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/_madhumitha_pachaiyappan__?igshid=MzNlNGNkZWQ4Mg=="><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/madhumitha-pachaiyappan-537853258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                    <h4>"Turning ordinary moment with the perfect gift" Wrap up happiness, tie with a bow"</h4>
                    </div>
                    <div className="footer-col">
                    <h4>"Unwrap Moments, not just a Present"</h4>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;