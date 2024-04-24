import React from "react";
import Lottie from "lottie-react";
import { AnimationProps } from "../../interface/data";

const AnimationContainer = ({ className, src, loop }: AnimationProps) => {
  return (
    <div className={className}>
      <Lottie animationData={src} loop={loop} />
    </div>
  );
};

export default AnimationContainer;
