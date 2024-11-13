import {createContext,useState} from "react";

export const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://example.com/avatar.jpg",
    });

    const [stats, setStats] = useState({
        followers: 0,
        following: 0,
    });

    // Функция для изменения аватара
    const changeAvatar = (newAvatarUrl) => {
        setUser((prevUser) => ({ ...prevUser, avatar: newAvatarUrl }));
    };

    // Функция для изменения имени
    const changeName = (newName) => {
        setUser((prevUser) => ({ ...prevUser, name: newName }));
    };

    // Функции для изменения статистики
    const changeFollowers = (newFollowers) => {
        setStats((prevStats) => ({ ...prevStats, followers: newFollowers }));
    };

    const changeFollowing = (newFollowing) => {
        setStats((prevStats) => ({ ...prevStats, following: newFollowing }));
    };

    return (
        <TwitterContext.Provider
            value={{
                user,
                stats,
                changeAvatar,
                changeName,
                changeFollowers,
                changeFollowing,
            }}
        >
            {children}
        </TwitterContext.Provider>
    );
};