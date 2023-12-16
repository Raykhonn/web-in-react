import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Navbar';
import Header from './Header';
import Skills from "./Skills";
import About from "./About";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>
		<Header />
		<App />
		<Skills />
		<About />
	</>
);
