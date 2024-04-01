import { Flame } from "lucide-react"

export default function Leaderboardrow() {
    return (
        <div>
            <div className="max-w-4xl p-6 rounded-md shadow-md bg-gray-50 text-gray-900 flex flex-row justify-center items-center gap-x-20">
                <img className="bg-gray-100 h-8 w-8 rounded-full"/>
                <p className="text-gray-800 text-lg">rank</p>
                <p className="text-cyan-600 text-lg">username</p>
                <p className="text-gray-800 flex flex-row text-lg">12 <Flame color="#da2b2b" className="w-6 ml-2" /></p>
            </div>
        </div>
    )
}