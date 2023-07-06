import React from "react";

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-4 bg-gray-200 p-8 rounded-xl ">
      {children}
    </div>
  );
};

export default FormWrapper;
