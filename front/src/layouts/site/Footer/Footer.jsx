import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer__top">
            <div className="container">
                <div className="row">
                    <div className="col-3 footer-col">
                        <h2>Tasty</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul className='footer-col-ul'>
                            <li><Link to='#'><i class="fa-brands fa-twitter"></i></Link></li>
                            <li><Link to='#'><i class="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link to='#'><i class="fa-brands fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                    <div className="col-3 footer-col">
                        <h2>Opening Hours</h2>
                        <ul>
                            <li><Link to='#'>Monday: <span>08: - 22:00</span></Link></li>
                            <li><Link to='#'>Tuesday: <span>08: - 22:00</span></Link></li>
                            <li><Link to='#'>Wednesday: <span>08: - 22:00</span></Link></li>
                            <li><Link to='#'>Thursday: <span>08: - 22:00</span></Link></li>
                            <li><Link to='#'>Friday: <span>08: - 22:00</span></Link></li>
                            <li><Link to='#'>Saturday: <span>08: - 22:00</span></Link></li>
                            <li><Link to='#'>Sunday: <span>08: - 22:00</span></Link></li>
                        </ul>
                    </div>
                    <div className="col-3 footer-col">
                        <h2>Contact Information</h2>
                        <ul>
                            <li><Link to='#'>198 West 21th Street, Suite 721 New York NY 10016</Link></li>
                            <li><Link to='#'>+ 1235 2355 98</Link></li>
                            <li><Link to='#'>info@yoursite.com</Link></li>
                            <li><Link to='#'>info@yoursite.com</Link></li>
                        </ul>
                    </div>
                    <div className="col-3 footer-col">
                        <h2>Newsletter</h2>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                        <div className="subscribe">
                            <input type="text" placeholder='Subscribe' />
                            <i class="fa-solid fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="footer__bottom">
                <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by Colorlib</p>
            </div>
        </footer>
    )
}

export default Footer
