import { useQuery } from '@tanstack/react-query';
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useGetEvents = () => {
  return useQuery({
    queryKey: ['useGetEvents'],
    queryFn: () => fetch(`${API_URL}/events`).then((res) => res.json()),
  });
};
