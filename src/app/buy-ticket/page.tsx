'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function BuyTicketIndex() {
  const router = useRouter();
  const searchParams = useSearchParams();
  if (!searchParams) {router.replace('/buy-ticket/select-seat'); return;}
  useEffect(() => {
    const eventType = searchParams.get('eventType');

    if (!eventType) return;

    if (eventType === 'movie') {
      router.replace('/buy-ticket/select-seat');
    } else {
      router.replace('/buy-ticket/select-ticket-type');
    }
  }, [searchParams, router]);

  return null;
}
