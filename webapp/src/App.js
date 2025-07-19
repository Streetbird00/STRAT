import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Carousel from './Carousel';
import TopProperties from './TopProperties';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
 import Signup  from  "./Signup"
import About from './About';
import Booking from './Booking';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/>        
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>   
        <Route path="/booking" element={<Booking/>}/> 
        <Route path="/properties" element={<TopProperties/>}/> 
       </Routes>
    </BrowserRouter>
  );
}

export default App;