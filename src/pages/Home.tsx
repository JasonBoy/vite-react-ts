import { Button } from 'antd';
import CardDemo from '@/components/CardDemo.tsx';
import reactLogo from '@/assets/react.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  const [count, setCount] = useState(0);
  function onClick() {
    console.log(count);
  }
  return (
    <div className="demo-page">
      <ul className="list-disc flex gap-2">
        <li>
          <Link to="login">
            <Button type="link">go to login page</Button>
          </Link>
          <Link to="dashboard/carbon-list">
            <Button type="link">go to dashboard</Button>
          </Link>
        </li>
      </ul>
      <Button type="primary" onClick={onClick}>
        antd button
      </Button>
      <CardDemo />
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
