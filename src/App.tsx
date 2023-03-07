import { AboutPage, EditProfilePage, HomePage, LocationPage, LoginPage, SignUpPage } from './pages'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/about' element={<AboutPage />} />
  <Route path='/location' element={<LocationPage />} />
  <Route path='/login' element={<LoginPage />} />
  <Route path='/sign-up' element={<SignUpPage />} />
  <Route path='/edit-profil' element={<EditProfilePage />} />

  </Routes>
  
    </BrowserRouter>
  )
}

export default App
