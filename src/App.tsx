import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Confirm from './pages/auth/Confirm';
import NewPassword from './pages/auth/NewPassword';
import ForgotPassword from './pages/auth/ForgotPassword';
import AuthLayout from './layout/AuthLayout';
import PublicLayout from './layout/PublicLayout';
import AboutUs from './pages/AboutUs';
import { AuthProvider } from './context/AuthProvider';
import Home from './pages/Home';
import Store from './pages/Store';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>
          {/* Rutas solo para autenticacion de usuarios */}
          <Route element={<AuthLayout/>}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/create-account" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/forgot-password/:token" element={<NewPassword />} />
            <Route path="/auth/confirm-account/:id" element={<Confirm />} />
          </Route>

          {/* Rutas publicas / store / about us / ... */}
          <Route element={<PublicLayout/>}>
            <Route index element={<Home/>} />
            <Route path='/store' element={<Store/>} />
            <Route path='/about-us' element={<AboutUs/>} />
          </Route>
            
        </Routes>
      </AuthProvider>
    </BrowserRouter>


  )
}

export default App
