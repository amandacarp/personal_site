import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props: NavbarProps) => {


    return (
        <>

            <nav className="navbar">
                <div className="d-flex justify-content-start logoSpan">
                    <Link className="logoText" to='/'>Welcome to My Portfolio</Link>
                    
                </div>

                <div className="d-flex justify-content-end align-items-center">
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
