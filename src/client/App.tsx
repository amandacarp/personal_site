import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';


const App = (props: AppProps) => {



	return (
		<Router>
			
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>

							<Route exact path="/projects">
								<Projects />
							</Route>

							<Route exact path="/about">
								<About />
							</Route>

							<Route exact path="/contact">
								<Contact />
							</Route>
						</Switch>
		</Router>

	);
};

console.log('%cLike what you see?....', 'color: black; background: white; border: 2px solid pink; font-size: large; font-weight: bold')
console.log('%cI am looking to get hired! Contact me at carpentieri.a@gmail.com', 'color: black; background: white; border: 2px solid pink; font-size: large; font-weight: bold')


interface AppProps { }

export default App;
