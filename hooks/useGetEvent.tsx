import { useQuery } from '@tanstack/react-query';
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useGetEvent = ({ id }: { id: any }) => {
  return useQuery({
    queryKey: ['useGetEvent'],
    queryFn: () => fetch(`${API_URL}/events/${id}`).then((res) => res.json()),
  });
};
