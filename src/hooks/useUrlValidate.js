import { useEffect, useState } from 'react';
import { isValidUrl } from '../services/url-validate';

export function useUrlValidate(url) {
  const [isValid, setIsValid] = useState(isValidUrl(url));
  useEffect(() => {
    setIsValid(isValidUrl(url));
  }, [url]);
  return isValid;
}
