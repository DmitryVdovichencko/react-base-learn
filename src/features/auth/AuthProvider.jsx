import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const useAuth = () => {
  if (!useContext(AuthContext)) throw Error('useAuthState must be used within a AuthProvider');
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  return <AuthContext.Provider value={{ isAuth, setIsAuth }} {...props}></AuthContext.Provider>;
};

export { AuthProvider };
export { useAuth };
