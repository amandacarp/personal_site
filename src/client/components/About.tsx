import * as React from 'react';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';


const About = (props: AboutProps) => {

    const [width, setWidth] = React.useState<number>(window.innerWidth);
	const breakpoint = 1030;

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);



    return (
        <>
            <div className="about container-fluid">
            { width < breakpoint ? <MobileNavbar /> : <Navbar />}
            <div className="container">
                <div className="row mt-5 justify-content-center">
            <div className="col-md-6">
            <img className='aboutIMG' src="/images/self.jpg" alt="self"/>
            </div>
            <div className="col-md-6">
             <div className="selfText">
                Hello! My name is Amanda. I am a full-stack software developer living in beautiful Los Angeles, California.
            
            <div className="mt-3">
                        I am an avid learner who never backs down from a challenge.
            </div>

            <div className="mt-3">
                        I am motivated, determined and hard-working.
            </div>
            <div className="mt-3">
                       In my free time, I enjoy volunteering at animal shelters, pet-sitting and spending time in nature. You can usually find me on the beach or on a hike. 
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>        
        </>
    );
};



interface AboutProps { }

export default About;
