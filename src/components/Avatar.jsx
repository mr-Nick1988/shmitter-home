import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar, changeUser} = useContext(TwitterContext);

   const handleClick = (e) => {
       if(e.button === 2){
           const newUser= prompt("Enter your name",user.name);
           if(newUser){
               changeUser(newUser);
           }
       }else{
           const url = prompt("Enter your avatar URL");
           changeAvatar(url);
       }
   }

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                changeAvatar(url);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
        />
    );
}


export default Avatar;