import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/system';

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
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
  };
  
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
        <Box sx={style}>
          <Fade in={open}>
            {children}
          </Fade>
        </Box>
      </Modal>
  );
}

export default React.memo(CustomModal)
