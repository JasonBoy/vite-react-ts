import { Outlet } from 'react-router-dom';
import { useAppSelector } from '@/hooks/store-hooks.ts';

export default function Dashboard() {
  const user = useAppSelector((state) => state.global.user);
  return (
    <div>
      <header className="flex justify-between items-center px-6 h-[64px] shadow">
        <div>header</div>
        <div>{user?.username}</div>
      </header>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
}
