import React, { useState } from 'react';
import AsideMenu from '../AsideMenu/AsideMenu';
import Logo from '../Logo/Logo';
// import { logo } from './assets/images/Logo.svg'

const Navigation = () => {

    const [toggleMenu, setToggleMenu] = useState(false)


    return (   
        <>     
        <nav id="navigation-mobile">
            <div>
                <a href="http://" className="navigation_logo">
                    <Logo/>
                </a>
            </div>
            <div id="navigation_btn-burger" onClick={() => {setToggleMenu(!toggleMenu)}}>
                <span>Menu</span>
                <div id="navigation_btn-container">
                    <span className="navigation_btn-burger_line"></span>
                    <span className="navigation_btn-burger_line"></span>
                    <span className="navigation_btn-burger_line"></span>
                </div>                
            </div>
        </nav>
        <AsideMenu activeAsideMenu={toggleMenu ? 'aside-menu aside-menu_active' : 'aside-menu'}/>              
        </>
    
    );
};

export default Navigation;