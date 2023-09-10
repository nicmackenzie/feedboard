import { useContext, createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setLoggedInUser(JSON.parse(savedUser));
    }
  }, []);

  function setUser(user) {
    setLoggedInUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  function logout() {
    setLoggedInUser(null);
    localStorage.removeItem('user');
  }

  return (
    <UserContext.Provider value={{ loggedInUser, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  return useContext(UserContext);
}
