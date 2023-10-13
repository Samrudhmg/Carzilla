
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Service from './Pages/Service';

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/Menu' element={<Menu/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
         
        
    </ div>
    </Router>
   
    
  );
}

export default App;
