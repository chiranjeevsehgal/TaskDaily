import DashCard from "../components/DashCard"
import Navbar from "../components/Navbar"

export default function Dashboard(){
    return(
        <>
            <Navbar/>
            <div className="flex flex-row justify-center gap-x-10">
                <DashCard title="DSA"/>
                <DashCard title="Aptitude"/>
            </div>
        </>
    )
}