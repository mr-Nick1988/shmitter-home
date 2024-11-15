import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";
import Avatar from "./Avatar.jsx";

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
            changeFollowing(stats.following + 1);
        } else {
            if (stats.following > 0) {
                changeFollowing(stats.following - 1);
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
                    <button
                        onClick={() => handleFollowerChange(true)}
                        className="follower-btn"
                    >
                        Followers: {stats.followers} +
                    </button>
                    <button
                        onClick={() => handleFollowerChange(false)}
                        className="follower-btn-minus"
                    >
                        -
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => handleFollowingChange(true)}
                        className="following-btn"
                    >
                        Following: {stats.following} +
                    </button>
                    <button
                        onClick={() => handleFollowingChange(false)}
                        className="following-btn-minus"
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );

};


//     return (
//         <div className={'user-stats'}>
//             <div>
//                 <Avatar/>
//                 {user.name}
//             </div>
//             <div className={'stats'}>
//                 <div>
//                     <button onClick={() => handleFollowerChange(true)}>
//                         Followers: {stats.followers} +
//                     </button>
//                     <button onClick={() => handleFollowerChange(false)}>-</button>
//                 </div>
//                 <div>
//                     <button onClick={() => handleFollowingChange(true)}>
//                         Following: {stats.following} +
//                     </button>
//                     <button onClick={() => handleFollowingChange(false)}>-</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default Stats;

