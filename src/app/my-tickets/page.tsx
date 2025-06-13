'use client';
import MobilePageLayout from '@/@shared/components/layout/Page';
import React from 'react';
import CheckAuthPage from '../auth/check_auth';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/@shared/components/ui/Tabs';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

// ✅ Mock ticket data
const mockTickets = [
  {
    id: '1',
    event_name: 'PHIM DORAEMON: NOBITA VÀ TRANH 2025',
    event_date: '2025-06-30T19:30:00',
    location: 'Rạp Galaxy Trung Tránh',
    banner_image:
      'https://www.fahasa.com/blog/wp-content/uploads/2025/03/doraemon-3.jpg',
    ticket_type: '2D - Người lớn',
    seat: 'R7',
    transaction_id: 'DORAEMON2025-XYZ',
  },
  {
    id: '2',
    event_name: 'Sự kiện âm nhạc OLD SCHOOL LIVE',
    event_date: '2025-04-15T20:00:00',
    location: 'Sân vận động Hoa Lư',
    banner_image:
      'https://i.ytimg.com/vi/taTDz-hNcJ0/maxresdefault.jpg',
    ticket_type: 'Standing Zone A',
    seat: 'STZ-12',
    transaction_id: 'OLDSCHOOL2025-ABC',
  },
  {
    id: '3',
    event_name:
      'VBA STAR X 2025 | Game 23 - Hanoi Buffaloes vs Ho Chi Minh City Wings',
    event_date: '2025-06-22T19:00:00',
    location: 'Nhà thi đấu Tây Hồ',
    banner_image:
      'https://salt.tkbcdn.com/ts/ds/a4/91/2b/794a4074496312a16dbe631ffd378c7d.png',
    ticket_type: 'Khán đài A',
    seat: 'A-12',
    transaction_id: 'VBA2025-MATCH23',
  },
];

const TicketCard = ({ ticket }: { ticket: typeof mockTickets[0] }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/my-tickets/${ticket.id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md mb-4 overflow-hidden border cursor-pointer hover:shadow-lg transition"
      onClick={handleClick}
    >
      <img
        src={ticket.banner_image}
        alt={ticket.event_name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3 text-sm">
        <h3 className="text-base font-semibold mb-1">{ticket.event_name}</h3>
        <p className="text-gray-600 mb-1">{ticket.location}</p>
        <p className="text-gray-600 mb-1">
          {dayjs(ticket.event_date).format('DD/MM/YYYY HH:mm')}
        </p>
        <p className="text-gray-600">Mã vé: {ticket.transaction_id}</p>
      </div>
    </div>
  );
};

const page = () => {
  const now = dayjs();

  const upcoming = mockTickets.filter((t) =>
    dayjs(t.event_date).isAfter(now)
  );
  const past = mockTickets.filter((t) =>
    dayjs(t.event_date).isBefore(now)
  );

  return (
    <MobilePageLayout>
      <CheckAuthPage URL="/my-tickets" />
      <div className="p-2">
        <h1 className="text-2xl font-bold mb-4 text-[#761cbc]">Sự kiện</h1>
        <Tabs
          defaultValue="signin"
          className="w-full flex flex-col justify-center items-center"
        >
          <TabsList className="!w-[80%] bg-[#761cbc] rounded-[12px] h-[54px] text-white">
            <TabsTrigger
              value="signin"
              className="w-1/2 rounded-[12px] h-[46px]"
            >
              Sắp diễn ra
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="w-1/2 rounded-[12px] h-[46px] text-white"
            >
              Đã kết thúc
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="w-full mt-4">
            {upcoming.length > 0 ? (
              upcoming.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))
            ) : (
              <p className="text-center text-sm text-gray-500">
                Không có sự kiện sắp diễn ra.
              </p>
            )}
          </TabsContent>

          <TabsContent value="signup" className="w-full mt-4">
            {past.length > 0 ? (
              past.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))
            ) : (
              <p className="text-center text-sm text-gray-500">
                Không có sự kiện đã kết thúc.
              </p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MobilePageLayout>
  );
};

export default page;
