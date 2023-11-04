import { useAuth } from './features/auth/AuthProvider';
import AuthenticatedAppLayout from './layouts/AuthenticatedAppLayout';
import UnauthenticatedAppLayout from './layouts/UnauthenticatedAppLayout';

// eslint-disable-next-line react/prop-types
function AppLayout({ children }) {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <AuthenticatedAppLayout>{children}</AuthenticatedAppLayout>;
  }
  return <UnauthenticatedAppLayout>{children}</UnauthenticatedAppLayout>;
}

export default AppLayout;
