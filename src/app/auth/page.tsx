'use client';

import React from 'react';
import CheckAuthPage from './check_auth';
import MobilePageLayout from '@/@shared/components/layout/Page';

const page = () => {
  return (
    <MobilePageLayout>
      <CheckAuthPage URL="/dashboard"></CheckAuthPage>
    </MobilePageLayout>
  );
};

export default page;
