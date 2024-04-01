import Navbar from "../components/Navbar";
import QuestionCard from "../components/QuestionCard";


export default function Aptitude() {
    return (
        <div>
            <Navbar/>
            <QuestionCard number="1" question="Question" options={['1a', '1b', '1c', '1d']} image="" correctAnswer="1c"/>
            <QuestionCard number="2" question="Question" options={['2a', '2b', '2c', '2d']} image="" correctAnswer="2a"/>
            <QuestionCard number="3" question="Question" options={['3a', '3b', '3c', '3d']} image="" correctAnswer="3b"/>
            <QuestionCard number="4" question="Question" options={['4a', '4b', '4c', '4d']} image="" correctAnswer="4d"/>
        </div>
    )
}