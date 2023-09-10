import { useContext, createContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  function setUser(user) {
    setLoggedInUser(user);
  }

  return (
    <UserContext.Provider value={{ loggedInUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  return useContext(UserContext);
}
