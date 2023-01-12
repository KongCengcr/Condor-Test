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
    //   universityFav: [1, 3],
    //   universitySelect: 7,
    // }
    localStorage.setItem("loggedUser", JSON.stringify(loggedCurrentUser));
    setCurrentUser(loggedCurrentUser);
  };

  const logoutUser = () => {
    setCurrentUser("");
    localStorage.removeItem("loggedUser");
  };

  const selectFavority = (val) => {
    const { universityFav } = currentUser;
    if (universityFav.includes(val)) {
      const deletedFav = universityFav.filter((fav) => fav !== val);
      setCurrentUser({
        ...currentUser,
        universityFav: deletedFav,
      });
    } else {
      setCurrentUser({
        ...currentUser,
        universitySelect: val,
      });
    }
  };

  const selectUniversity = (val) => {
    setCurrentUser({
      ...currentUser,
      universityFav: [...universityFav, val],
    });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loginUser,
        logoutUser,
        selectFavority,
        selectUniversity,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
