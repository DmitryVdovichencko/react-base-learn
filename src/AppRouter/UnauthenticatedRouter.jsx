import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import SignupRecoverPage from '../pages/SignupRecoverPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Navigate to="/login" />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="signup/recover" element={<SignupRecoverPage />} />
			<Route path="*" element={<Navigate to="/login" />} />
    </Route>
  )
);

function UnauthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default UnauthenticatedRouter;
