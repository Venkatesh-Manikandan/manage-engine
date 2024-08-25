import { useEffect, useState } from 'react';
import '../Assets/Styles/Header.css'
import logo from '../Assets/Images/logo.svg'
import sprite from '../Assets/Images/sprite.png'

function Header() {

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

    const [isHover, setIsHover] = useState(false);
    // const linkHover = () => setIsHover(!isHover)
    const linkHover = (e) => {
        e.target.classList.add('active');
        // e.target.nextChil.classList.add('submenu_toggle');
    }
    const removeLinkHover = (e) => {
        e.target.classList.remove('active');
    }
    // const linkHover = () => {
    //     setIsHover(false);
    //     console.log(isHover);
    //     const hoveredLink = document.querySelector('.menu_dropdown');
    //     isHover != false ? hoveredLink.classList.add('menu_open') : hoveredLink.classList.remove('menu_open');
    // }
    

    // const linkHover = (e) => {
    //     setIsHover(prevState => ({isHover: !prevState}));
    //     const hoveredLink = document.querySelector('.menu_dropdown');
        
    //     isHover ? hoveredLink.classList.add('dropdown_open') : hoveredLink.classList.remove('dropdown_open')
    //     console.log(isHover);
    //     const openMenu = true;
    //     openMenu === true ? hoveredLink.classList.add('dropdown_open') : hoveredLink.classList.remove('dropdown_open');
    // }
    
    // const menuClicked = (event) => {
    //     const hamburgerMenu = document.querySelector('.hamburger_menu');
    //     const addClass = window;
    //     addClass ? hamburgerMenu.classList.add('menu_open') : hamburgerMenu.classList.remove('menu_open');
    // }
    // useEffect(() => {
    //     window.addEventListener('menu_open', menuClicked);
    //     return()=> {
    //         window.removeEventListener('menu_open', menuClicked);
    //     }
    // })

    const [click, setClick] = useState(false);

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
                                    <a href='javascript:;' title='Products'>Products</a>
                                    <ul className='sub_menu'>
                                        <li>
                                            <a href="javascript:;" title=''></a>
                                        </li>
                                    </ul>
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

                        <a href='javascript:;' title='FREE DOWNLOADS' className='header_btn cmn_btn'>FREE DOWNLOADS</a>
                        
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