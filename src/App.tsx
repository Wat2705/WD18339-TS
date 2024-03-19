  // import { TProduct } from '@/interfaces/TProduct'
  import Home from './pages/Home'
  import Header from './components/Header'
  import Footer from './components/Footer'
  import { Routes, Route } from 'react-router-dom'
  import Login from './pages/Login'
  import Register from './pages/Register'
  import ProductDetail from './pages/ProductDetail'
  import NotFound from './pages/NotFound'

  function App() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    )
  }

  export default App
