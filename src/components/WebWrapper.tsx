import React from "react";

const WebWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-auto my-32 px-3">{children}</div>;
};

export default WebWrapper;
