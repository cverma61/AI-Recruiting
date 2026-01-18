import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function useCanonical(path?: string) {
  const [location] = useLocation();
  const canonicalPath = path || location;
  const url = `https://airecruitinginsider.com${canonicalPath}`;

  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    
    link.setAttribute('href', url);

    return () => {
      // Optional: Remove or reset on cleanup if needed, 
      // but usually persistence is fine for SPA navigation
    };
  }, [url]);
}