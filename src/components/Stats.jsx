import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";
import Avatar from "./Avatar.jsx";

const Stats = () => {
    const {user, stats, changeFollowers, changeFollowing} = useContext(TwitterContext);

    const handleFollowerChange = (plus) => {
        if (plus) {
            changeFollowers(stats.followers + 1); // Увеличиваем followers
        } else {
            if (stats.followers > 0) { // Предотвращаем отрицательные значения
                changeFollowers(stats.followers - 1); // Уменьшаем followers
            }
        }
    };

    const handleFollowingChange = (plus) => {
        if (plus) {
            changeFollowing(stats.following + 1); // Увеличиваем following
        } else {
            if (stats.following > 0) { // Предотвращаем отрицательные значения
                changeFollowing(stats.following - 1); // Уменьшаем following
            }
        }
    };
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div>
                    <button onClick={() => handleFollowerChange(true)}>
                        Followers: {stats.followers} +
                    </button>
                    <button onClick={() => handleFollowerChange(false)}>-</button>
                </div>
                <div>
                    <button onClick={() => handleFollowingChange(true)}>
                        Following: {stats.following} +
                    </button>
                    <button onClick={() => handleFollowingChange(false)}>-</button>
                </div>
            </div>
        </div>
    );
};

export default Stats;

