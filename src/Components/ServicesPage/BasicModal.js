import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormModal from './FormModal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: '#1F1F1F',
  color:'white',
  border: 'none',
  boxShadow: 24,
  p: 3,
};

const style2 = {
paddingLeft:3,
paddingTop:2,
color:'#FF005C',
lineHeight: '1.1em',
fontFamily: 'Bebas Neue',
fontWeight: '400',
fontSize: '55px',
};

const style3 = {
paddingLeft:3,
paddingTop:2,
color:'white',
lineHeight: '1.1em',
fontFamily: 'Work Sans',
fontWeight: '400',
fontSize: '16px',
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={style2}>
            BRAND DIAGNOSTIC
          </Typography>
          <Typography id="modal-modal-description" sx={style3} >
          Please provide your contact information. Someone from Superkick will contact you to set up an introductory meeting.
          </Typography>
          {/* <FormModal></FormModal> */}
        </Box>
      </Modal>
    </div>
  );
}