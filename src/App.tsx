import React from 'react';
import { BrowserRouter,Routes,Route,NavLink, Navigate } from 'react-router-dom'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path='/' element= {<Navigate to='/auth' replace />}        />

     <Route path='/auth' element= {<Auth/>}/>

     <Route path='/dashboard' element= {<Dashboard/>}        />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
