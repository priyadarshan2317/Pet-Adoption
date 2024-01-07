import React from 'react';
import Home from './components/Home';
import About from './components/About';                                                                                                                                                                                                                                                                                                      
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
<div className='app'>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/About" component={<About/>} />          
        </Routes>
    </Router>
</div>
</div>
  );
}
export default App;