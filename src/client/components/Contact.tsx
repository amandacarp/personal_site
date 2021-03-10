import * as React from 'react';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

const Contact = (props: ContactProps) => {

    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const breakpoint = 1030;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);



    return (
        <>
            <div className="contact container-fluid">
                {width < breakpoint ? <MobileNavbar /> : <Navbar />}
                <div className="row d-flex justify-content-center contactDiv">
                    <div className="col-auto">
                        <h1 className="spanText">Let's Chat! </h1>
                        <p className="contactP mt-4">If you'd like to work together, contact me at <a className="spanText2" href="mailto:carpentieri.a@gmail.com" rel="noreferrer" target="_blank"> carpentieri.a@gmail.com </a>  </p>
                       <p className="contactP2 mt-4"> or on the social media below...</p>
                        </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                        <div className="col-auto">
                        <a href="https://www.linkedin.com/in/amanda-carpentieri/" rel="noreferrer" target="_blank">  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin mr-5 workIcons" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="11" x2="8" y2="16" />
                            <line x1="8" y1="8" x2="8" y2="8.01" />
                            <line x1="12" y1="16" x2="12" y2="11" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg></a>

                        <a href="mailto:carpentieri.a@gmail.com" rel="noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail m-5 workIcons" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                        </a>


                        <a href="https://github.com/amandacarp" rel="noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github m-5 workIcons" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg></a>
                        </div>
                        </div>
                    </div>
        </>
    );
};



interface ContactProps { }

export default Contact;
