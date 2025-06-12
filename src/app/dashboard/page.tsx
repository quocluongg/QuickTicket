'use client'

import MobilePageLayout from "@/@shared/components/layout/Page";
// ProfilePage.tsx
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGlobe, FaLock, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

export default function ProfilePage() {
    const { data: session } = useSession();
    if(session == null) return
    const router = useRouter();
  return (
    <MobilePageLayout className="bg-gradient ">

    <div className="min-h-screen from-white to-purple-100 flex flex-col items-center p-6">
      <div className="mt-12 flex flex-col items-center">
         <img src={`${session.user?.image}`}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover" />
        <h2 className="mt-4 text-lg font-semibold">LUONG VO KHOI QUOC</h2>
        <p className="text-sm text-gray-600">{session.user?.email}</p>
        <button className="mt-3 px-4 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
          Edit
        </button>
      </div>

      <div className="mt-10 w-full max-w-sm space-y-4">
        <Option icon={<FaGlobe />} label="Language" />
        <Option icon={<FaLock />} label="Change Password" />
        <Option icon={<FaQuestionCircle />} label="Help" />
        <button onClick={() => signOut()} className="w-full">
        <Option icon={<FaSignOutAlt />} label="Logout" />

        </button>
      </div>
    </div>
    </MobilePageLayout>

  );
}

function Option({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-between bg-indigo-50 p-4 rounded-xl shadow hover:bg-indigo-100 cursor-pointer">
      <div className="flex items-center space-x-3">
        <span className="text-indigo-600">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="text-gray-400 text-sm">{'>'}</span>
    </div>
  );
}
