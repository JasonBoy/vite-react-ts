import { HttpClient } from '@/lib/http/HttpClient.ts';

export const apiClient = new HttpClient({
  apiPrefix: '/api',
});

export async function getUserInfo() {
  return apiClient.get('/user');
}
