import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

interface CustomModalProps {
  children: React.ReactElement;
  open: boolean;
  handleClose: () => void;
}

function CustomModal({
  children,
  handleClose,
  open
}: CustomModalProps) {
  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {children}
        </Fade>
      </Modal>
  );
}

export default React.memo(CustomModal)
