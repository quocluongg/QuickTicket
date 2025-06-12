import React from 'react';

import Image from 'next/image';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/vi'; // import tiếng Việt
import { Card, CardContent, CardHeader } from '../ui/card';

dayjs.locale('vi');

interface EventCardProps {
  image: string;
  title: string;
  date: string; // ISO string: "2025-05-17"
  location: string;
}

const EventCard = ({ image, title, date, location }: EventCardProps) => {
  return (
    <Card className="w-[150px] !border-0 !p-0 gap-2 rounded-[8px]">
      <CardHeader className="p-0 overflow-hidden rounded-[8px]">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-[100px] rounded-[8px]"
        />
      </CardHeader>
      <CardContent className="!p-2 space-y-1">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center text-xs gap-1 mt-1">
          <CalendarIcon size={14} />{' '}
          <span>{dayjs(date).format('DD [tháng] MM, YYYY')}</span>
        </div>
        <div className="flex items-center text-xs gap-1 mt-1">
          <MapPinIcon size={14} /> <span className="truncate">{location}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.42 14.667c.322 0 .63-.128.86-.354l4.273-4.28a.667.667 0 0 0 .194-.406l.586-6.234a.667.667 0 0 0-.726-.726l-6.234.586a.667.667 0 0 0-.406.194L1.687 7.72a1.213 1.213 0 0 0 0 1.713l4.88 4.88c.226.226.533.353.853.354zm4-5.407-4 4-4.7-4.7 4-4 5.207-.487-.507 5.187z"
              fill="#EC441E"
            />
            <path d="M9 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#EC441E" />
          </svg>
          <p className="text-[#ec441e] text-sm font-semibold">300.000đ</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
