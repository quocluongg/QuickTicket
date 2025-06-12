'use client';
import MobilePageLayout from '@/@shared/components/layout/Page';
import React from 'react';

const page = () => {
  return (
    <MobilePageLayout className="gradient-bg">
      <div className="space-y-[20px]">
        {/* title  */}
        <div className="text-[24px] text-left font-bold leading-[normal] text-[#120d26]">
          Reset Password
        </div>
        {/* sub title  */}
        <div className="text-[16px] text-left font-normal leading-[normal] text-[#8c8ca1]">
          Please enter your email address to request a password reset
        </div>
        {/* form  */}
        <form className="space-y-4 mt-[20px]">
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Nhập địa chỉ email"
              className="w-full rounded-[12px] bg-white px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-[12px] bg-[#761cbc] px-4 py-3 text-zinc-950 font-bold hover:bg-white/90 !text-white mt-[20px]"
          >
            GỬI YÊU CẦU
          </button>
        </form>
      </div>
    </MobilePageLayout>
  );
};

export default page;
