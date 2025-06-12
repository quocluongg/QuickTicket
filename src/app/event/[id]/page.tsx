'use client';
import MobilePageLayout from '@/@shared/components/layout/Page';
import React from 'react';
import { useParams } from 'next/navigation';
import ContentPage from './ContentPage';

const page = () => {
  const params = useParams();
  const id = params?.id;
  return (
    <MobilePageLayout className="" fullScreen>
      <ContentPage id={id}/>
    </MobilePageLayout>
  );
};

export default page;
