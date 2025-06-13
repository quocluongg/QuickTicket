import { useQuery } from '@tanstack/react-query';
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useGetTicket = ({ id }: { id: any }) => {
  return useQuery({
    queryKey: ['useGetTicket'],
    queryFn: () => fetch(`${API_URL}/tickets/${id}`).then((res) => res.json()),
  });
};

export const useGetTicketList = () => {
  return useQuery({
    queryKey: ['useGetTicketList'],
    queryFn: () => fetch(`${API_URL}/tickets`).then((res) => res.json()),
  });
};
