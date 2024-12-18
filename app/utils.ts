import { useEffect, useState } from "react";

export const useWidth = (): number => {
  // inspired by https://stackoverflow.com/a/75648500/19456595
  const [width, setWidth] = useState<number>(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [])
  return width;
}
