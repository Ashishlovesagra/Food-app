import React from 'react';
import './Style.css';
import logo from '../assets/logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoHeartCircleOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className="header-top">
        <div className="container">
            <div className="row">
                <div className="
                col-lg-12 col-md-12 col-12
                d-flex
                flex-wrap
                justify-content-between
              ">
                <div className="contact-box">
                    <span>
                        <Link to="">
                            <FaPhoneAlt/> +91 9911568866
                        </Link>
                    </span>
                    <span>
                        <Link to="">
                            <FaEnvelopeOpenText/> ashishlovesagra@gmail.com
                        </Link>
                    </span>
                </div>
                <div className="social-box">
                    <span>
                        <Link to="">
                            <FaTwitter/>
                        </Link>
                    </span>
                    <span>
                        <Link to="">
                            <FaFacebookSquare/>
                        </Link>
                    </span>
                    <span>
                        <Link to="">
                            <FaLinkedinIn/>
                        </Link>
                    </span>
                    <span>
                        <Link to="">
                            <FaInstagram/>
                        </Link>
                    </span>
                </div>
              </div>
            </div>
        </div>
    </div>
    <div className="header-bottom margin-top-20">
        <div className="container position-relative">
            <div className="row d-flex align-items-center">
                <div className="col-lg-2 col-md-2 col-sm-2 col-3">
                    <div className="logo">
                        <Link to="">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                    <nav id='mobile-menu' >
                        <ul className="main-menu">
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/about-us">ABOUT US</Link>
                            </li>
                            <li>
                                <Link to="/menu">MENU</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">CONTACT US</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-4 col-md-9 col-8">
                    <div className="customer-area">
                        <span>
                            <Link to="">
                                <IoHeartCircleOutline/>
                            </Link>
                        </span>
                        <span>
                            <Link to="">
                                <FaRegCircleUser/>
                            </Link>
                        </span>
                        <span>
                            <Link to="">
                                <FaBasketShopping/>
                            </Link>
                        </span>
                        <Link to="/login" className='btn'>Login</Link>
                    </div>
                </div>
            </div>
            {/* Mobile view */}
            {/* <div className="mobile-menu mean-container">
                <div className="mean-bar">
                    <Link to="" className="meanmenu-reveal">
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
                    <nav className="mean-nav">
                        <ul className="main-menu">
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/about-us">ABOUT US</Link>
                            </li>
                            <li>
                                <Link to="/menu">MENU</Link>
                            </li>
                            <li className='mean-last'>
                                <Link to="/contact-us">CONTACT US</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default Navbar;