import { useEffect, useRef, useState } from 'react';

const usePathVisibility = () => {
  const [refreshPath, setRefreshPath] = useState(false);
  const [isPathVisible, setIsPathVisible] = useState(false);
  const pathRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePathVisibility = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isPathVisible) {
            setIsPathVisible(true);
            setRefreshPath((prev) => !prev);
          }
        } else {
          setIsPathVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handlePathVisibility, {
      rootMargin: '0px',
      threshold: 0.5,
    });

    if (pathRef.current) {
      observer.observe(pathRef.current);
    }
    return () => {
      if (pathRef.current) {
        observer.unobserve(pathRef.current);
      }
    };
  }, [isPathVisible]);

  return { pathRef, isPathVisible, refreshPath };
};

export default usePathVisibility;