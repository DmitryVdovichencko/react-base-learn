// eslint-disable-next-line react/prop-types
function UnauthenticatedAppLayout({ children }) {
  return (
    <>
      <header>
        <h2>Login to awesomeApp!</h2>
      </header>
      <main>{children}</main>
      <footer>2023 footer</footer>
    </>
  );
}

export default UnauthenticatedAppLayout;
