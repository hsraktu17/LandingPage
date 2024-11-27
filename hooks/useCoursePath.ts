import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const useCoursePath = () => {
  const [isBusinessCentric, setIsBusinessCentric] = useState<boolean>(true);
  const pathCohortInfo = useRef<HTMLDivElement | null>(null);

  // Auto Scroll Added Here
  useEffect(() => {
    const container = pathCohortInfo.current;
    const isMobileOrTablet = window.innerWidth <= 768;

    if (container && !isMobileOrTablet) {
      const autoScroll = gsap.to(container, {
        scrollLeft: container.scrollWidth - container.clientWidth,
        duration: 10,
        ease: "linear",
      });

      // Remove autoScroll 
      return () => {
        autoScroll.kill(); 
      };
    }
  }, [isBusinessCentric]);

  // On Button Switch Auto Scroll changed
  useEffect(() => {
    const container = pathCohortInfo.current;
    if (container) {
      container.scrollLeft = 0;
    }
  }, [isBusinessCentric]);

  // For Manual scroll
  useEffect(() => {
    const container = pathCohortInfo.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      gsap.to(container, {
        scrollLeft: container.scrollLeft + e.deltaY * 2,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    let isDragging = false;
    let startX = 0;
    let initialScrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      initialScrollLeft = container.scrollLeft;
      container.style.cursor = "grabbing";
    };

    const handleMouseUpOrLeave = () => {
      isDragging = false;
      container.style.cursor = "default";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = initialScrollLeft - walk;
    };

    container.addEventListener("wheel", handleWheel);
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUpOrLeave);
    container.addEventListener("mouseleave", handleMouseUpOrLeave);
    container.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUpOrLeave);
      container.removeEventListener("mouseleave", handleMouseUpOrLeave);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return { isBusinessCentric, setIsBusinessCentric, pathCohortInfo };
};

export default useCoursePath;