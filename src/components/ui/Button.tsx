import { Button as MainButton } from "@material-tailwind/react";

interface ButtonProps {
    children?: React.ReactNode | undefined;
    className?: string
}

export default function Button({children, className}: ButtonProps) {
  return (
    <MainButton
    className={className}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {children}
    </MainButton>
  );
}
