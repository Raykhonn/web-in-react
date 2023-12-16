import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Navbar';
import Header from './Header';
import Skills from "./Skills";
import About from "./About";
import Pricing from './Pricing';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>
		<Header />
		<App />
		<Skills />
		<About />
		<Pricing />
		<Footer />
	</>
);
