import { useState } from 'react';

export const useSuccessMsg = (timeDelay = 2000) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const displaySuccessMsg = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, timeDelay);
  };

  return { isSubmitted, displaySuccessMsg };
};
