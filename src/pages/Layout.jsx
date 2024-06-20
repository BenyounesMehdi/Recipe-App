import Cusine from "./Cusine";
import Home from "./Home";
import Recipe from "./Recipe";
import { Routes, Route, useLocation } from "react-router-dom";
import Searched from "./Searched";
import { AnimatePresence } from "framer-motion";

export default function Layout () {
    
    const location = useLocation() ;

    return (
        <div className="container mx-auto px-3">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route index element={<Home />} />
                        <Route path="cusine/:category" element={<Cusine />} />
                        <Route path="searched/:search" element={<Searched />} />
                        <Route path="recipe/:recipeId" element={<Recipe />} />
                    </Routes>
                </AnimatePresence>
        </div>
            
    )
}