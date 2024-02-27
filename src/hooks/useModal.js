import { useState } from 'react';

export const useModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  return { openModal, handleClose, handleOpen };
};
