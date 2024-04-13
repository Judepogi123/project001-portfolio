import { useState, useEffect } from "react";
import { ImageProps } from "../../interface/data";
import { Link } from "react-router-dom";

const Img = ({ ...props }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleImageLoad = () => setIsLoading(false);
    const handleImageError = () => setError("Image failed to load.");

    const image = new Image();
    image.onload = handleImageLoad;
    image.onerror = handleImageError;
    image.src = props.src;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [props.src]);

  if (!props.onLoad) {
    return <img src={props.src} alt="Image" />;
  }
  return (
    <div className="">
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && (
        // ... other code
        <Link to={props.src}>
          <img
           className={props.className}
            src={props.src}
            alt="Image"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "placeholder.svg";
            }}
          />
        </Link>
      )}
    </div>
  );
};

export default Img;
