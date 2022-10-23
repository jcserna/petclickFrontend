import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/login/login.js';
import Home from '../pages/interfaces/Home.js';
import Register from '../pages/interfaces/Register';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/calendar' element={<>Hola</>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default Router;
