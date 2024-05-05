import { Button } from 'antd';
import styles from './CardDemo.module.css';
import { apiClient } from '@/lib/http/api-client.ts';

export default function CardDemo() {
  async function onClick() {
    try {
      await apiClient.get('/user');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div
      className={`${styles.cardDemo} p-4 border border-gray-300 rounded mt-4`}
    >
      <Button onClick={onClick}>Send api</Button>
      <p className={styles.cardDesc}>module css is cool</p>
    </div>
  );
}
