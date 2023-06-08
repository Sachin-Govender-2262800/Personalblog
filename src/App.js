import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Routes } from 'react-router-dom';




import Home from "./Components/HomeFolder/Home";
import Settings from "./Components/HomeFolder/Pages/settings/Settings";
import Single from "./Components/HomeFolder/Pages/single/Single";
import Write from "./Components/HomeFolder/Pages/write/Write";
import About from "./Components/HomeFolder/Pages/about/About";
import Contact from "./Components/HomeFolder/Pages/contact/Contact";
import TopBar from "./Components/topbar/TopBar";


import Postcontent1 from './Components/postcontent/Postcontent1';
import Postcontent2 from './Components/postcontent/Postcontent2';
import Postcontent3 from './Components/postcontent/Postcontent3';
import Postcontent4 from './Components/postcontent/Postcontent4';
import Postcontent5 from './Components/postcontent/Postcontent5';
import Postcontent6 from './Components/postcontent/Postcontent6';




function App() {
 
  return (
  
    <div className="App">
     
     <Router>
      <TopBar/>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/Write' element={<Write/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />

      <Route path ='/Postcontent1' element ={<Postcontent1/>} />
      <Route path ='/Postcontent2' element ={<Postcontent2/>} />
      <Route path ='/Postcontent3' element ={<Postcontent3/>} />
      <Route path ='/Postcontent4' element ={<Postcontent4/>} />
      <Route path ='/Postcontent5' element ={<Postcontent5/>} />
      <Route path ='/Postcontent6' element ={<Postcontent6/>} />

      <Route path='/post/:postID' element={<Single/>} />
      
    
      </Routes>
      </Router>

    </div>
  );
}

export default App;
