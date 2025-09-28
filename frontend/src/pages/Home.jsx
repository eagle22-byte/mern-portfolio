import { useEffect, useState } from 'react';

export default function Home() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then(setHealth)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div>
      <h2>Welcome</h2>
      <p>This is a Vite + React frontend talking to an Express backend.</p>
      <h3>API Health</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <pre style={{ background: '#f7f7f7', padding: 12 }}>
        {health ? JSON.stringify(health, null, 2) : 'Loading...'}
      </pre>
    </div>
  );
}
