import { useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt,
  className,
}) => {
  const [transformOrigin, setTransformOrigin] = useState("center center");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setTransformOrigin("center center");
  };

  return (
    <div
      className={`w-full h-64 border border-gray-300 rounded mb-4 overflow-hidden cursor-zoom-in relative ${
        className ?? ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-150"
        style={{ transformOrigin }}
      />
    </div>
  );
};

export default ZoomableImage;
