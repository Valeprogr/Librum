import { AboutPage, BooksPage, HomePage, LocationPage, Cart, CreateProduct, Profile, SearchedPage,BookPageInfo, UserBooks } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from './components/spinner/Spinner';
import { ShoppingCartProvider } from './context/ShoppingCartContext';





function App() {
  const { isAuthenticated, isLoading } = useAuth0();
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
                <Route path='/books' element={<BooksPage />} />
                <Route path='/book/:id' element={<BookPageInfo />} />
                <Route path='/search/:book' element={<SearchedPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/create-product' element={<CreateProduct />} />
                <Route path='/user-books' element={<UserBooks />} />
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
                <Route path='/books' element={<BooksPage />} />
                <Route path='/book/:id' element={<BookPageInfo />} />
                <Route path='/search/:book' element={<SearchedPage />} />
                <Route path='/create-product' element={<CreateProduct />} />
              </Routes>
            </div>
          </BrowserRouter>
      }
    </ShoppingCartProvider>
  )
}

export default App
