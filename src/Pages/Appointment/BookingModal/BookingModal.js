import { Fade, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';

const style = {
    background: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({open, handleClose, name, time}) => {
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form>
                <TextField
                disabled
                id="outlined-size-small"
                defaultValue={time}
                size="small"
                />
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;