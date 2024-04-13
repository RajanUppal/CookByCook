import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Shared/Navbar'
import Home from './pages/Home'
import Footer from './Shared/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute'
import VerifyOtp from './pages/VerifyOtp'
import AddChef from './pages/admin/AddChef'
import Chefs from './pages/Chefs'
import ChefPage from './pages/ChefPage'
import Profile from './pages/Profile'
import OneTime from './pages/OneTime'
import ForMonth from './pages/ForMonth'
import ForEvent from './pages/ForEvent'
import Pay_OneTime from './pages/Pay_OneTime'
import Pay_ForMonth from './pages/Pay_ForMonth'
import Pay_ForEvent from './pages/Pay_ForEvent'
import Delicacies from './pages/Delicacies'
import AboutUs from './pages/AboutUs'
import Member from './pages/Member'
import ContactMessage from './pages/ContactMessage'
import MyBooking from './pages/MyBooking'
import LogoLoader from './component/LogoLoader'
import Success from './pages/Success'
import Failure from './pages/Failure'

function App() {
  const [count, setCount] = useState(0)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <div>
      {loading ? (
        <LogoLoader />
      ) : (
        // Your main content goes here
        <div>
          <Navbar/>

              <Routes>
                  <Route path='/'               element={<ProtectedRoute> <Home /> </ProtectedRoute>}  />
                  <Route path='/login'          element={<Login />}  />
                  <Route path='/register'       element={<Register />}  />
                  <Route path='/verifyOtp'      element={<ProtectedRoute> <VerifyOtp /> </ProtectedRoute>} />
                  <Route path='/addchef'        element={ <ProtectedRoute>     <AddChef />     </ProtectedRoute>} /> 
                  <Route path='/chefs'          element={ <ProtectedRoute>     <Chefs />     </ProtectedRoute>} /> 
                  <Route path='/profile'        element={ <ProtectedRoute>     <Profile />     </ProtectedRoute>} /> 
                  <Route path='/chefs/:id'      element={ <ProtectedRoute>     <ChefPage />     </ProtectedRoute>} /> 
                  
                  <Route path='/for-one-time'   element={ <ProtectedRoute>     <OneTime />     </ProtectedRoute>} /> 
                  <Route path='/for-month'      element={ <ProtectedRoute>     <ForMonth />     </ProtectedRoute>} /> 
                  <Route path='/for-event'      element={ <ProtectedRoute>     <ForEvent />     </ProtectedRoute>} /> 
                  <Route path='/pay-OneTime'    element={ <ProtectedRoute>     <Pay_OneTime />     </ProtectedRoute>} /> 
                  <Route path='/pay-ForMonth'   element={ <ProtectedRoute>     <Pay_ForMonth />     </ProtectedRoute>} /> 
                  <Route path='/pay-ForEvent'   element={ <ProtectedRoute>     <Pay_ForEvent />     </ProtectedRoute>} /> 
                  <Route path='/delicacies'     element={ <ProtectedRoute>     <Delicacies />     </ProtectedRoute>} /> 
                  <Route path='/about'          element={ <ProtectedRoute>     <AboutUs />     </ProtectedRoute>} /> 
                  <Route path='/savemessage'    element={ <ProtectedRoute>     <ContactMessage />     </ProtectedRoute>} /> 
                  <Route path='/savemember'     element={ <ProtectedRoute>     <Member />     </ProtectedRoute>} /> 
                  <Route path='/my-bookings/:id'element={ <ProtectedRoute>     <MyBooking />     </ProtectedRoute>} /> 
                  <Route path='/success'        element={ <ProtectedRoute>     <Success />     </ProtectedRoute>} /> 
                  <Route path='/failure'        element={ <ProtectedRoute>     <Failure />     </ProtectedRoute>} /> 
                    
                    
              </Routes>
                    
                    
              <Footer/>
        </div>
      )}
    </div>

          
      
    </>
  )
}

export default App
