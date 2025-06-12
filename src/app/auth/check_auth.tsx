'use client';
import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CheckAuthPage = ({ URL }: { URL: string }) => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      console.log('SESSION:', session);

      if (session) {
        router.replace(`${URL}`);
      } else {
        router.replace('/login');
      }
    };

    checkSession();
  }, [router]);

  return null;
};

export default CheckAuthPage;
