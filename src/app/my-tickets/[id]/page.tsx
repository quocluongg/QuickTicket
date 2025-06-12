import MobilePageLayout from '@/@shared/components/layout/Page';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <MobilePageLayout className="gradient-bg" fullScreen>
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-md overflow-hidden border border-gray-200 relative">
        {/* Top image */}
        <div className="w-auto h-48 m-[10px] relative">
          <img
            src="https://sb.tinhte.vn/2021/01/5310924_horizental_poster-e7c3aad06dc7-1606465079207-AjZzpf8S.jpg" // 🔁 Đổi sang ảnh phù hợp trong public folder
            alt="Coldplay Concert"
            className="object-cover rounded-[14px]"
          />
        </div>

        {/* Event name and location */}
        <div className="p-4 pt-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Coldplay : Và những người bạn
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Nov 15 2025 – Sân vận động quân khu 7, TP.HCM
          </p>
        </div>

        {/* Ticket info */}
        <div className="p-4 space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Tên</span>
            <span className="text-right">Lương Võ Khôi Quốc</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Mã giao dịch</span>
            <span>CLD09738PL</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Thời gian</span>
            <span>Nov 15 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Giờ</span>
            <span>9:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Loại vé</span>
            <span>VIP</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Ghế ngồi</span>
            <span>VIP_3A</span>
          </div>
        </div>
        <div className="relative my-4">
          {/* Nửa tròn bên trái */}
          <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-14 h-14 bg-purple-200 rounded-full z-10"></div>

          {/* Nửa tròn bên phải */}
          <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-14 h-14 bg-purple-200 rounded-full z-10"></div>

          {/* Đường nét đứt */}
          <div className="border-t border-dashed border-gray-300 w-full"></div>
        </div>

        {/* QR Code */}
        <div className="p-4 flex flex-col items-center">
          <div className="flex justify-center py-6">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=abcxyz}`}
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
