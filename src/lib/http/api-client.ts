import { HttpClient } from '@/lib/http/HttpClient.ts';

export const apiClient = new HttpClient({
  apiPrefix: 'http://localhost:1337/api',
});

export async function getUserInfo() {
  return apiClient.get('/user');
}
