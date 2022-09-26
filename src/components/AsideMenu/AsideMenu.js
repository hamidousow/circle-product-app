import React from 'react';
import Logo from '../Logo/Logo';

const AsideMenu = ({activeAsideMenu}) => {
    return (
        <aside className={activeAsideMenu}> 
            <div className="aside-menu_logo">
                <Logo/>
            </div>           
            <ul className="aside-menu_menu">
                <li>
                    <a href="/" className="aside-menu_link">Dashboard</a>
                </li>
                <li>
                    <a href="/" className="aside-menu_link">Products management</a>
                </li>
                <li >
                    <a href="/" className="aside-menu_link">Employees management</a>
                </li>
                <span className="aside-menu_separator"></span>
                <li >
                    <a href="/" className="aside-menu_link">Logout</a>
                </li>
            </ul>
        </aside>
    );
};

export default AsideMenu;