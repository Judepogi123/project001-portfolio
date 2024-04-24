import React from "react";
import { Textarea as MainTextarea } from "@material-tailwind/react";

interface TextareaProps {
  label: string;
  onPointerEnterCapture: unknown;
  onPointerLeaveCapture: unknown;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  className?: string;
}

const Textarea = ({
  label,
  onPointerEnterCapture,
  onPointerLeaveCapture,
  onChange,
  className,
}: TextareaProps) => {
  return (
    <MainTextarea
      className={className}
      onChange={onChange}
      label={label}
      onPointerEnterCapture={onPointerEnterCapture}
      onPointerLeaveCapture={onPointerLeaveCapture}
    />
  );
};

export default Textarea;
