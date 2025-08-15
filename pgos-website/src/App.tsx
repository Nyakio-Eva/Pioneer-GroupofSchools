import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./components/Navigation"
import Home from "./pages/Index"
import NotFound from "./pages/NotFound"


function App() {
  

  return (
    <>
    <BrowserRouter>
     <NavBar/>
     
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
     
    </BrowserRouter>
      
    </>
  )
}

export default App
