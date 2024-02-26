import { useRef, useState } from 'react';
import { useHandleOutsideClick } from './useHandleOutsideClick';

export const usePopOver = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useHandleOutsideClick(ref, handleClose);

  return { isOpen, ref, handleOpen };
};
