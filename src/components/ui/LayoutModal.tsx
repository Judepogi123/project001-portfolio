import React, { SetStateAction } from "react";

interface LayoutProps {
  children: React.ReactNode;
  setOnView: React.Dispatch<SetStateAction<boolean>>;
}

const LayoutModal = ({ children, setOnView }: LayoutProps) => {
  const handleParentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the target element has the parent ID
    if (e.target instanceof Element && e.target.id === "parent") {
      setOnView(false);
    }
  };

  return (
    <div
      id="parent"
      onClick={handleParentClick}
      className="w-full h-full opacity-50 flex justify-center items-center left-0 top-0 right-0 bottom-0 absolute bg-slate-300"
    >
      <div
        id="child"
        className="w-4/5 h-4/5 border bg-slate-400 opacity-90 backdrop-blur z-50"
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutModal;
