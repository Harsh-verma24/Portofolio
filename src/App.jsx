
import { useState } from "react";

import SinglePage from "./SinglePage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col dark">
      {/* Single scrolling SPA */}
      <SinglePage />
    </div>
  );
}
