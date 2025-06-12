import EventCard from '@/@shared/components/cards/EventCard';
import { useGetEvents } from '@hooks/useGetEvents';
import Link from 'next/link';
import React from 'react';

const MaybeYouLikeSection = () => {
  const { data } = useGetEvents();

  return (
    <div className="space-y-4">
      {/* Tiêu đề */}
      <div className="flex justify-between">
        <div className="text-[14px] font-semibold">BẠN CÓ THỂ THÍCH</div>
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
                <EventCard
                  title={event.event_name}
                  date={event.event_date}
                  image={event.banner_image}
                  location={event.location}
                  //   price={"100.000đ"}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MaybeYouLikeSection;
