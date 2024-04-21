import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuestionCard from "../components/aptitude/QuestionCard";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { auth, db } from '../firebase';


export default function Aptitude() {
    
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);

    const getQuestions = async () => {
        try {
            const docRef = doc(db, 'demoques', '190424');
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

    const handleFinalSubmit = () => {
        if (count === 10) {    
            alert(`Total Score: ${score}`);
        } else {
            alert("Please attempt all questions before submitting.");   
        }
    };

    const handleCorrectAnswer = () => {
        setScore(score + 10);
    };


    const handleCount = ()=>{
        setCount(count + 1);
    }


    useEffect(() => {
        getQuestions();
    }, [1]);

    return (
        <div>
            <Navbar />
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
                        onCorrectAnswer={handleCorrectAnswer}
                        onAnswerCount = {handleCount}
                        
                    />
                ))}
                {/* <Uploading/> */}

            </div>
            <div className="flex flex-wrap justify-center mb-20">
            <button
                    onClick={handleFinalSubmit}
                    className={`bg-white border border-sky-600 py-2 px-4 text-blue-800 rounded-md mt-6 items-center justify-center hover:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                >
                    SUBMIT
                </button>    
                

                
            </div>
            </div>
    )
}