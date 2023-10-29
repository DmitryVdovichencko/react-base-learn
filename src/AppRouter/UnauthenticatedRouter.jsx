import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToggleAuthStateButton } from '../features/auth/ToggleAuthStateButton';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <p>Please login!</p>
        <ToggleAuthStateButton />
      </div>
    )
  }
]);

function UnauthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default UnauthenticatedRouter;
