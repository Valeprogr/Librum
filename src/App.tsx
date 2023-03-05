import {
  LoginPage,
  RegisterPage,
  HomePage,
  BlogPage,
  BookListPage
} from './pages'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/blog' element={<BlogPage />} />
    <Route path='/book-list' element={<BookListPage />} />

  </Routes>
  
    </BrowserRouter>
  )
}

export default App