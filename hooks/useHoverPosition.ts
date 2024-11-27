import { useState } from "react";

const useHoverPosition = () => {
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const resetHoverPosition = () => {
    setHoverPosition(null);
  };

  return { hoverPosition, handleMouseMove, resetHoverPosition };
};

export default useHoverPosition;