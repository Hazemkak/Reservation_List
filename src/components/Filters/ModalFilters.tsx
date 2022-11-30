import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ExpandOptions from "./ExpandOptions";
import { MdPlace, MdOutlineRestaurant } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AREA, SHIFT, STATUS } from "../../interfaces/Values";
import ClickAwayListener from "@mui/base/ClickAwayListener";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  overflow: "scroll",
  height: 600,
  bgcolor: "background.paper",
  p: 4,
};

interface ModalFiltersProps {
  closeModal: (event: MouseEvent | TouchEvent) => void;
  setDate: Function;
  date: Date | null;
  area: string[];
  setArea: Function;
  shifts: string[];
  setShifts: Function;
  status: string[];
  setStatus: Function;
}

function ModalFilters(props: ModalFiltersProps) {
  const {
    closeModal,
    date,
    setDate,
    area,
    setArea,
    status,
    setStatus,
    shifts,
    setShifts,
  }: ModalFiltersProps = props;

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ClickAwayListener onClickAway={closeModal}>
        <Box sx={style}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Filter By Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => (
                <TextField fullWidth size="small" {...params} />
              )}
            />
          </LocalizationProvider>
          <br />
          <br />
          <ExpandOptions
            items={AREA}
            selectedItems={area}
            setSelected={setArea}
            icon={<MdPlace />}
            title="Filter By Area"
          />
          <ExpandOptions
            items={STATUS}
            selectedItems={status}
            setSelected={setStatus}
            icon={<GrStatusUnknown />}
            title="Filter By Status"
          />

          <ExpandOptions
            items={SHIFT}
            selectedItems={shifts}
            setSelected={setShifts}
            icon={<MdOutlineRestaurant />}
            title="Filter By Shift"
          />
        </Box>
      </ClickAwayListener>
    </Modal>
  );
}

export default ModalFilters;
