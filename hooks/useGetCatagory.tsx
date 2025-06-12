import { useQuery } from '@tanstack/react-query';
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useGetCatagory = () => {
  return useQuery({
    queryKey: ['useGetCatagory'],
    queryFn: () => fetch(`${API_URL}/categories`).then((res) => res.json()),
  });
};
