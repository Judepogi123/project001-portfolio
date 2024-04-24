import React from "react";
import { Input as MainInput } from "@material-tailwind/react";
import { variant } from "@material-tailwind/react/types/components/input";

interface InputProps {
  label: string;
  onPointerEnterCapture: unknown;
  onPointerLeaveCapture: unknown;
  crossOrigin: unknown;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string;
  variant?: variant | undefined
}

const Input = ({
  label,
  onPointerEnterCapture,
  onPointerLeaveCapture,
  crossOrigin,
  onChange,
  className,
  variant
}: InputProps) => {
  return (
    <MainInput
    variant={variant}
    className={className}
      onChange={onChange}
      label={label}
      onPointerEnterCapture={onPointerEnterCapture}
      onPointerLeaveCapture={onPointerLeaveCapture}
      crossOrigin={crossOrigin}
    />
  );
};

export default Input;
