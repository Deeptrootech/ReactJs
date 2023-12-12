import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const box_style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const title_style = {
  display: "flex",
  justifyContent: "space-between",
};

class ModalHook extends Component {
  render() {
    const { isOpen, onClose, title, content, editId } = this.props;
    if (!isOpen) {
      return null;
    }
    return (
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={box_style}>
          <Typography
            sx={title_style}
            id='modal-modal-title'
            variant='h6'
            component='h2'>
            {title}
            {editId}
            <span
              style={{ cursor: "pointer" }}
              className='close'
              onClick={onClose}>
              &times;
            </span>
          </Typography>
          <Typography
            id='modal-modal-description'
            component={"div"}
            sx={{ mt: 2 }}>
            {content}
          </Typography>
        </Box>
      </Modal>
    );
  }
}

export default ModalHook;
