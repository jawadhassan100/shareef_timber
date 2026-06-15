import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

// Import all your pages
import Home from './pages/index'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Products from './pages/products'
import Projects from './pages/projects'
import Testimonials from './pages/testimonials'
import About from './pages/about'




// ScrollToTop component to handle scrolling on route changes
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) // This runs only once on mount

  return null
}

// Alternative: Scroll to top on route change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling to top
    })
  }, [pathname]) // Runs every time the route changes
  
  return null
}

function App() {
  return (
    <BrowserRouter>
      {/* Option 1: Simple scroll to top on mount */}
      {/* <ScrollToTop /> */}
      
      {/* Option 2: Scroll to top on every route change (recommended) */}
      <ScrollToTopOnRouteChange />
      
      <div className="min-h-screen bg-background flex flex-col">
       
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App