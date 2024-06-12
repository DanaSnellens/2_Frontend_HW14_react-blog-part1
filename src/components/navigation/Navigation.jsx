import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';
import LogoMedium from '../../assets/logo-medium.png';

function Navigation() {
    return (
        <nav>
            <img src={LogoMedium} alt="logo medium"/>

            <ul>
                <li>
                    <NavLink className={({ isActive })=> isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/new-post">Nieuwe post</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/overview-blogs">Alle Posts</NavLink>
                </li>
            </ul>
        </nav>

    );
}

export default Navigation;