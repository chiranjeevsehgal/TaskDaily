import Leaderboardrow from "../components/Leaderboardrow";
import Navbar from "../components/Navbar";

export default function Leaderboard() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center mt-20">
                <Leaderboardrow />
                <Leaderboardrow />
                <Leaderboardrow />

            </div>
        </div>
    )
}