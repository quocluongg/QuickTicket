'use client';
import MobilePageLayout from '@/@shared/components/layout/Page';
import React from 'react';
import { useParams } from 'next/navigation';

const mockTickets = [
  {
    id: '1',
    eventName: 'PHIM ĐIỆN ẢNH DORAEMON: NOBITA VÀ CUỘC PHIÊU LƯU VÀO THẾ GIỚI TRONG TRANH 2025',
    eventDate: '30/06/2025',
    eventTime: '7:30 PM',
    location: 'Rạp Galaxy Trung Tránh',
    userName: 'Lương Võ Khôi Quốc',
    transactionId: 'DORAEMON2025-XYZ',
    ticketType: '2D - Người lớn',
    seat: 'R7',
    imageUrl: 'https://www.fahasa.com/blog/wp-content/uploads/2025/03/doraemon-3.jpg',
    qrCodeData: 'ticket-id-doraemon-xyz'
  },
  {
    id: '2',
    eventName: 'Sự kiện âm nhạc OLD SCHOOL LIVE',
    eventDate: '15/04/2025',
    eventTime: '8:00 PM',
    location: 'Sân vận động Hoa Lư',
    userName: 'Lương Võ Khôi Quốc',
    transactionId: 'OLDSCHOOL2025-ABC',
    ticketType: 'Standing Zone A',
    seat: 'STZ-12',
    imageUrl: 'https://i.ytimg.com/vi/taTDz-hNcJ0/maxresdefault.jpg',
    qrCodeData: 'ticket-id-oldschool-abc'
  },
  {
    id: '3',
    eventName: 'VBA STAR X 2025 | Game 23 - Hanoi Buffaloes vs HCMC Wings',
    eventDate: '22/06/2025',
    eventTime: '7:00 PM',
    location: 'Nhà thi đấu Tây Hồ',
    userName: 'Lương Võ Khôi Quốc',
    transactionId: 'VBA2025-MATCH23',
    ticketType: 'Khán đài A',
    seat: 'A-12',
    imageUrl: 'https://salt.tkbcdn.com/ts/ds/a4/91/2b/794a4074496312a16dbe631ffd378c7d.png',
    qrCodeData: 'ticket-id-vba2025-match23'
  }
];

const page = () => {
  const params = useParams() as { id: string };
  const id = params.id;
  const ticket = mockTickets.find((t) => t.id === id);

  if (!ticket) {
    return (
      <MobilePageLayout fullScreen>
        <div className="text-center mt-10 text-red-500">Không tìm thấy vé với ID {id}</div>
      </MobilePageLayout>
    );
  }

  return (
    <MobilePageLayout className="gradient-bg" fullScreen>
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-md overflow-hidden border border-gray-200 relative">
        {/* Top image */}
        <div className="w-auto h-48 m-[10px] relative">
          <img
            src={ticket.imageUrl}
            alt={ticket.eventName}
            className="object-cover rounded-[14px] w-full h-full"
          />
        </div>

        {/* Event name and location */}
        <div className="p-4 pt-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">{ticket.eventName}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {ticket.eventDate} – {ticket.location}
          </p>
        </div>

        {/* Ticket info */}
        <div className="p-4 space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Tên</span>
            <span>{ticket.userName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Mã giao dịch</span>
            <span>{ticket.transactionId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Thời gian</span>
            <span>{ticket.eventDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Giờ</span>
            <span>{ticket.eventTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Loại vé</span>
            <span>{ticket.ticketType}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Ghế ngồi</span>
            <span>{ticket.seat}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-14 h-14 bg-purple-200 rounded-full z-10"></div>
          <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-14 h-14 bg-purple-200 rounded-full z-10"></div>
          <div className="border-t border-dashed border-gray-300 w-full"></div>
        </div>

        {/* QR Code */}
        <div className="p-4 flex flex-col items-center">
          <div className="flex justify-center py-6">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${ticket.qrCodeData}`}
              alt="QR Code"
              className="rounded"
            />
          </div>
          <p className="mt-2 text-xs text-gray-500 uppercase tracking-wide text-center">
            Scan mã để check-in ở cổng
          </p>
        </div>
      </div>
    </MobilePageLayout>
  );
};

export default page;
