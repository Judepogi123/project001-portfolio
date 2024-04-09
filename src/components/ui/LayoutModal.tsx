import React, { SetStateAction } from "react";

interface LayoutProps {
  children: React.ReactNode;
  setOnView: React.Dispatch<SetStateAction<boolean>>;
setSelectedProject: React.Dispatch<SetStateAction<string | null>>
}

const LayoutModal = ({ children, setOnView,setSelectedProject }: LayoutProps) => {
  const handleParentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the target element has the parent ID
    if (e.target instanceof Element && e.target.id === "parent") {
      setSelectedProject(null)
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
        className="w-4/5 h-4/5 opacity-100 border bg-slate-400 backdrop-blur z-50"
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutModal;
