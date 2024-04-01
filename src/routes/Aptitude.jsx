import Navbar from "../components/Navbar";
import QuestionCard from "../components/QuestionCard";


export default function Aptitude() {
    return (
        <div>
            <Navbar/>
            <QuestionCard number="1" question="Question" options="a" image="" correctAnswer="a"/>
            <QuestionCard number="2" question="Question" options="a" image="" correctAnswer="a"/>
            <QuestionCard number="3" question="Question" options="a" image="" correctAnswer="a"/>
            <QuestionCard number="4" question="Question" options="a" image="" correctAnswer="a"/>
        </div>
    )
}