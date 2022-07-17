
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";


 import 'bootstrap/dist/css/bootstrap.min.css';
 import './index.css';

import Home from './Pages/Home.jsx';

import Errorpage from './Pages/Errorpage';
import Drama_Episode from './Pages/Drama_Episodes.jsx'
import ProgrammerShedule from './Pages/Programmer-Shedule'
import Contactus from './Pages/Contactus'

import 'bootstrap/dist/js/bootstrap'



function App() {
  return (
<Router>
      <Routes>
    
        <Route path="*" caseSensitive={false} element={<Errorpage />} />
        <Route path="/dramaEpisodes" caseSensitive={false} element={<Drama_Episode />} />
        <Route path="/programmerShedule" caseSensitive={false} element={<ProgrammerShedule />} />
        <Route path="/Contactus" caseSensitive={false} element={<Contactus />} />
        <Route path="/" caseSensitive={false} element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
