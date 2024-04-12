import Features from "../components/Features";
import Footer from "../components/Footer";
import HomeHero1 from "../components/HomeHero1";
import Navbar from "../components/Navbar";

function Home(){
    return (
        <div className="bg-gray-50">
        <Navbar/>
        <HomeHero1/>
        <Features/>
        <Footer/>
        </div>
    )
}

export default Home;