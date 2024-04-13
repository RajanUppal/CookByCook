import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {UserProvider} from '../context/userContext.jsx'
import { ChefProvider } from '../context/chefContext.jsx'
import { BookingOneTimeProvider } from '../context/bookingOneTimeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ChefProvider>
        <BookingOneTimeProvider>
          
          <App />
          
        </BookingOneTimeProvider>
      </ChefProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
