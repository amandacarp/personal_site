import * as React from 'react';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';


const Home = (props: HomeProps) => {

	const [width, setWidth] = React.useState<number>(window.innerWidth);
	const breakpoint = 1030;

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);


    return (
        <>
        
        <div className="home">
        { width < breakpoint ? <MobileNavbar /> : <Navbar />}

                    <div className="row justify-content-center">
                        <div className="col-auto text-white text-center content" >
                            <div className="">Hello, my name is <span className="spanText">Amanda Carpentieri </span> </div>

                                <div>I am a Full-Stack Software Developer</div>
                        </div>
                   </div>
                  
          
        </div>
        </>
    );
};



interface HomeProps { }

export default Home;
