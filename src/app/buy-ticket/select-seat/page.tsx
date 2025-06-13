'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBookingStore } from '@hooks/useBookingStore';

const SeatSelection: React.FC = () => {
  const router = useRouter();
  const rows = 6;
  const cols = 8;
  const takenSeats = [
    '2-3',
    '2-4',
    '3-1',
    '3-2',
    '3-3',
    '3-4',
    '3-5',
    '3-6',
    '3-7',
    '3-8',
  ]; // VD

  const [selectedSeats, setLocalSelectedSeats] = useState<string[]>([]);
  const setGlobalSelectedSeats = useBookingStore(state => state.setSelectedSeats);

  const handleNext = () => {
    setGlobalSelectedSeats(['A1', 'A2']); // Dummy data
    router.push('/buy-ticket/select-combo');
  };

  const handleSelect = (row: number, col: number) => {
    const seatId = `${row}-${col}`;
    if (takenSeats.includes(seatId)) return;

    if (selectedSeats.includes(seatId)) {
      setLocalSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      setLocalSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const renderSeat = (row: number, col: number) => {
    const seatId = `${row}-${col}`;
    let color = 'bg-white border';
    if (takenSeats.includes(seatId)) color = 'bg-red-500';
    else if (selectedSeats.includes(seatId)) color = 'bg-blue-500';

    return (
      <div
        key={seatId}
        onClick={() => handleSelect(row, col)}
        className={`w-6 h-6 m-1 rounded ${color} cursor-pointer transition duration-200`}
      />
    );
  };

  return (
    <div>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6 mt-6">
        <h2 className="text-center text-[20px] font-semibold text-[#761CBC] mb-4">
          Select Seats
        </h2>

        <div className="space-y-2 text-sm font-medium text-gray-400">
          <div>
            <label className="block mb-1">Cinema</label>
            <div className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white">
              RẠP CHIẾU
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block mb-1">Date</label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white">
                02 Nov 2021
              </div>
            </div>

            <div className="flex-1">
              <label className="block mb-1">Time</label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white">
                01.00 PM
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center mt-6 mx-auto mb-6">
          <svg
            width="315"
            height="92"
            viewBox="0 0 315 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31 17C50.5707 11.6667 103.217 2 155.237 2C207.258 2 257.588 11.6667 278 17"
              stroke="#54A8E5"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M0 92L32.1944 20.3429C51.3427 14.8952 102.643 4 154.659 4C206.675 4 261.51 15.0524 281.5 20.5L315 92C315 92 217.786 67.4857 157.5 67.4857C97.2144 67.4857 0 92 0 92Z"
              fill="url(#paint0_linear_7_354)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_7_354"
                x1="157.5"
                y1="4"
                x2="157.5"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#54A8E5" stop-opacity="0.5" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex flex-col items-center">
          {[...Array(rows)].map((_, rowIdx) => (
            <div key={rowIdx} className="flex justify-center">
              {[...Array(cols)].map((_, colIdx) =>
                renderSeat(rowIdx + 1, colIdx + 1),
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 text-xs mt-6">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-500 rounded" />
            <span>Đã chọn</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-red-500 rounded" />
            <span>Đã có</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-white border rounded" />
            <span>Có sẵn</span>
          </div>
        </div>
      </div>
      <div className="p-4 fixed left-0 bottom-0 w-full">
        <button onClick={handleNext} className="w-full rounded-[14px] bg-[#761cbc] px-4 py-3 text-zinc-950 font-bold hover:bg-white/90 !text-white mt-[30px]">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default SeatSelection;
