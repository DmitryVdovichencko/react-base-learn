import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Navigate to="/welcome" />} />
      <Route path="*" element={<Navigate to="/welcome" />} />
      <Route path="welcome" element={<WelcomePage />} />
    </Route>
  )
);

function AuthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default AuthenticatedRouter;
