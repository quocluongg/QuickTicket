'use client';
import MobilePageLayout from '@/@shared/components/layout/Page';
import React from 'react';
import SuggestSection from './SuggestSection';
import HeadingSection from './HeadingSection';
import SearchBar from './SearchBar';
import ListCatagorySection from './ListCatagorySection';
import MaybeYouLikeSection from './MaybeYouLikeSection';

const page = () => {
  return (
    <MobilePageLayout>
      <div className="space-y-[20px]">
        <HeadingSection />
        <SearchBar />
        <ListCatagorySection />
        {/* <BannerSlider /> */}
        <SuggestSection />
        <MaybeYouLikeSection />
      </div>
    </MobilePageLayout>
  );
};

export default page;
