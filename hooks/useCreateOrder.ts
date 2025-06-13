import axios from 'axios';

export async function createZaloPayOrder(orderData: {
  fullName: string;
  email: string;
  phone: string;
  quantity: number;
  amount: number;
  description: string;
}) {
  const response = await axios.post('/api/zalo-order', orderData);
  return response.data;
}
