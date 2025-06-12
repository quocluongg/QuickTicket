'use client';
import MobilePageLayout from '@/@shared/components/layout/Page';
import React from 'react';
import LoginButton from './LoginButton';
import SignInPage from './SignInSection';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/@shared/components/ui/Tabs';
import SignUpPage from './SignUpSection';

const page = () => {
  return (
    <MobilePageLayout className="gradient-bg">
      <Tabs
        defaultValue="signin"
        className="w-full flex flex-col justify-center items-center "
      >
        <TabsList className="!w-[80%] bg-[#761cbc] rounded-[28px] h-[54px] text-white">
          <TabsTrigger value="signin" className="w-1/2 rounded-[28px] h-[46px]">
            Đăng nhập
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="w-1/2 rounded-[28px] h-[46px] text-white"
          >
            Đăng kí
          </TabsTrigger>
        </TabsList>

        <TabsContent value="signin">
          <SignInPage />
        </TabsContent>

        <TabsContent value="signup">
          <SignUpPage />
        </TabsContent>
      </Tabs>
    </MobilePageLayout>
  );
};

export default page;
