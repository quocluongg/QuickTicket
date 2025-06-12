'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/@shared/components/ui/Button';
import LoginButton from './LoginButton';

const SignInPage = () => {
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
          <h1 className="text-[16px] font-bold">ĐĂNG NHẬP</h1>
          <p className="text-sm text-zinc-400">
            Chắc chắn là bạn đã có tạo tài khoản rồi nhé !
          </p>

          <form className="space-y-4 mt-[40px]">
            <div>
              <label htmlFor="email" className="text-[14px] font-bold">
                ĐIA CHỈ EMAIL
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
                MẬT KHẢU
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Nhập mật khẩu của bạn"
                className="w-full rounded-[28px] border border-[#f3f4f9]  px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none"
              />
            </div>
            <div className="text-right">
              <a
                href="/forgot_password"
                className="text-[#25388d] text-sm font-medium"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-[28px] bg-[#761cbc] px-4 py-3 text-zinc-950 font-bold hover:bg-white/90 !text-white mt-[30px]"
            >
              ĐĂNG NHẬP
            </button>
          </form>

          <div className="flex justify-center flex-col mt-[40px] space-y-2">
            <p className="text-center ">Hoặc</p>
            <Button
              className="mx-auto bg-white border rounded-full"
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            >
              <img
                width={30}
                height={30}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                alt=""
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
