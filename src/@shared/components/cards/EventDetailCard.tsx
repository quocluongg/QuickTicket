'use client';

import { Card, CardContent, CardHeader } from '../ui/card';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

const EventDetailCard = () => {
  return (
    <Card className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg bg-[#1c1c1c] text-white">
      <CardHeader className="p-0">
        <img
          src="https://salt.tkbcdn.com/ts/ds/1c/7d/5e/3e6ace30e0a5745dd0a757d2981f84c5.png"
          alt="Event Banner"
          className="w-full h-[200px] object-cover rounded-t-xl"
        />
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-lg leading-tight">
          MADAME SHOW - NHỮNG ĐƯỜNG CHIM BAY
        </h3>

        <div className="text-sm text-[#0f0] font-semibold">
          18:30 - 19:30, 17 Tháng 05, 2025
        </div>
        <div className="text-xs text-gray-400">+ 2 ngày khác</div>

        <div className="flex items-start gap-2 text-sm text-gray-300 mt-2">
          <MapPin className="w-4 h-4 mt-[2px]" />
          <span>
            Madame de Dalat
            <br />
            Số 02 Yết Kiêu, Phường 5, Thành Phố Đà Lạt, Tỉnh Lâm Đồng
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventDetailCard;
