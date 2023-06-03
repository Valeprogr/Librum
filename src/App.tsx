import { AboutPage, BooksPage, EditProfilePage, HomePage, LocationPage, LoginPage, SignUpPage, Cart, CreateProduct } from './pages';
import { BrowserRouter, json, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from './components/spinner/Spinner';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import BookPageInfo from './pages/BookPageInfo';




function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  if (isLoading) {
    return <Spinner />
  }

  return (
    <ShoppingCartProvider>
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
                
                <Route path='/books' element={<BooksPage />} />
                <Route path='/book/:id' element={<BookPageInfo />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/create-product' element={<CreateProduct />} />
                <Route path='/edit-profil' element={<EditProfilePage />} />
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
                <Route path='/book/:id' element={<BookPageInfo />} />
                <Route path='/create-product' element={<CreateProduct />} />
              </Routes>
            </div>
          </BrowserRouter>
      }
    </ShoppingCartProvider>
  )
}

export default App
