import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeadHeading, HeadHeading2 } from '../Ui/Heading/Heading';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import ThemeContext from '../../context/theme.context';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LanguageContext from '../../context/language.context';

function Header({ countCart, fav }) {
    const theme = useContext(ThemeContext);
    console.log(theme);

    const language = useContext(LanguageContext);
    console.log(language);

    const c1 = useSelector(state => state.counter)
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const cart = useSelector(state => state.cart)
    console.log(cart);

    const cartCount = cart.cart.reduce((acc, v) => acc + v.qty, 0)
    console.log(cartCount);

    // let qty = 0;

    // {
    //     cart.cart.map((v) => {
    //         qty = qty + v.qty
    //     })
    // }
    // console.log(cart.cart);

    return (
        <div className={`main-header ${theme.theme}`}>
            <div id="topbar" className={`d-flex align-items-center fixed-top ${theme.theme}`}>
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>

                    
                    <IconButton sx={{ color: theme.theme === 'light' ? 'gray' : 'white' }}>
                    {
                        theme.theme === 'light' ?
                            <DarkModeIcon onClick={() => theme.toggleTheme(theme.theme)}>Change Theme</DarkModeIcon> :
                            <LightModeIcon onClick={() => theme.toggleTheme(theme.theme)}>Change Theme</LightModeIcon>
                    }
                    </IconButton>

                    <Link to="/cart">
                        <IconButton aria-label="cart">
                            {/* <StyledBadge badgeContent={countCart} color="secondary"> */}
                            {/* <StyledBadge badgeContent={c1.count} color="secondary"> */}
                            <StyledBadge badgeContent={cartCount} color="secondary">
                                <ShoppingCartIcon sx={{ color: theme.theme === 'light' ? 'gray' : 'white' }} />
                            </StyledBadge>
                        </IconButton>
                    </Link>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={fav.length} color="secondary">
                            <FavoriteIcon sx={{ color: theme.theme === 'light' ? 'gray' : 'white' }} />
                        </StyledBadge>
                    </IconButton>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>

            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <HeadHeading className="logo me-auto">City</HeadHeading><br />
                            <HeadHeading2 className="logo-tiny-text me-auto">Multispeciality Hospital</HeadHeading2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink className="nav-link scrollto" to="/">Home</NavLink></li>
                            <li><NavLink
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                                to="/department">
                                Departments
                            </NavLink>
                            </li>
                            <li><NavLink className="nav-link scrollto" to="/counter">Counter</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/docters">Doctors</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/medicines">Medicines</NavLink></li>
                            <li><NavLink className="nav-link scrollto " to="/About">About</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/Contact">Contact</NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <Link to="/Appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                        Appointment</Link>
                    <NavLink to="/Auth" className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">Login/ Signup</span>
                    </NavLink>

                    <select onChange={(event) => language.toggleLanguage(event.target.value)}>
                        <option value='0'>--Select--</option>
                        <option value='english'>English</option>
                        <option value='hindi'>Hindi</option>
                        <option value='gujarati'>Gujarati</option>
                    </select>

                </div>
            </header>
        </div>

    );
}

export default Header;