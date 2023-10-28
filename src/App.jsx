import { useState } from 'react';
import { useFetch } from './useFetch';

function App() {
  const [count, setCount] = useState(0);
  // Fetch the data
  const { loading, error, data } = useFetch('https://made.up/api/usage');

  return (
    <>
			
      <h1>Vite + React</h1>
			{loading && <p>loading ....</p>}
			{data && <p>{data}</p>}
			{error && <p>{error}</p>}
      <div>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
