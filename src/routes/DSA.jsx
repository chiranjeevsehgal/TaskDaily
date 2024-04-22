import React from "react";
import Navbar from "../components/Navbar"
import Question from "../components/dsa/Question"
import{getDoc,setDoc,doc} from "firebase/firestore";
import { auth,db } from '../firebase';

export default function DSA(){

    const [question,setQuestion]=React.useState({id:"",difficulty:"",body:"",examples:[]})
    const getQuestionOftheDay = async () => {
        try {
            const docRef = doc(db, 'dsa', '12042024');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const res = docSnap.data();
                setQuestion(res);
                console.log(res);
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error fetching document:', error);
        }
    }
    
    const handleSubmit=async() => {
        
        
        console.log("submitted")
    }
    React.useEffect(() => {
        getQuestionOftheDay();
    }, [1]);
    
    
    return(
        <div>
        <Navbar/>
        <div className="flex flex-row"> 
        <div className="w-1/2">
            <Question title={question.title} difficulty={question.difficulty} body={question.body} examples={question.examples}/>
            {/* <Editor/> */}
        </div >
        <div className=" mt-8 w-1/2 h-3/4 border-2">
        <textarea className="w-full p-4 h-96" />
        <div className="flex justify-end ">
        <button
  type="button"
  className="rounded-full justify-end bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
onClick={handleSubmit}>
  Submit
    </button>
</div>
        </div>
        </div>
        </div>
    )
}




// function formatDate(serverTimestamp) {
//     // Create a new Date object using the server timestamp
//     const date = new Date(serverTimestamp);

//     // Extract day, month, and year components from the date object
//     const day = date.getDate().toString().padStart(2, '0'); // Day of the month (with leading zero if necessary)
//     const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month (adding 1 because months are zero-based)
//     const year = date.getFullYear().toString().slice(-2); // Last two digits of the year

//     // Concatenate day, month, and year components to form the desired format
//     const formattedDate = `${day}${month}${year}`;

//     return formattedDate;
// }

// // Example usage:
// const serverTimestamp = 1618542353000; // Example server timestamp (in milliseconds)
// const formattedDate = formatDate(serverTimestamp);
// console.log(formattedDate); // Output will be something like "160421" (for 16th April 2021)
