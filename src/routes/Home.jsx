import Features from "../components/Features";
import Footer from "../components/Footer";
import HomeHero1 from "../components/HomeHero1";
import Navbar from "../components/Navbar";

function Home(){
    return (
        <>
        <Navbar/>
        <HomeHero1/>
        <Features/>
        <Footer/>
        </>
    )
}

export default Home;