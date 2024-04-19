import { useEffect, useState } from "react";

export default function Uploading() {
    const [problem, setProblem] = useState("")
    const [counter, setCounter] = useState(0)


    
    async function fetchQuestions() {
        try {
          const response = await fetch('https://aptitude-api.vercel.app/Age');
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching questions:', error);
          throw error;
        }
      }
      
      async function fetchData() {
        try {
            const questions = await fetchQuestions();
            setProblem(questions.question);
            console.log(problem);
        } catch (error) {
            console.error('Error fetching questions:', error);
            // Handle errors here
        }
    }

      useEffect(() => {
          while (counter<10){
              fetchData(); // Call the async function inside useEffect
            //   setCounter(prevCounter => prevCounter + 1);
        }
    }, []); // Empty dependency array ensures the effect runs only once, on mount

      


    return(
        <div>

        </div>
    )
}