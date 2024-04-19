import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuestionCard from "../components/aptitude/QuestionCard";
import{getDoc,setDoc,doc} from "firebase/firestore";
import { auth,db } from '../firebase';

export default function Aptitude() {
    // const [question,setQuestion]=useState([{id:"",problem:"", options:[], explanation:"",answer_option:""}])
    const [questions,setQuestions]=useState([])

    const getQuestions = async () => {
        try {
            const docRef = doc(db, 'aptitude', '19042024');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const res = docSnap.data();
                const questionsArray = Object.values(res.questions); // Convert object to array

                // console.log(res);
                // console.log(questionsArray);
                
                setQuestions(questionsArray);
                console.log(questions);
                
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error fetching document:', error);
        }
    }
    useEffect(() => {
        getQuestions();
    }, [1]);

    return (
        <div>
            <Navbar/>
            <div className="flex flex-wrap justify-center">
            {questions.map((question, index) => (
                <QuestionCard
                    key={index}
                    number={question.id}
                    question={question.problem}
                    options={question.options}
                    image=""
                    correctAnswer={question.answer_option}
                    explanation={question.explanation}
                    />
                ))}
                
        </div>
            {/* <QuestionCard number={question.id} question={question.problem} options={question.options} image="" correctAnswer={question.answer_option} explanation={question.explanation}/> */}
            {/* <QuestionCard number="2" question="Question" options={['2a', '2b', '2c', '2d']} image="" correctAnswer="2a"/> */}
            {/* <QuestionCard number="3" question="Question" options={['3a', '3b', '3c', '3d']} image="" correctAnswer="3b"/> */}
            {/* <QuestionCard number="4" question="Question" options={['4a', '4b', '4c', '4d']} image="" correctAnswer="4d"/> */}
        </div>
    )
}