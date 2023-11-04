import { useAuth } from './AuthProvider';

const ToggleAuthStateButton = () => {
  const { isAuth, setIsAuth } = useAuth();

  return <button onClick={() => setIsAuth(!isAuth)}>{isAuth ? 'logout' : 'login'}</button>;
};

export { ToggleAuthStateButton };
