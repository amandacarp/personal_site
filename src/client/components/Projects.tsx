import * as React from 'react';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';
import { SiJavascript, SiReact, SiMysql, SiTypescript, SiBootstrap } from 'react-icons/si';
import { DiNpm } from 'react-icons/di';
import { FaStripe } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import { BsImage } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReactTooltip from 'react-tooltip';




const Projects = (props: ProjectsProps) => {

    const [width, setWidth] = useState<number>(window.innerWidth);
    const breakpoint = 1030;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const history = useHistory()
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        const unlisten = history.listen(() => setShow(false));
        return () => unlisten();
    }, [history])

    const showImages = () => {
        Swal.mixin({
            showCloseButton: true,
            confirmButtonText: 'Next &rarr;',
            progressSteps: ['1', '2', '3']

        }).queue([
            {
                imageUrl: 'images/homeblog.png'
            },
            {
                imageUrl: 'images/singleblog.png'
            },
            {
                imageUrl: 'images/register.png'
            }
        ])
        
    }

    const showChirpImages = () => {
        Swal.mixin({
            showCloseButton: true,
            confirmButtonText: 'Next &rarr;',
            progressSteps: ['1', '2', '3'] 
        }).queue([
            {
                imageUrl: 'images/chirper1.png'
            },
            {
                imageUrl: 'images/chirper2.png'
            },
            {
                imageUrl: 'images/chirper3.png'
            }
        ])
    }




    return (
        <>
        <ReactTooltip />

            <div className="projects container-fluid">
                {width < breakpoint ? <MobileNavbar /> : <Navbar />}

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h1 className="mt-5 text-center">My Current Work</h1>
                        <div className="mt-5 card cardBody">
                            <div className="card-header work ml-2">
                                Quiet Time Blogs
                        </div>
                            <div className="body mt-4 ml-2">
                                <div className="card-text">- Individual creator and engineer of this full-stack application.</div>
                                <div className="card-text">- Users have the capability to register a personal blog account using authentication with persistent login both using PassportJS.</div>
                                <div className="card-text"> - Users send CRUD requests to maintain their personal blogs.</div>
                                <div className="card-text"> - Frontend is created with React and HTML, styled with CSS and Bootstrap.</div>
                                <div className="card-text">- Stripe and Mailgun 3rd Party API Service integrated.</div>
                                <div className="card-text"> - The RESTful backend is created with ExpressJS, MySQL database, including stored procedures.</div>
                                <div className="card-text"> - Deployed using Heroku.</div>
                                <div className="card-footer work mt-4">Technology Used:
                                <div className="techIcon">
                                        <span className='mr-4'><SiJavascript /></span>
                                        <span className='mr-4'><SiTypescript /></span>
                                        <span className='mr-4'> <DiNpm /></span>
                                        <span className='mr-4'> <SiReact /></span>
                                        <span className='mr-4'><SiMysql /></span>
                                        <span className='mr-4'><FaStripe /></span>
                                        <span className='mr-4'><SiBootstrap /></span>
                                </div>
                               </div>
                               <div className="card-footer work">
                               <div className="techIcon  mt-2">
                               <a data-tip="Source Code" rel="noreferrer" target="_blank" href="https://github.com/amandacarp/BlogApp.git" className='workIcon'> <FiGithub /></a>
                               <span className="workIcon"> || </span>
                               <a data-tip="View Site" rel="noreferrer" target="_blank" href="https://quiettimeblogs.herokuapp.com/" className='workIcon'><CgWebsite /></a>
                               <span className="workIcon"> || </span>
                                <span data-tip="Screenshots" className="workIcon" onClick={showImages}><BsImage /></span>
                               </div>

                               </div>
                               
                            </div>
                        </div>

                        <div className="mt-5 card cardBody">
                            <div className="card-header work ml-2">
                                Chirper
                        </div>
                            <div className="body mt-4 ml-2">
                                <div className="card-text">- This application acts similarly to Twitter where users can read, create, edit, and delete chirps (tweets).</div>
                                <div className="card-text">- Creator and engineer of this full-stack application.</div>
                                <div className="card-text"> - Users have the capability to register a personal blog account using authentication with persistent login both using PassportJS.</div>
                                <div className="card-text"> - Users send CRUD requests to maintain their personal chirps.</div>
                                <div className="card-text">- Frontend is created with React and HTML, styled with CSS and Bootstrap.</div>
                                <div className="card-text"> - The RESTful backend is created with ExpressJS, MySQL database.</div>
                                <div className="card-text"> - Deployed using Heroku.</div>
                                <div className="card-footer work mt-4">Technology Used:
                                <div className="techIcon">
                                        <span className='mr-4'><SiJavascript /></span>
                                        <span className='mr-4'><SiTypescript /></span>
                                        <span className='mr-4'> <DiNpm /></span>
                                        <span className='mr-4'> <SiReact /></span>
                                        <span className='mr-4'><SiMysql /></span>
                                </div>
                               </div>
                               <div className="card-footer work">
                               <div className="techIcon  mt-2">
                               <a data-tip="Source Code" rel="noreferrer" target="_blank" href="https://github.com/amandacarp/TS-Chirper.git" className='workIcon'> <FiGithub /></a>
                               <span className="workIcon"> || </span>
                               <a data-tip="View Site" rel="noreferrer" target="_blank" href="https://chirper-web.herokuapp.com/" className='workIcon'><CgWebsite /></a>
                               <span className="workIcon"> || </span>
                                <span data-tip="Screenshots" className="workIcon" onClick={showChirpImages}><BsImage /></span>
                               </div>

                               </div>
                               



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



interface ProjectsProps { }

export default Projects;