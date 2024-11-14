

import { useContext } from "react";
import { TwitterContext } from "../utils/context.js";

const Avatar = ({ size }) => {
    const { user, changeAvatar, changeName } = useContext(TwitterContext);

    // Обработчик для кликов
    const handleClick = (e) => {
        // Предотвращаем стандартное поведение правого клика (появление контекстного меню)
        e.preventDefault();

        if (e.button === 2) { // Правая кнопка мыши
            const newName = prompt("Enter your name", user.name);
            if (newName) {
                changeName(newName); // Изменяем имя
            }
        } else if (e.button === 0) { // Левая кнопка мыши
            const newAvatarUrl = prompt("Enter new avatar URL", user.avatar);
            if (newAvatarUrl) {
                changeAvatar(newAvatarUrl); // Изменяем аватар
            }
        }
  };

    return (
        <img
            onClick={handleClick} // Обработчик для кликов
            onContextMenu={handleClick} // Добавляем обработчик для правого клика
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
        />
    );
};

export default Avatar;









