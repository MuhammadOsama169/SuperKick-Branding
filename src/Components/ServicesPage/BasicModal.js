import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import FormModal from './FormModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: '#1F1F1F',
  color: 'white',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const style2 = {
  paddingLeft: 3,
  paddingTop: 1,
  color: '#FF005C',
  lineHeight: '0.9em',
  fontFamily: 'Bebas Neue',
  fontWeight: '400',
  fontSize: '55px',
};

const style3 = {
  paddingLeft: 3,
  paddingTop: 2,
  color: 'white',
  lineHeight: '1.1em',
  fontFamily: 'Work Sans',
  fontWeight: '400',
  fontSize: '16px',
};
function BasicModal({ openModal, closeModal }) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={style2}
          >
            BRAND DIAGNOSTIC
          </Typography>
          <Typography id="modal-modal-description" sx={style3}>
            Please provide your contact information. Someone from Superkick will
            contact you to set up an introductory meeting.
          </Typography>
          <FormModal />
        </Box>
      </Modal>
    </div>
  );
}
export default BasicModal;
