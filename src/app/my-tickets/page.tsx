'use client';
import MobilePageLayout from '@/@shared/components/layout/Page';
import React from 'react';
import CheckAuthPage from '../auth/check_auth';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/@shared/components/ui/Tabs';

const page = () => {
  return (
    <MobilePageLayout>
      <CheckAuthPage URL="/my-tickets"></CheckAuthPage>
      <div className="p-2">
        <h1 className="text-2xl font-bold mb-4 text-[#761cbc]">Sự kiện</h1>
        <Tabs
        defaultValue="signin"
        className="w-full flex flex-col justify-center items-center "
      >
        <TabsList className="!w-[80%] bg-[#761cbc] rounded-[12px] h-[54px] text-white">
          <TabsTrigger value="signin" className="w-1/2 rounded-[12px] h-[46px]">
            Sắp diễn ra
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="w-1/2 rounded-[12px] h-[46px] text-white"
          >
            Đã kết thúc
          </TabsTrigger>
        </TabsList>

        <TabsContent value="signin">
        <div></div>
        </TabsContent>

        <TabsContent value="signup">
          <div></div>
        </TabsContent>
      </Tabs>
      </div>
    </MobilePageLayout>
  );
};

export default page;
