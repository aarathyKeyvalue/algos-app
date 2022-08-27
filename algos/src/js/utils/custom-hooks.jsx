import { useEffect } from 'react';
const useOutsideClick = (ref, callback) => {
    const handleClick = (evt) => {
      if (ref.current && !ref.current.contains(evt.target)) {
        callback();
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClick, true);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    });
};

  export default useOutsideClick;