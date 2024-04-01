import Navbar from "../components/Navbar"
import Question from "../components/dsa/Question"

export default function DSA(){
    return(
        <div>
        <Navbar/>
        <div className="flex flex-row"> 
        <div className="w-1/2">
            <Question/>
            {/* <Editor/> */}
        </div>
        <div className=" mt-8 w-1/2 h-full border-2">
        <textarea className="w-full p-4" />
        <div className="flex justify-end ">
        <button
  type="button"
  className="rounded-full justify-end bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
>
  Submit
    </button>
</div>
        </div>
        </div>
        </div>
    )
}