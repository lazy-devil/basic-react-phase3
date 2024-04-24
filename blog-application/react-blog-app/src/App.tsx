import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './components/home-component/home'
import About from './components/about-component/about'
import Blogs from './components/blogs-component/blogs'
import NavBar from './components/navbar-component/navbar'
import NotFound from './components/notfound-component/notfound'
import Details from './components/details-component/details'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/home' element={<Navigate to={'/'} />} />
        <Route path='/info' element={<Navigate to={'/about'} />} />
        <Route path='/blog/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
