"use client";

import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        GO vegan
        <div>
          {/* New Chat */}
          <NewChat />
          <div>Model selection</div>
          {/* Map through chat rows */}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile pc"
          className="h-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default Sidebar;
