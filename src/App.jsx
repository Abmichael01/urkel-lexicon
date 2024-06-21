import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import Search from "./pages/Search"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
