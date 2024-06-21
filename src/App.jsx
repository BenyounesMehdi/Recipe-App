import Layout from "./pages/Layout"
import { BrowserRouter } from "react-router-dom"
import Header from "./sections/Header" 
import Categories from "./sections/Categories"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="dark:bg-neutral-900 min-h-screen overflow-hidden">
      <BrowserRouter>
        <Header />
        <Categories />
        <Layout />
      </BrowserRouter>
      <Analytics />
    </div>
  )
}

export default App
