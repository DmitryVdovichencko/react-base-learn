import { ToggleAuthStateButton } from '../features/auth/ToggleAuthStateButton';

// eslint-disable-next-line react/prop-types
function AuthenticatedAppLayout({ children }) {
  return (
    <>
      <header>
        <h2>Welcome to awesomeApp!</h2>
      </header>
      <aside>aside</aside>
      <main>{children}</main>
      <ToggleAuthStateButton />
      <footer>2023 footer</footer>
    </>
  );
}

export default AuthenticatedAppLayout;
