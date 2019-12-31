import { useEffect, useState } from 'react';

/**
 * Sets a visibility flag when the dependant variable changes
 * and is truthy. Returns the visiblity flag alongside
 * a function that can be used to dismiss (revert visibility to false)
 * @param {any} dependant The dependant variable
 */
export default function useToast(dependant) {
  const [visible, setVisibility] = useState(false);
  useEffect(() => {
    if (dependant) {
      setVisibility(true);
    }
  }, [dependant]);
  const dismiss = () => setVisibility(false);
  return { visible, dismiss };
}
