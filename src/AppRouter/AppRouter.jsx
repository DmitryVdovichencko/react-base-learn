import AuthenticatedRouter from './AuthenticatedRouter';
import UnauthenticatedRouter from './UnauthenticatedRouter';
import { useAuth } from '../features/auth/AuthProvider';

function AppRouter() {
  const { isAuth } = useAuth();
  if (isAuth) {
    return <AuthenticatedRouter />;
  }
  return <UnauthenticatedRouter />;
}

export default AppRouter;
