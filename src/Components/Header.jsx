import { useEffect, useState } from 'react';
import '../Assets/Styles/Header.css'
import logo from '../Assets/Images/logo.svg'
import sprite from '../Assets/Images/sprite.png'
import SecondaryBtn from './SecondaryBtn';
import DropdownMenu from './DropdownMenu';

function Header() {

    // Header Sticky function
    const isSticky = (e) => {
        const header = document.querySelector('.main_header');
        const scrollTop = window.scrollY;
        scrollTop >= 50 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    // Menu hover add class function
    const linkHover = (e) => {
        e.currentTarget.classList.add('active');
        document.body.classList.add('overflow_hidden')
    }
    const removeLinkHover = (e) => {
        e.currentTarget.classList.remove('active');
        document.body.classList.remove('overflow_hidden')
    }    

    // Hamburger menu function
    const [click, setClick] = useState(false);

    // Button text
    const buttonText = ['FREE DOWNLOADS']


    // Dropdown menu array declaration
    const dropdownMenu = [
        'Identity and access management',
        'Unified service management', 
        'Unified endpoint management and security',
        'IT operations management',
        'Security information and event management',
        'Advanced IT analytics',
        'Low-code app development',
        'Cloud solutions for enterprise IT',
        'IT management for MSPs',
    ]

    return(
        <>
            <header>
                <div className="default_container">
                    <div className="header_top">
                        <ul>
                            <li><a href="javascript:;">Contact</a></li>
                            <li><a href="javascript:;">Store</a></li>
                            <li><a href="javascript:;">Partners</a></li>
                            <li><a href="javascript:;">Affiliate</a></li>
                            <li><a href="javascript:;"><span className='sprite_bg1'></span></a></li>
                            <li><a href="javascript:;"><span className='sprite_bg2'></span></a></li>
                        </ul>
                    </div>
                    <div className='main_header flex_row'>
                        <div className='logo_div'>
                            <a href='javascript:;' title='Manage Engine'>
                                <img src={logo} alt='Logo' title='Manage Engine'></img>
                            </a>
                        </div>
                        <div className='menu_section'>
                            <ul>
                                <li onMouseEnter={linkHover} onMouseLeave={removeLinkHover}>
                                    {/* <li> */}
                                    <a href='javascript:;' title='Products'>Products</a>
                                    <DropdownMenu menuLink={dropdownMenu} />
                                </li>
                                <li onMouseEnter={linkHover} onMouseLeave={removeLinkHover}>
                                    <a href='javascript:;' title='Solutions'>Solutions</a>
                                </li>
                                <li onMouseEnter={linkHover} onMouseLeave={removeLinkHover}>
                                    <a href='javascript:;' title='Company'>Company</a>
                                </li>
                                <li onMouseEnter={linkHover} onMouseLeave={removeLinkHover}>
                                    <a href='javascript:;' title='Support'>Support</a>
                                </li>
                                <li onMouseEnter={linkHover} onMouseLeave={removeLinkHover}>
                                    <a href='javascript:;' title='Events'>Events</a>
                                </li>
                            </ul>
                        </div>

                        {/* <a href='javascript:;' title='FREE DOWNLOADS' className='header_btn cmn_btn'>FREE DOWNLOADS</a> */}
                        
                        <div className='header_btn'>
                            <SecondaryBtn btnText={buttonText} />
                        </div>

                        <div className={`hamburger_menu ${click ? "menu_open" : ""}`} onClick={() => setClick(!click)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mobile_menu ${click ? "menu_active" : ""}`}>
                <ul>
                    <li>
                        <a href="javascript:;" title='Products'>Products</a>
                    </li>
                    <li>
                        <a href="javascript:;" title='Solutions'>Solutions</a>
                    </li>
                    <li>
                        <a href="javascript:;" title='Company'>Company</a>
                    </li>
                    <li>
                        <a href="javascript:;" title='Support'>Support</a>
                    </li>
                    <li>
                        <a href="javascript:;" title='Events'>Events</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header