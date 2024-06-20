import Layout from "./pages/Layout"
import { BrowserRouter } from "react-router-dom"
import Header from "./sections/Header" 
import Categories from "./sections/Categories"

function App() {

  return (
    <div className="dark:bg-neutral-900 min-h-screen overflow-hidden">
      <BrowserRouter>
        <Header />
        <Categories />
        <Layout />
      </BrowserRouter>
      
    </div>
  )
}

export default App
