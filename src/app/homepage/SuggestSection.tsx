import EventCard from '@/@shared/components/cards/EventCard';
import HighlightCard from '@/@shared/components/cards/HighlightCard';
import { useGetEvents } from '@hooks/useGetEvents';
import Link from 'next/link';
import React from 'react';

const SuggestSection = () => {
  const { data } = useGetEvents();

  return (
    <div className="space-y-4">
      {/* Tiêu đề */}
      <div className="flex justify-between">
        <div className="text-[14px] font-semibold">SỰ KIỆN NỔI BẬT</div>
        <div>See all</div>
      </div>

      {/* Danh sách sự kiện trượt ngang */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 w-max">
          {data &&
            data.map((event: any) => (
              <Link
                key={event.id}
                href={`/event/${event.id}`}
                className="rounded-xl transition duration-300"
              >
                <HighlightCard
                  title={event.event_name}
                  date={event.event_date}
                  image={event.banner_image}
                  location={event.location}
                  price={'100.000đ'}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestSection;
