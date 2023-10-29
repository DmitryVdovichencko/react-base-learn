import { Link } from 'react-router-dom';
import { ToggleAuthStateButton } from '../features/auth/ToggleAuthStateButton';
import { useEffect } from 'react';
import { useAuth } from '../features/auth/AuthProvider';

const LoginPage = () => {
  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      console.log({ isAuth });
    }
  }, [isAuth]);

  return (
    <>
      <h1> Hello LoginPage!</h1>
      <ToggleAuthStateButton />
      <Link to="/signup">SignUp</Link>
    </>
  );
};

export default LoginPage;
