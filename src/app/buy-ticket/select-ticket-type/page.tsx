'use client';
import { useBookingStore } from '@hooks/useBookingStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ticketTypes = [
  {
    id: 'standard',
    name: 'Vé Thường',
    description: 'Chỗ ngồi thường, gần khu vực cổng vào',
    price: 150000,
  },
  {
    id: 'vip',
    name: 'Vé VIP',
    description: 'Vị trí trung tâm, bao gồm nước suối',
    price: 250000,
  },
  {
    id: 'earlybird',
    name: 'Vé Early Bird',
    description: 'Giá ưu đãi cho khách đặt sớm (số lượng có hạn)',
    price: 99000,
  },
];

export default function TicketTypeSelector() {
  const { setTicketType } = useBookingStore();
  const [selectedType, setSelectedType] = useState('standard');
const router = useRouter();

  const handleNext = () => {
    const typeInfo = ticketTypes.find(t => t.id === selectedType);
    if (!typeInfo) return; 
  
    setTicketType(typeInfo);
    router.push('/buy-ticket/select-combo');
  };
  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h2 className="text-xl font-bold text-center text-purple-700">Chọn loại vé</h2>

      {ticketTypes.map((type) => (
        <div
          key={type.id}
          onClick={() => setSelectedType(type.id)}
          className={`p-4 border rounded-xl cursor-pointer space-y-1 ${
            selectedType === type.id ? 'border-purple-500 bg-purple-50' : 'hover:bg-gray-50'
          }`}
        >
          <h3 className="text-md font-semibold">{type.name}</h3>
          <p className="text-sm text-gray-600">{type.description}</p>
          <p className="font-bold text-purple-700">{type.price.toLocaleString('vi-VN')}đ</p>
        </div>
      ))}

      <button
        onClick={handleNext}
        className="w-full mt-4 bg-purple-600 text-white font-bold py-3 rounded-xl hover:bg-purple-700"
      >
        Tiếp tục
      </button>
    </div>
  );
}
