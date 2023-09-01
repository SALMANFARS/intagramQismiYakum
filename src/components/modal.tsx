import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AiOutlinePlusSquare } from "react-icons/ai";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
    width: 400,
    height: 300,
  bgcolor: "background.paper",
  border: "2px solid gray",
  boxShadow: 12,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        onClick={handleOpen}
        className="compas flex items-center py-[20px] ml-[4px]"
      >
        <AiOutlinePlusSquare className="text-[30px]" />

        <p className="sm:hidden xl:flex ml-[25px]">Create</p>
      </div>
      {/* <Button>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="div text-center py-[10px]">
            <AddPhotoAlternateIcon text-center />
          </div>

          <div className="py-[10px] text-center text-[22px]">
            <p>Перетащите сюда фото и видео</p>
          </div>

          <div className="py-[10px] text-center text-[22px]">
           <button className="py-[2px] px-[5px] bg-blue-500 text-white rounded-xl text-lg">Выбирите на компютере</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
