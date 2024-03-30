import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Leaderboardrow() {
    return (
        <div>
            <div className="max-w-4xl p-6 rounded-md shadow-md bg-gray-50 text-gray-900 flex flex-row justify-center items-center gap-x-20">
                
                <p className="text-gray-800">rank</p>
                <p className="text-cyan-600">username</p>
                <p className="text-gray-800">12</p>
            </div>
        </div>
    )
}