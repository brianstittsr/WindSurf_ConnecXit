import React, { useState } from "react";

const Img = ({
  className = "",
  src = "",
  alt = "image",
  ...props
}) => {
  const [error, setError] = useState(false);

  const handleError = (e) => {
    setError(true);
    // If the image fails to load, use a fallback image from Unsplash
    const fallbackImage = `https://source.unsplash.com/featured/?business,professional`;
    if (src !== fallbackImage) {
      const img = e.target;
      img.src = fallbackImage;
    }
  };

  return (
    <img
      className={`${className}`}
      src={error ? `https://source.unsplash.com/featured/?business,professional` : src}
      alt={alt}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
};

export default Img;
