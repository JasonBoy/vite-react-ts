import { HttpClient } from '@/lib/http/HttpClient.ts';

export const apiClient = new HttpClient({
  apiPrefix: `${import.meta.env.VITE_API_PREFIX}/api`,
});

export async function getUserInfo() {
  return apiClient.get('/user');
}
