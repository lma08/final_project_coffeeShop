import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import About from './AboutPage/About';
import Contacts from './ContactsPage/Contacts';

function App() {
  return(
    <div>
    <Router>
      <nav> 
        <h1 className='logo'>The Coffee Lab</h1>
        <Link to='/' className='link'>Home</Link>
        <Link to='About' className='link'>About Us</Link>
        <Link to='Contacts' className='link'>Contact Us</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contacts' element={<Contacts/>}/>
      </Routes>
    </Router>

    </div>
  )
}

export default App;
