'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../@shared/components/ui/Carousel';
import { useGetEvents } from '../../../hooks/useGetEvents';
import Autoplay from 'embla-carousel-autoplay';
import Loading from '@/@shared/components/icon/Loading';

const BannerSlider = () => {
  const { data, isLoading, error } = useGetEvents();
  return (
    <div>
      {isLoading && <Loading />}
      {error && <>{error.message}</>}
      {!data && <p>No events found</p>}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {data &&
            data.map((event: any) => (
              <CarouselItem key={event.id}>
                <img
                  className="object-cover"
                  src={event.banner_image}
                  alt={event.name || 'Event Image'}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
