import Navbar from "../components/Navbar";
import QuestionCard from "../components/QuestionCard";


export default function Aptitude() {
    return (
        <div>
            <Navbar/>
            <QuestionCard question="Question" options="a" image="" correctAnswer="a"/>
            <QuestionCard question="Question" options="a" image="" correctAnswer="a"/>
            <QuestionCard question="Question" options="a" image="" correctAnswer="a"/>
            <QuestionCard question="Question" options="a" image="" correctAnswer="a"/>
        </div>
    )
}