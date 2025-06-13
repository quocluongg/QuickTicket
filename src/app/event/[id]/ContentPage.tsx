import React from 'react';
import { useGetEvent } from '@hooks/useGetEvent';
import Loading from '@/@shared/components/icon/Loading';
import dayjs from 'dayjs';
import Link from 'next/link';

const ContentPage = ({ id }: { id: any }) => {
  const { data } = useGetEvent({ id: id });
  if (!data)
    return (
      <div className="flex justify-center items-center">
        <Loading></Loading>
      </div>
    );

  console.log(data);
  return (
    <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
      {/* <!-- Event image --> */}
      <img
        //@ts-ignore
        src={data.banner_image}
        alt="Event"
        className="w-full h-64 object-cover"
      />

      {/* <!-- Event info box --> */}
      <div className="relative -mt-10 mx-4 bg-white p-4 rounded-xl shadow-md z-10">
        <h3 className="text-lg font-semibold text-gray-900">
          {data.event_name}
        </h3>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <svg
            className="w-4 h-4 mr-1 text-purple-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          {data.location}
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <svg
            className="w-4 h-4 mr-1 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414a2 2 0 00-.586-1.414l-3.414-3.414A2 2 0 0010.586 2H6zm5 5a1 1 0 011 1v2a1 1 0 01-2 0V8a1 1 0 011-1z" />
          </svg>
          {dayjs(data.event_date).format("DD/MM/YYYY")}
        </div>

        {data.total_tickets === 0 && (
          <div className="mt-2 text-sm text-red-600 font-medium">HẾT VÉ</div>
        )}
        {data.total_tickets !== 0 && (
          <div className="mt-2 text-sm text-green-600 font-medium">
            Còn lại: {data.total_tickets}
          </div>
        )}
      </div>

      {/* <!-- Description --> */}
      <div className="p-4 pt-2">
        <h4 className="text-md font-semibold text-gray-800 mb-1">Mô tả</h4>
        <p className="text-sm text-gray-600 line-clamp-4">
          {data.event_desc}
          <a href="#" className="text-purple-600 underline">
            Đọc thêm.
          </a>
        </p>
      </div>

      {/* <!-- Price + Button --> */}
      <div className="flex items-center justify-between fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 p-4">
        <div>
          <span className="text-gray-500 text-sm">Giá từ</span>
          <p className="text-lg font-bold text-gray-900">200.000đ</p>
        </div>
        {data.total_tickets === 0 ? (
  <button
    className="px-4 py-2 rounded-full bg-gray-400 cursor-not-allowed text-white"
    disabled
  >
    Hết vé
  </button>
) : (
  <Link href={`/buy-ticket?eventType=${data.event_type}`}>
    <button className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition">
      Mua vé ngay
    </button>
  </Link>
)}
      </div>
    </div>
  );
};

export default ContentPage;
