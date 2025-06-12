'use client';

import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { Button } from '@/@shared/components/ui/Button';

const SignUpPage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="text-white">
        Signed in as {session.user?.email} <br />
        <img src={`${session.user?.image}`} alt="" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-[24px] rounded-xl mt-[40px]">
      <div className="w-full max-w-sm">
        <div className="space-y-1">
          <h1 className="text-[16px] font-bold">ĐĂNG KÝ</h1>
          <p className="text-sm text-zinc-400">
            Tạo tài khoản mới để bắt đầu hành trình của bạn!
          </p>

          <form className="space-y-4 mt-[40px]">
            <div>
              <label htmlFor="name" className="text-[14px] font-bold">
                TÊN HIỂN THỊ
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nhập tên hiển thị"
                className="w-full rounded-[28px] border border-[#f3f4f9] px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-[14px] font-bold">
                ĐỊA CHỈ EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Nhập địa chỉ email"
                className="w-full rounded-[28px] border border-[#f3f4f9] px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-[14px] font-bold">
                MẬT KHẨU
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Tạo mật khẩu"
                className="w-full rounded-[28px] border border-[#f3f4f9]  px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none"
              />
            </div>
            <div className="flex items-start space-x-2 mt-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                required
              />
              <label htmlFor="terms" className="text-sm text-zinc-600">
                Tôi đồng ý với{' '}
                <a href="/terms" className="text-[#25388d] underline">
                  chính sách
                </a>{' '}
                và các{' '}
                <a href="/terms" className="text-[#25388d] underline">
                  điều khoản
                </a>{' '}
                khi lập tài khoản
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-[28px] bg-[#761cbc] px-4 py-3 text-zinc-950 font-bold hover:bg-white/90 !text-white mt-[30px]"
            >
              ĐĂNG KÝ
            </button>
          </form>

          <div className="flex justify-center flex-col mt-[40px] space-y-2">
            <p className="text-center">Hoặc đăng ký bằng</p>
            <Button
              className="mx-auto bg-white border rounded-full"
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            >
              <img
                width={30}
                height={30}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                alt="Google"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
