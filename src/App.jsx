import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'; 
import Login from './paginas/auth/login';
import Dasboar from './paginas/auth/dasboar';
function App() {
 

  return (

    <Fragment>
      <Router>
        <Routes>
          <Route path='/'element={<Login/>}></Route>
          <Route path='/dasboar'element={<Dasboar/>}></Route>
        </Routes>
      </Router>
    </Fragment>
    
      
      
  );
}

export default App
