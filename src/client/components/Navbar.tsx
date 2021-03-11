import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props: NavbarProps) => {


    return (
        <>

            <nav className="navbar">
                <div className="d-flex justify-content-start">
                    <Link to='/'>
                        <img className="logoIMG" src="/images/logo.gif" alt="logo"/>
                    </Link>
                    
                </div>

                <div className="d-flex justify-content-end">
                    <ul className="nav">

                        <li className="nav-item mx-4">
                            <Link className="navText" to='/projects'>Projects</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="navText" to='/about'>About Me</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="navText" to='/contact'>Contact Me</Link>
                        </li>

                    </ul>
                </div>
            </nav>


        </>
    );
};

interface NavbarProps { }

export default Navbar;
