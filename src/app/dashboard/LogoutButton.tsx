'use client';

import { Button } from '@/@shared/components/ui/Button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <div className="text-white">
        Signed in as {session.user?.email} <br />
        <img src={`${session.user?.image}`} alt="" />
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  } else {
    // router.push("/auth")
  }
}
