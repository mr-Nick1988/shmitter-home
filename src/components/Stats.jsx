import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats, changeFollowers, changeFollowing} = useContext(TwitterContext);

    const handleFollowerChange = (plus) => {
        if (plus) {
            changeFollowers(stats.followers + 1);
        } else {
            if (stats.followers > 0) {
                changeFollowers(stats.followers - 1);
            }
        }
    };

    const handleFollowingChange = (plus) => {
        if (plus) {
            changeFollowing(stats.followers + 1);
        } else {
            if (stats.followers > 0) {
                changeFollowing(stats.followers - 1);
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
                    <div onClick={() => handleFollowerChange(true)}>Followers: {stats.followers}</div>
                    <button onClick={() => handleFollowerChange(false)}>-</button>

                </div>
                <div>
                    <div onClick={() => handleFollowingChange(true)}>Following: {stats.following}</div>
                    <button onClick={() => handleFollowingChange(false)}>-</button>
                </div>
            </div>
        </div>
    );
};

export default Stats;