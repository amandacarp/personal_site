import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const MobileNavbar = (props: MobileNavbarProps) => {

    const history = useHistory()
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        const unlisten = history.listen(() => setShow(false));
        return () => unlisten();
    }, [history])


    return (
        <>

            <nav className="MobileNavbar">


                <div className="d-flex justify-content-start">

                    <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>

                    {show && (
                            <>
                            <div className="d-flex flex-column">

                                <Link className="navText mt-2" to='/projects'>Projects</Link>
                           
                                <Link className="navText mt-2" to='/about'>About Me</Link>
                           
                                <Link className="navText mt-2" to='/contact'>Contact Me</Link>

                                </div> 

                            </>

                    )}

                </div>

                <div className="d-flex justify-content-end">
                    <Link to='/'>
                        <img className="logoIMG" src="/images/logo.gif"  alt="logo"/>
                    </Link>
                    
                </div>
            </nav>


        </>
    );
};

interface MobileNavbarProps { }

export default MobileNavbar;
