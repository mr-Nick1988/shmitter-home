

import { useContext } from "react";
import { TwitterContext } from "../utils/context.js";

const Avatar = ({ size }) => {
    const { user, changeAvatar, changeName } = useContext(TwitterContext);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.button === 2) {
            const newName = prompt("Enter your name", user.name);
            if (newName) {
                changeName(newName);
            }
        } else if (e.button === 0) {
            const newAvatarUrl = prompt("Enter new avatar URL", user.avatar);
            if (newAvatarUrl) {
                changeAvatar(newAvatarUrl);
            }
        }
  };

    return (
        <img
            onClick={handleClick}
            onContextMenu={handleClick}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
        />
    );
};

export default Avatar;









