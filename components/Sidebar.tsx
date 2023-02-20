import React from "react";
import NewChat from "./NewChat";

function Sidebar() {
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
    </div>
  );
}

export default Sidebar;
