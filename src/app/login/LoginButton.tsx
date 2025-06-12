'use client';

import { Button } from '@/@shared/components/ui/Button';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="text-white">
        Signed in as {session.user?.email} <br />
        <img src={`${session.user?.image}`} alt="" />
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <Button
      className="mx-auto"
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
    >
      Sign in with Google
    </Button>
  );
}
