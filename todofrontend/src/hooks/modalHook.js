import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Skeleton from "@mui/material/Skeleton";

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
    const { isOpen, onClose, title, content, editId, isloading } = this.props;
    return (
      isOpen && (
        <Modal
          open={isOpen}
          onClose={onClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          {!content ? (
            <Stack sx={box_style} variant='rectangular' spacing={1}>
              <Skeleton variant='text' sx={{ fontSize: "1rem" }} />
              <Skeleton variant='text' sx={{ fontSize: "1rem" }} />
              <Skeleton variant='text' sx={{ fontSize: "1rem" }} />
            </Stack>
          ) : (
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
          )}
        </Modal>
      )
    );
  }
}

export default ModalHook;
