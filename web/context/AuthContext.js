import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    //Logic if exist localstorage user
    const getLoggedUser = localStorage.getItem("loggedUser");
    if (getLoggedUser) {
      const parseUser = JSON.parse(getLoggedUser);
      setCurrentUser(parseUser);
    }
  }, []);

  const loginUser = (user) => {
    const { password, ...loggedCurrentUser } = user;
    // const loggedCurrentUser = {
    //   id: 1,
    //   name: "Kong",
    //   universityFav: [3, 4, 7],
    //   universitySelect: 7,
    // }
    localStorage.setItem("loggedUser", JSON.stringify(loggedCurrentUser));
    setCurrentUser(loggedCurrentUser);
  };

  const logoutUser = () => {
    setCurrentUser("");
    localStorage.removeItem("loggedUser");
  };

  return (
    <AuthContext.Provider value={{ currentUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
