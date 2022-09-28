import { Routes, Route } from "react-router-dom"
import { About } from "../../Pages/About"
import Home from "../../Pages/Home"
import Header from "../../Partials/Header"
import { StrapiData } from "../../StrapiData"

const AppRouter = () => {
    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="strapi" element={<StrapiData />}/>
            <Route path="about" element={<About />} />
        </Routes>
        </>
    )
}
export default AppRouter