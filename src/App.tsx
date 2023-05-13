import { AboutPage, BooksPage, EditProfilePage, HomePage, LocationPage, LoginPage, SignUpPage, Cart, CreateProduct } from './pages';
import { BrowserRouter, json, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from './components/spinner/Spinner';





function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      {
        isAuthenticated ?
          <BrowserRouter>
            <div>
              <Navbar />
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/location' element={<LocationPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                <Route path='/edit-profil' element={<EditProfilePage />} />
                <Route path='/books' element={<BooksPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/create-product' element={<CreateProduct />} />
              </Routes>
            </div>
          </BrowserRouter>
          :
          <BrowserRouter>
            <div>
              <Navbar />
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/location' element={<LocationPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                <Route path='/books' element={<BooksPage />} />
              </Routes>
            </div>
          </BrowserRouter>
      }
    </>
  )
}

export default App
